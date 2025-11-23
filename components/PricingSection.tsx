'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Cocok untuk kebutuhan harian & personal',
    features: [
      'Unlimited konversi setiap hari',
      'Maksimal 200MB per file',
      'Semua format populer (PDF, Word, PPT, Excel, JPG, PNG, TXT, dll.)',
      'Convert banyak file sekaligus (multi-upload)',
      'Tanpa watermark pada hasil file',
    ],
    cta: 'Mulai Gratis',
    popular: false,
  },
  {
    name: 'Pro',
    price: '19',
    description: 'Untuk kreator, freelancer, dan power user',
    features: [
      'Semua fitur Free',
      'Kecepatan konversi prioritas',
      'Antrian server lebih cepat & stabil',
      'Riwayat & manajemen hasil konversi',
      'Integrasi cloud (Google Drive, Dropbox)*',
      'Support email prioritas',
    ],
    cta: 'Upgrade ke Pro',
    popular: true,
  },
  {
    name: 'Business',
    price: '49',
    description: 'Untuk tim, perusahaan, dan produk digital',
    features: [
      'Semua fitur Pro',
      'Akses API & automasi workflow*',
      'Team & role management',
      'Quota & limit yang bisa dikustom',
      'Dedicated account manager',
      'SLA & support khusus bisnis',
    ],
    cta: 'Hubungi Sales',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Pilih Paket yang Tepat</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mulai gratis atau upgrade untuk mendapatkan lebih banyak fitur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-600 to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end justify-center">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`ml-2 mb-2 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                    /bulan
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary-200' : 'text-green-600'}`} />
                    <span className={plan.popular ? 'text-primary-50' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-primary-600 hover:shadow-lg'
                    : 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
