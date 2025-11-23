'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, X, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { UploadedFile, FileFormat, FILE_FORMATS } from '@/types';

export default function DocumentConverter() {
  const [sourceFormat, setSourceFormat] = useState<FileFormat | null>(null);
  const [targetFormat, setTargetFormat] = useState<FileFormat>(FILE_FORMATS[0]);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Auto-detect file format
  const detectFileFormat = useCallback((file: File): FileFormat | null => {
    const fileName = file.name.toLowerCase();
    const fileType = file.type;

    // Find format based on extension or mime type
    for (const format of FILE_FORMATS) {
      const matchExtension = format.extensions.some(ext => fileName.endsWith(ext));
      const matchMime = format.mimeTypes.some(mime => fileType === mime);
      
      if (matchExtension || matchMime) {
        return format;
      }
    }

    return null;
  }, []);

  // Show toast notification
  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // Handle file validation
  const validateFile = useCallback((file: File, format: FileFormat): boolean => {
    const maxSize = 200 * 1024 * 1024; // 200MB
    
    if (file.size > maxSize) {
      showToast('File terlalu besar! Maksimal 200MB', 'error');
      return false;
    }

    const isValidType = format.extensions.some(ext => 
      file.name.toLowerCase().endsWith(ext)
    ) || format.mimeTypes.some(mime => file.type === mime);

    if (!isValidType) {
      showToast(`Format file tidak sesuai! Harap upload file ${format.label}`, 'error');
      return false;
    }

    return true;
  }, [showToast]);

  // Handle file upload
  const handleFileUpload = useCallback((uploadedFiles: FileList | null) => {
    if (!uploadedFiles) return;

    const newFiles: UploadedFile[] = [];
    
    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];
      
      // Auto-detect source format
      const detectedFormat = detectFileFormat(file);
      
      if (!detectedFormat) {
        showToast(`Format file "${file.name}" tidak didukung`, 'error');
        continue;
      }

      // Simpan format sumber terakhir yang terdeteksi untuk ditampilkan di UI
      setSourceFormat(detectedFormat);

      if (validateFile(file, detectedFormat)) {
        newFiles.push({
          id: `${Date.now()}-${i}`,
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          sourceFormat: detectedFormat,
          targetFormat: targetFormat,
          status: 'waiting',
          progress: 0,
        });
      }
    }

    if (newFiles.length > 0) {
      setFiles(prev => [...prev, ...newFiles]);
      showToast(`${newFiles.length} file berhasil ditambahkan`, 'success');
    }
  }, [targetFormat, validateFile, showToast, detectFileFormat]);

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = e.dataTransfer.files;
    handleFileUpload(droppedFiles);
  };

  // Remove file from list
  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Start conversion process
  const startConversion = async () => {
    const waitingFiles = files.filter(f => f.status === 'waiting');
    
    if (waitingFiles.length === 0) {
      showToast('Tidak ada file yang perlu dikonversi', 'error');
      return;
    }

    // Process each file
    for (const file of waitingFiles) {
      // Update status to processing
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'processing', progress: 0 } : f
      ));

      try {
        // Simulate progress
        for (let progress = 0; progress <= 100; progress += 20) {
          await new Promise(resolve => setTimeout(resolve, 500));
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, progress } : f
          ));
        }

        // Call API
        const formData = new FormData();
        formData.append('file', file.file);
        formData.append('sourceType', file.sourceFormat.id);
        formData.append('targetType', file.targetFormat.id);

        const response = await fetch('/api/convert', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { 
              ...f, 
              status: 'completed', 
              progress: 100,
              downloadUrl: result.downloadUrl 
            } : f
          ));
        } else {
          throw new Error(result.error || 'Konversi gagal');
        }
      } catch (error) {
        setFiles(prev => prev.map(f => 
          f.id === file.id ? { 
            ...f, 
            status: 'error', 
            error: error instanceof Error ? error.message : 'Terjadi kesalahan'
          } : f
        ));
      }
    }

    showToast('Konversi selesai!', 'success');
  };

  return (
    <section id="converter" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Konversi Dokumen Anda</h2>
          <p className="text-gray-600 text-lg">
            Pilih jenis konversi, upload file, dan dapatkan hasil dalam hitungan detik
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
        >
          {/* Source & Target Format Selector */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Detected Source Format (read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                📄 Dari Format (Terdeteksi)
              </label>
              <select
                value={sourceFormat ? sourceFormat.id : ''}
                disabled
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600 cursor-not-allowed"
              >
                {sourceFormat ? (
                  <option value={sourceFormat.id}>{sourceFormat.label}</option>
                ) : (
                  <option value="">Belum ada file • Sistem akan mendeteksi otomatis</option>
                )}
              </select>
              <p className="mt-2 text-xs text-gray-500">
                Sistem akan otomatis mengisi format sumber setelah Anda upload file.
              </p>
            </div>

            {/* Target Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                🎯 Konversi Ke Format
              </label>
              <select
                value={targetFormat.id}
                onChange={(e) => {
                  const format = FILE_FORMATS.find(f => f.id === e.target.value);
                  if (format) {
                    setTargetFormat(format);
                  }
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors text-gray-700 font-medium"
              >
                {FILE_FORMATS.map(format => (
                  <option key={format.id} value={format.id}>
                    {format.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Upload Area */}
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`border-3 border-dashed rounded-xl p-12 text-center transition-all ${
              isDragging
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
            }`}
          >
            <input
              type="file"
              id="file-upload"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className={`w-16 h-16 mx-auto mb-4 ${isDragging ? 'text-primary-600' : 'text-gray-400'}`} />
              <p className="text-xl font-semibold text-gray-700 mb-2">
                {isDragging ? 'Letakkan file di sini' : 'Tarik & letakkan dokumen di sini'}
              </p>
              <p className="text-gray-500 mb-4">atau klik untuk pilih file</p>
              <p className="text-sm text-gray-400">
                📁 Format yang didukung: <span className="font-medium">PDF, Word, PowerPoint, Excel, JPG, PNG, TXT, HTML, CSV</span>
              </p>
              {sourceFormat && (
                <p className="text-xs text-gray-500 mt-1">
                  ✅ Terdeteksi sebagai: <span className="font-medium">{sourceFormat.label}</span>
                </p>
              )}
              <p className="text-xs text-gray-400 mt-1">
                Maksimal 200MB per file
              </p>
            </label>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">File yang akan dikonversi ({files.length})</h3>
              <div className="space-y-3">
                <AnimatePresence>
                  {files.map(file => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <File className="w-6 h-6 text-primary-600" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{file.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>{formatFileSize(file.size)}</span>
                            <span>•</span>
                            <span className="font-medium text-primary-600">
                              {file.sourceFormat.label} → {file.targetFormat.label}
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          {file.status === 'processing' && (
                            <div className="mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${file.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          {/* Error Message */}
                          {file.status === 'error' && file.error && (
                            <p className="mt-1 text-sm text-red-600">{file.error}</p>
                          )}
                        </div>

                        {/* Status Icon */}
                        <div>
                          {file.status === 'waiting' && (
                            <div className="text-gray-400">
                              <span className="text-sm">Menunggu</span>
                            </div>
                          )}
                          {file.status === 'processing' && (
                            <Loader2 className="w-6 h-6 text-primary-600 animate-spin" />
                          )}
                          {file.status === 'completed' && (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          )}
                          {file.status === 'error' && (
                            <AlertCircle className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2 ml-4">
                        {file.status === 'completed' && file.downloadUrl && (
                          <a
                            href={file.downloadUrl}
                            download
                            className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        )}
                        
                        {file.status !== 'processing' && (
                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Convert Button */}
              <button
                onClick={startConversion}
                disabled={files.filter(f => f.status === 'waiting').length === 0}
                className="mt-6 w-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Mulai Konversi ({files.filter(f => f.status === 'waiting').length} file)
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-8 right-8 px-6 py-4 rounded-xl shadow-lg ${
              toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            } text-white font-medium z-50`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
