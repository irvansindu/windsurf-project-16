export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <header>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Tentang Docverter</h1>
          <p className="text-gray-600 text-lg">
            Docverter adalah layanan konversi dokumen all‑in‑one yang dirancang agar siapa pun
            bisa mengubah format file dalam hitungan detik, tanpa instal aplikasi tambahan.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Misi Kami</h2>
          <p className="text-gray-600">
            Kami percaya proses sederhana sering kali terasa paling menyenangkan. Docverter
            dibuat untuk menghilangkan kerepotan saat harus mengirim file dalam format tertentu:
            PDF ke Word, PPT ke PDF, gambar ke dokumen, dan banyak lagi.
          </p>
          <p className="text-gray-600">
            Fokus utama kami adalah pengalaman yang cepat, bersih, dan mudah dipahami, sehingga
            cocok dipakai pelajar, freelancer, profesional kantor, hingga tim kecil dan bisnis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Nilai Utama</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <span className="font-medium text-gray-800">Simplicity.</span> Antarmuka yang fokus ke hal penting:
              upload, pilih format tujuan, dan download hasilnya.
            </li>
            <li>
              <span className="font-medium text-gray-800">Kecepatan.</span> Konversi dilakukan seefisien mungkin agar
              Anda tidak perlu menunggu lama.
            </li>
            <li>
              <span className="font-medium text-gray-800">Privasi.</span> File hanya digunakan untuk proses konversi,
              tidak dipublikasikan, dan tidak dibagikan ke pihak lain.
            </li>
            <li>
              <span className="font-medium text-gray-800">Aksesibel.</span> Bisa diakses dari browser di perangkat apa pun
              tanpa perlu instal software tambahan.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Ke Depan</h2>
          <p className="text-gray-600">
            Kami terus menyiapkan peningkatan seperti integrasi cloud storage, fitur kolaborasi
            tim, hingga automation melalui API. Jika Anda punya ide atau kebutuhan khusus,
            silakan kirimkan masukan melalui halaman Contact – feedback Anda membantu kami
            membangun Docverter yang lebih baik.
          </p>
        </section>
      </div>
    </main>
  );
}
