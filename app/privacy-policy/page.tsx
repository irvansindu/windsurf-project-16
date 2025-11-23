export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <header>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600">
            Privasi Anda penting bagi kami. Halaman ini menjelaskan secara ringkas bagaimana
            Docverter menangani data dan file yang Anda unggah.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Data yang Kami Proses</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>File yang Anda upload untuk dikonversi.</li>
            <li>Informasi teknis dasar seperti tipe browser, sistem operasi, dan waktu akses.</li>
            <li>Log error anonim untuk membantu kami memperbaiki layanan.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Penggunaan File</h2>
          <p className="text-gray-600">
            File yang Anda unggah hanya digunakan untuk tujuan konversi sesuai perintah Anda.
            Kami tidak menggunakan isi dokumen untuk pelatihan model, pemasaran, atau dijual
            ke pihak ketiga.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Penyimpanan & Penghapusan</h2>
          <p className="text-gray-600">
            File dapat disimpan sementara di server selama proses konversi berlangsung.
            Setelah proses selesai dan hasil diunduh atau setelah jangka waktu tertentu,
            file akan dihapus secara berkala dari sistem kami.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Cookie & Analytics</h2>
          <p className="text-gray-600">
            Kami dapat menggunakan cookie fungsional dan alat analytics untuk memahami cara
            pengguna berinteraksi dengan situs, sehingga kami bisa meningkatkan kualitas
            layanan. Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Tanggung Jawab Pengguna</h2>
          <p className="text-gray-600">
            Anda bertanggung jawab penuh atas isi dokumen yang diunggah ke Docverter. Jangan
            mengupload materi yang melanggar hukum, hak cipta, atau mengandung informasi
            sensitif yang tidak seharusnya dibagikan.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Perubahan Kebijakan</h2>
          <p className="text-gray-600">
            Kebijakan privasi ini dapat diperbarui sewaktu‑waktu. Perubahan material akan
            diumumkan melalui situs ini. Dengan terus menggunakan Docverter, Anda menyetujui
            versi terbaru dari kebijakan ini.
          </p>
        </section>
      </div>
    </main>
  );
}
