'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, FileStack } from 'lucide-react';

const features = [
  {
    icon: FileStack,
    title: 'Mendukung Berbagai Format',
    description: 'Konversi PDF, Word, Excel, PowerPoint, gambar, dan banyak format dokumen lainnya dengan mudah.',
  },
  {
    icon: Zap,
    title: 'Konversi Cepat & Mudah',
    description: 'Proses konversi yang sangat cepat dengan antarmuka yang intuitif. Hanya beberapa klik dan file Anda siap!',
  },
  {
    icon: Shield,
    title: 'File Aman & Private',
    description: 'File Anda dienkripsi dan otomatis dihapus setelah konversi. Privasi dan keamanan adalah prioritas kami.',
  },
  {
    icon: Smartphone,
    title: 'Bekerja di Semua Perangkat',
    description: 'Akses dari desktop, tablet, atau smartphone. Website kami sepenuhnya responsive dan kompatibel.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Kenapa Memilih Docverter?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Platform konversi dokumen yang dirancang untuk memberikan pengalaman terbaik dengan fitur-fitur unggulan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
