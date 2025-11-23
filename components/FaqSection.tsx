'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah file saya disimpan di server?',
    answer: 'Tidak, file Anda tidak disimpan secara permanen di server kami. Setelah proses konversi selesai, file akan otomatis dihapus dari server dalam waktu 24 jam untuk menjaga privasi Anda.',
  },
  {
    question: 'Format apa saja yang didukung?',
    answer: 'Kami mendukung berbagai format populer termasuk PDF, Word (DOC/DOCX), PowerPoint (PPT/PPTX), Excel (XLS/XLSX), gambar (JPG, PNG), dan text (TXT). Daftar lengkap format bisa dilihat di dropdown konversi.',
  },
  {
    question: 'Berapa ukuran maksimal dokumen?',
    answer: 'Saat ini, ukuran maksimal file yang dapat diupload adalah 200MB per file. Untuk file yang lebih besar, Anda bisa mempertimbangkan untuk memecah dokumen terlebih dahulu.',
  },
  {
    question: 'Apakah layanan ini gratis?',
    answer: 'Ya, Docverter saat ini gratis untuk digunakan dengan batasan jumlah konversi per hari. Kami juga menyediakan paket premium untuk kebutuhan bisnis dengan fitur tambahan.',
  },
  {
    question: 'Berapa lama proses konversi?',
    answer: 'Waktu konversi tergantung pada ukuran file dan jenis konversi. Rata-rata, proses konversi memakan waktu 5-30 detik. File yang lebih besar mungkin memerlukan waktu lebih lama.',
  },
  {
    question: 'Apakah saya perlu membuat akun?',
    answer: 'Tidak, Anda tidak perlu membuat akun untuk menggunakan layanan konversi dasar kami. Namun, dengan membuat akun, Anda bisa mendapatkan akses ke fitur tambahan seperti riwayat konversi dan penyimpanan cloud.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-gray-600 text-lg">
            Punya pertanyaan? Kami punya jawabannya!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
