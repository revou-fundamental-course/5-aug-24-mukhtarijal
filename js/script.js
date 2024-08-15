// Fungsi untuk menghitung BMI
function hitungBMI() {
    // Ambil nilai dari form
    const beratBadan = parseFloat(document.getElementById('weight').value);
    const tinggiBadan = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const gender = document.getElementById('gender').value;

    // Validasi input form
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan <= 0 || beratBadan <= 0) {
        alert('Harap masukkan nilai berat badan dan tinggi badan yang valid!');
        return;
    }

    // Rumus BMI
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Tentukan status BMI
    let status = '';
    if (bmi < 18.5) {
        status = 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (Ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan Berat Badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    // Tampilkan hasil BMI
    const hasilBMI = `Jenis Kelamin: ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}
    \nBMI Anda: ${bmi.toFixed(2)}
    \nStatus: ${status}`;

    document.getElementById('bmiResult').textContent = hasilBMI;
}

// Fungsi untuk mengosongkan hasil BMI saat tombol "Reset" ditekan
function resetForm() {
    document.getElementById('bmiResult').textContent = 'Hasil perhitungan BMI Anda akan tampil di sini';
}


// Fungsi untuk mendownload hasil BMI sebagai PDF
function downloadPDF() {
    const hasilBMI = document.getElementById('bmiResult').textContent;

    if (hasilBMI === '' || hasilBMI.includes('tampil di sini')) {
        alert('Tidak ada hasil BMI yang dapat diunduh!');
        return;
    }

    // Membuat dokumen PDF menggunakan jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Hasil Kalkulator BMI', 10, 10);
    doc.setFontSize(12);
    doc.text(hasilBMI, 10, 20);

    // Menyimpan file PDF
    doc.save('Hasil_BMI.pdf');
}

// Event listener untuk tombol "Hitung BMI"
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    hitungBMI(); 
});

// Event listener untuk tombol "Reset"
document.getElementById('bmiForm').addEventListener('reset', function() {
    resetForm(); 
});

// Event listener untuk tombol "Download PDF"
document.getElementById('downloadButton').addEventListener('click', downloadPDF);
