# E-commerce Store (Minimalist Design)

## Deskripsi

E-commerce Store adalah aplikasi e-commerce dengan tampilan minimalis yang dibangun menggunakan React untuk pengelolaan frontend. Aplikasi ini memungkinkan pengguna untuk melihat produk, menambahkan produk ke keranjang, melakukan pembelian, serta melakukan autentikasi pengguna menggunakan Firebase dan Stripe API untuk proses pembayaran.

## Fitur Utama

- **Halaman Produk**: Menampilkan daftar produk dengan detail produk termasuk harga dan deskripsi.
- **Kategori Produk**: Filter produk berdasarkan kategori.
- **Keranjang Belanja**: Pengguna dapat menambah dan menghapus produk dari keranjang.
- **Checkout**: Proses pembayaran menggunakan Stripe API.
- **Autentikasi Pengguna**: Firebase digunakan untuk login, register, dan otentikasi pengguna.
- **Responsive Design**: Tampilan yang mendukung berbagai perangkat (desktop, tablet, mobile).

## Teknologi yang Digunakan

- **React**: Digunakan untuk frontend aplikasi.
- **Firebase**: Untuk autentikasi pengguna dan penyimpanan data produk.
- **Stripe API**: Untuk memproses pembayaran.
- **Tailwind Css**: Untuk desain antarmuka yang minimalis dan responsif.

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek di lokal:

1. Clone repositori ini:
   ```bash
   git clone [https://github.com/username/ecommerce-minimalist.git](https://github.com/yondraseptian/ShoeHaven.git)](https://github.com/yondraseptian/ShoeHaven.git)

2. Navigasi ke direktori proyek
   ```
   cd ShoeHaven
3. Install dependencies menggunakan npm:
   ```
   npm install

4. Buat file .env di root folder dan tambahkan konfigurasi Firebase dan Stripe:
   ```
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key

5. Jalankan aplikasi:
   ```
   npm run dev
6. Akses aplikasi di browser dengan URL:
   ```
   http://localhost:3000


