# Kalkulator BMI

**Kalkulator BMI** adalah sebuah aplikasi web yang digunakan untuk menghitung Indeks Massa Tubuh (BMI) berdasarkan berat badan dan tinggi badan pengguna. Aplikasi ini juga memberikan rekomendasi kesehatan berdasarkan hasil perhitungan BMI.

## Fitur

- **Input BMI**: Pengguna dapat memasukkan berat badan (dalam kg), tinggi badan (dalam cm), jenis kelamin, dan usia.
- **Hasil Perhitungan BMI**: Menampilkan hasil BMI dengan status berat badan (Kekurangan Berat Badan, Normal, Kelebihan Berat Badan, atau Kegemukan/Obesitas) beserta rekomendasi kesehatan.
- **Reset Form**: Mengembalikan formulir ke kondisi awal.
- **Download Hasil**: Pengguna dapat mengunduh hasil perhitungan BMI dalam format PDF.
- **Desain Responsif**: Tampilan yang responsif dan menarik pada berbagai perangkat (desktop, tablet, dan ponsel).

## Cara Menggunakan

1. Buka halaman web Kalkulator BMI.
2. Masukkan berat badan (kg), tinggi badan (cm), jenis kelamin, dan usia pada formulir di sebelah kiri.
3. Klik tombol **Hitung BMI** untuk melihat hasil perhitungan di sebelah kanan.
4. Klik tombol **Reset** untuk mengosongkan formulir dan mengembalikan hasil perhitungan ke kondisi awal.
5. Untuk mengunduh hasil perhitungan, klik tombol **Download PDF**.

## Struktur Proyek

- `asset/`: Berisi aset-aset yang digunakan
- `index.html`: Halaman utama yang menampilkan form input BMI dan hasil perhitungan.
- `css/`
  - `style.css`: File CSS yang mengatur tampilan dan layout dari aplikasi web.
- `js/`
  - `script.js`: File JavaScript yang menangani logika perhitungan BMI, validasi form, dan fitur interaktif lainnya.
  
## Rumus Perhitungan BMI

BMI dihitung dengan rumus:

\[
\text{BMI} = \frac{\text{Berat Badan (kg)}}{\text{Tinggi Badan (m)}^2}
\]

### Kategori BMI

- **Kekurangan Berat Badan**: BMI < 18.5
- **Normal (Ideal)**: 18.5 ≤ BMI ≤ 24.9
- **Kelebihan Berat Badan**: 25 ≤ BMI ≤ 29.9
- **Kegemukan (Obesitas)**: BMI ≥ 30

## Teknologi yang Digunakan

- **HTML5**: Untuk struktur dan konten halaman web.
- **CSS3**: Untuk desain dan tata letak.
- **JavaScript**: Untuk interaktivitas dan logika perhitungan BMI.
- **jsPDF**: Untuk mengunduh hasil perhitungan dalam format PDF.
