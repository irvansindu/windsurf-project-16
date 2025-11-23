export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <section>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Hubungi Kami</h1>
          <p className="text-gray-600 mb-4">
            Punya masukan, pertanyaan, atau ide fitur baru untuk Docverter? Kami akan senang
            mendengarnya. Kirim pesan melalui form di samping atau gunakan kontak di bawah ini.
          </p>
          <div className="space-y-2 text-gray-600">
            <p>
              Email: <span className="font-medium">support@docverter.app</span>
            </p>
            <p>
              Instagram: <span className="font-medium">@docverter</span>
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Kirim Pesan</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Nama lengkap Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                placeholder="Ceritakan kebutuhan atau pertanyaan Anda di sini"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Kirim Pesan
            </button>
            <p className="text-xs text-gray-400 mt-1">
              Tombol ini belum terhubung ke backend. Integrasikan dengan layanan email / API kontak
              sesuai kebutuhan Anda.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
