# 📄 Docverter - Document Converter All-in-One

Website konversi dokumen modern dan elegan yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS. Mendukung berbagai format dokumen dengan antarmuka yang intuitif dan user-friendly.

![Docverter Banner](https://via.placeholder.com/1200x400/0ea5e9/ffffff?text=Docverter+-+Document+Converter)

## ✨ Fitur Utama

- 🎯 **Multi-Format Support** - Mendukung PDF, Word, PowerPoint, Excel, JPG, PNG, TXT, dan banyak lagi
- 🖱️ **Drag & Drop Upload** - Upload file dengan mudah menggunakan drag & drop atau file picker
- 📊 **Progress Tracking** - Lihat progress konversi real-time untuk setiap file
- 💾 **Batch Processing** - Upload dan konversi multiple files sekaligus
- 🎨 **Modern UI/UX** - Desain yang bersih, minimalis, dan fully responsive
- ⚡ **Fast Processing** - Konversi dokumen dalam hitungan detik
- 🔒 **Secure & Private** - File Anda aman dan otomatis dihapus setelah konversi
- 🌐 **Responsive Design** - Bekerja sempurna di desktop, tablet, dan mobile

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📁 Struktur Folder

```
windsurf-project-16/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   └── convert/              # Conversion API endpoint
│   │       └── route.ts          # POST & GET handlers
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React Components
│   ├── Navbar.tsx                # Navigation bar
│   ├── HeroSection.tsx           # Hero section dengan CTA
│   ├── DocumentConverter.tsx     # Main converter component
│   ├── FeaturesSection.tsx       # Features showcase
│   ├── PricingSection.tsx        # Pricing plans
│   ├── FaqSection.tsx            # FAQ accordion
│   └── Footer.tsx                # Footer
├── types/                        # TypeScript Type Definitions
│   └── index.ts                  # Shared types & interfaces
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

## 🚀 Quick Start

### Prerequisites

Pastikan Anda telah menginstall:
- Node.js 18.x atau lebih tinggi
- npm, yarn, atau pnpm

### Installation

1. **Clone atau buka project**

```bash
cd windsurf-project-16
```

2. **Install dependencies**

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Run development server**

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. **Buka browser**

Akses `http://localhost:3000` untuk melihat aplikasi.

### Build untuk Production

```bash
npm run build
npm run start
```

## 📋 Komponen Utama

### 1. DocumentConverter (`components/DocumentConverter.tsx`)

Komponen utama yang menangani:
- Upload file (drag & drop dan file picker)
- Validasi file berdasarkan tipe konversi
- Progress tracking untuk setiap file
- Multiple file handling
- Download hasil konversi

**Props:** Tidak ada (standalone component)

**Key Features:**
- File validation (format & size)
- Real-time progress updates
- Toast notifications
- Error handling

### 2. Navbar (`components/Navbar.tsx`)

Navigation bar dengan:
- Logo dan branding
- Menu navigasi (Home, Fitur, Pricing, FAQ)
- CTA button
- Smooth scroll to sections

### 3. HeroSection (`components/HeroSection.tsx`)

Hero section dengan:
- Headline dan subheadline
- CTA buttons
- Statistics
- Visual illustration

### 4. FeaturesSection (`components/FeaturesSection.tsx`)

Showcase 4 fitur utama:
- Mendukung berbagai format
- Konversi cepat & mudah
- File aman & private
- Bekerja di semua perangkat

### 5. PricingSection (`components/PricingSection.tsx`)

Pricing plans:
- Free plan
- Pro plan (popular)
- Business plan

### 6. FaqSection (`components/FaqSection.tsx`)

FAQ accordion dengan 6 pertanyaan umum.

## 🔧 API Endpoints

### POST `/api/convert`

Endpoint untuk konversi dokumen.

**Request:**
```typescript
FormData {
  file: File,
  sourceType: string,  // e.g., "pdf", "docx"
  targetType: string   // e.g., "docx", "pdf"
}
```

**Response:**
```typescript
{
  success: boolean,
  jobId: string,
  status: "completed" | "processing" | "error",
  downloadUrl?: string,
  error?: string
}
```

### GET `/api/convert?jobId=xxx`

Check status konversi.

**Response:**
```typescript
{
  success: boolean,
  jobId: string,
  status: string,
  progress: number
}
```

## 🎨 Customization

### Warna

Edit `tailwind.config.ts` untuk mengubah color scheme:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... customize
    900: '#0c4a6e',
  },
}
```

### Format Konversi

Edit `types/index.ts` untuk menambah/mengubah format:

```typescript
export const CONVERSION_TYPES: ConversionType[] = [
  {
    id: 'your-conversion',
    label: 'Your Label',
    sourceType: 'source',
    targetType: 'target',
    acceptedFormats: ['.ext', 'mime/type'],
  },
  // ...
];
```

## 🔄 Alur Konversi

1. **User memilih jenis konversi** dari dropdown
2. **Upload file** via drag & drop atau file picker
3. File divalidasi (format dan ukuran)
4. File ditambahkan ke list dengan status "waiting"
5. **User klik "Mulai Konversi"**
6. Untuk setiap file:
   - Status berubah menjadi "processing"
   - Progress bar mulai animasi
   - Request dikirim ke `/api/convert`
   - Response diterima
   - Status berubah menjadi "completed" atau "error"
7. **User dapat download** hasil konversi

## 🚀 Next Steps - Production Ready

Untuk membuat aplikasi ini production-ready, Anda perlu:

### Backend/Conversion Engine

1. **Install conversion libraries:**

```bash
# PDF Processing
npm install pdf-lib pdf-parse

# Word Processing
npm install mammoth docx

# Image Processing
npm install sharp

# Excel Processing
npm install xlsx
```

2. **Implementasi actual conversion logic** di `app/api/convert/route.ts`

3. **Setup file storage:**
   - Local storage (filesystem)
   - Cloud storage (AWS S3, Google Cloud Storage, Cloudinary)

4. **Add file cleanup job** untuk menghapus file lama

### Security

1. **Rate limiting** untuk mencegah abuse
2. **File size limits** yang lebih strict
3. **Virus scanning** untuk uploaded files
4. **CORS configuration** jika needed

### Performance

1. **Implement caching** untuk conversion results
2. **Add queue system** untuk heavy workloads (Bull, BullMQ)
3. **Optimize images** dan assets
4. **Add CDN** untuk static assets

### Monitoring

1. **Error tracking** (Sentry)
2. **Analytics** (Google Analytics, Plausible)
3. **Performance monitoring** (Vercel Analytics)

## 📝 Environment Variables

Buat file `.env.local` untuk environment variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# File Storage (example)
STORAGE_PROVIDER=local
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket

# Optional
SENTRY_DSN=your-sentry-dsn
ANALYTICS_ID=your-analytics-id
```

## 🤝 Contributing

Contributions are welcome! Silakan buat pull request atau open issue.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Developer Notes

### Kode yang Perlu Diganti

1. **`app/api/convert/route.ts`** - Ganti simulasi dengan actual conversion logic
2. **Download URL** - Implementasi proper file serving
3. **File storage** - Setup persistent storage untuk uploaded/converted files

### Debugging

- Semua conversion logs ada di console
- Check Network tab untuk melihat API requests
- Gunakan React DevTools untuk inspect component state

### Tips Development

1. Gunakan TypeScript strict mode untuk type safety
2. Test dengan berbagai ukuran dan format file
3. Test responsive design di berbagai devices
4. Implement error boundaries untuk production

## 📞 Support

Untuk pertanyaan atau masalah, silakan:
- Open an issue di repository
- Contact developer

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**

🚀 Happy coding!
