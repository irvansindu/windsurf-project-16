/**
 * Types dan Interfaces untuk Document Converter
 */

// Format file yang didukung
export type FileFormat = {
  id: string;
  label: string;
  extensions: string[];
  mimeTypes: string[];
};

// Status proses konversi
export type ConversionStatus = 'waiting' | 'processing' | 'completed' | 'error';

// Interface untuk file yang diupload
export interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  sourceFormat: FileFormat;
  targetFormat: FileFormat;
  status: ConversionStatus;
  progress: number;
  downloadUrl?: string;
  error?: string;
}

// Interface untuk job konversi
export interface ConversionJob {
  id: string;
  fileName: string;
  sourceType: string;
  targetType: string;
  status: ConversionStatus;
  progress: number;
  downloadUrl?: string;
  error?: string;
  createdAt: Date;
}

// Response dari API konversi
export interface ConversionResponse {
  success: boolean;
  jobId: string;
  status: ConversionStatus;
  downloadUrl?: string;
  error?: string;
}

// Daftar format file yang tersedia
export const FILE_FORMATS: FileFormat[] = [
  {
    id: 'pdf',
    label: 'PDF',
    extensions: ['.pdf'],
    mimeTypes: ['application/pdf'],
  },
  {
    id: 'docx',
    label: 'Word (DOCX)',
    extensions: ['.doc', '.docx'],
    mimeTypes: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  },
  {
    id: 'pptx',
    label: 'PowerPoint (PPTX)',
    extensions: ['.ppt', '.pptx'],
    mimeTypes: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
  },
  {
    id: 'xlsx',
    label: 'Excel (XLSX)',
    extensions: ['.xls', '.xlsx'],
    mimeTypes: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  },
  {
    id: 'jpg',
    label: 'JPG / JPEG',
    extensions: ['.jpg', '.jpeg'],
    mimeTypes: ['image/jpeg'],
  },
  {
    id: 'png',
    label: 'PNG',
    extensions: ['.png'],
    mimeTypes: ['image/png'],
  },
  {
    id: 'txt',
    label: 'Text (TXT)',
    extensions: ['.txt'],
    mimeTypes: ['text/plain'],
  },
  {
    id: 'html',
    label: 'HTML',
    extensions: ['.html', '.htm'],
    mimeTypes: ['text/html'],
  },
  {
    id: 'csv',
    label: 'CSV',
    extensions: ['.csv'],
    mimeTypes: ['text/csv'],
  },
];
