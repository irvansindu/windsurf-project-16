# 🚀 Setup Guide - Docverter

Panduan lengkap untuk setup dan menjalankan aplikasi Docverter.

## 📋 Prerequisites

Sebelum memulai, pastikan sistem Anda memiliki:

- **Node.js**: versi 18.x atau lebih tinggi
  - Check: `node --version`
  - Download: https://nodejs.org/

- **Package Manager**: npm, yarn, atau pnpm
  - npm sudah terinstall dengan Node.js
  - yarn: `npm install -g yarn`
  - pnpm: `npm install -g pnpm`

- **Git** (optional, untuk clone repository)
  - Check: `git --version`
  - Download: https://git-scm.com/

## 🛠️ Installation Steps

### Step 1: Persiapan Project

Jika belum ada di local:
```bash
# Navigate ke folder project
cd windsurf-project-16
```

### Step 2: Install Dependencies

Pilih salah satu package manager:

**Menggunakan npm:**
```bash
npm install
```

**Menggunakan yarn:**
```bash
yarn install
```

**Menggunakan pnpm:**
```bash
pnpm install
```

Proses ini akan menginstall semua dependencies yang diperlukan:
- next
- react & react-dom
- typescript
- tailwindcss
- framer-motion
- lucide-react
- dan lainnya

⏱️ Estimasi waktu: 2-5 menit (tergantung koneksi internet)

### Step 3: Setup Environment Variables (Optional)

Untuk development, environment variables tidak wajib. Tetapi jika ingin custom configuration:

```bash
# Copy file example
cp .env.example .env.local

# Edit file .env.local sesuai kebutuhan
```

### Step 4: Run Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Server akan running di `http://localhost:3000`

Anda akan melihat output seperti ini:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

### Step 5: Buka di Browser

1. Buka browser favorit Anda
2. Akses `http://localhost:3000`
3. Website Docverter siap digunakan! 🎉

## 🎨 Development Workflow

### Hot Reload

Next.js mendukung hot reload. Setiap perubahan pada file akan otomatis ter-refresh di browser tanpa perlu restart server.

### Editing Components

1. Buka file component di `components/` folder
2. Edit code
3. Save file
4. Browser akan otomatis reload dengan changes

### Testing Upload & Conversion

1. Scroll ke section "Konversi Dokumen Anda"
2. Pilih jenis konversi dari dropdown
3. Upload file (drag & drop atau click)
4. Klik "Mulai Konversi"
5. Tunggu proses selesai
6. Download hasil (dummy file untuk demo)

## 🔧 Troubleshooting

### Port 3000 sudah digunakan?

Jika port 3000 sudah digunakan aplikasi lain:

```bash
# Gunakan port lain
npm run dev -- -p 3001
```

Atau matikan aplikasi yang menggunakan port 3000.

### Module not found error?

Coba hapus folder node_modules dan install ulang:

```bash
# Hapus node_modules dan lock files
rm -rf node_modules package-lock.json
# atau di Windows: rmdir /s node_modules && del package-lock.json

# Install ulang
npm install
```

### TypeScript errors?

Rebuild TypeScript:

```bash
npm run build
```

### Styling tidak muncul?

Pastikan Tailwind CSS ter-compile dengan baik. Restart dev server:

```bash
# Stop server (Ctrl + C)
# Start lagi
npm run dev
```

## 📦 Build untuk Production

### Step 1: Build

```bash
npm run build
```

Ini akan membuat optimized production build di folder `.next/`

### Step 2: Test Production Build

```bash
npm run start
```

Website akan berjalan di production mode di `http://localhost:3000`

### Step 3: Deploy

Anda bisa deploy ke berbagai platform:

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

#### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build dan run:

```bash
docker build -t docverter .
docker run -p 3000:3000 docverter
```

## 🧪 Testing Checklist

Sebelum deploy, test fitur-fitur berikut:

- [ ] Navbar navigation bekerja (smooth scroll)
- [ ] Hero section CTA buttons
- [ ] Dropdown konversi menampilkan semua opsi
- [ ] File upload via click
- [ ] File upload via drag & drop
- [ ] Validasi file format bekerja
- [ ] Validasi ukuran file bekerja
- [ ] Multiple file upload
- [ ] Progress bar saat konversi
- [ ] Status berubah: waiting → processing → completed
- [ ] Toast notifications muncul
- [ ] Remove file dari list
- [ ] Features section animasi smooth
- [ ] Pricing cards layout responsive
- [ ] FAQ accordion expand/collapse
- [ ] Footer links
- [ ] Mobile responsive
- [ ] Tablet responsive

## 📚 Dokumentasi Tambahan

- **Main README**: `README.md` - Overview dan dokumentasi lengkap
- **Types Documentation**: `types/index.ts` - TypeScript types dan interfaces
- **API Documentation**: Lihat comments di `app/api/convert/route.ts`

## 🆘 Butuh Bantuan?

Jika mengalami masalah:

1. Check terminal untuk error messages
2. Check browser console (F12) untuk errors
3. Lihat dokumentasi Next.js: https://nextjs.org/docs
4. Lihat dokumentasi Tailwind: https://tailwindcss.com/docs

## ✅ Verification

Project berhasil di-setup jika:

- ✅ Dependencies terinstall tanpa error
- ✅ Dev server running di `http://localhost:3000`
- ✅ Website bisa diakses di browser
- ✅ Tidak ada error di terminal
- ✅ Tidak ada error di browser console
- ✅ Hot reload bekerja ketika edit file
- ✅ Styling Tailwind ter-apply dengan baik
- ✅ Animasi Framer Motion smooth
- ✅ Icons dari Lucide React muncul

Selamat! Anda siap untuk development! 🚀
