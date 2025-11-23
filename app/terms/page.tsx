export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <header>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600">
            Dengan menggunakan Docverter, Anda setuju dengan syarat dan ketentuan berikut.
            Harap baca dengan seksama sebelum memakai layanan kami.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Penggunaan yang Wajar</h2>
          <p className="text-gray-600">
            Anda dapat menggunakan Docverter untuk keperluan personal maupun pekerjaan sehari‑hari,
            selama tidak melanggar hukum dan tidak mengganggu pengalaman pengguna lain.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Larangan Penggunaan</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Mengupload konten ilegal, melanggar hak cipta, atau mengandung kebencian.</li>
            <li>Menggunakan layanan untuk menyebarkan spam, malware, atau aktivitas berbahaya lain.</li>
            <li>Mencoba meretas, membongkar, atau menyalahgunakan infrastruktur Docverter.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Tanpa Jaminan</h2>
          <p className="text-gray-600">
            Layanan disediakan apa adanya (<em>as is</em>) tanpa jaminan eksplisit maupun implisit.
            Kami berupaya menjaga stabilitas dan keamanan, namun tidak dapat menjamin bahwa layanan
            akan selalu bebas error atau downtime.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Batas Tanggung Jawab</h2>
          <p className="text-gray-600">
            Kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan data, atau
            kerusakan lain yang timbul dari penggunaan Docverter. Selalu simpan salinan cadangan
            dokumen penting Anda.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Perubahan Layanan</h2>
          <p className="text-gray-600">
            Fitur dan kebijakan Docverter dapat berubah sewaktu‑waktu. Kami dapat menambah, mengubah,
            atau menghapus fitur tertentu untuk meningkatkan kualitas layanan. Penggunaan berkelanjutan
            setelah perubahan berarti Anda menyetujui pembaruan tersebut.
          </p>
        </section>
      </div>
    </main>
  );
}
