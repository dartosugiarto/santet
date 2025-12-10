const contentData = {
    "start": {
        category: "01. OBSERVASI",
        title: "Fenomena Kesurupan",
        text: "Seseorang tiba-tiba berperilaku aneh, suara berubah, tenaga menjadi kuat. Secara medis, ini adalah <strong>Disosiasi Kesadaran</strong>.",
        analogy: "Smartphone 'Freeze'. Layar error bukan berarti hardware rusak, tapi software crash.",
        caseStudy: "Umum terjadi saat upacara bendera (tekanan sosial tinggi)."
    },
    "decision": {
        category: "02. ANALISIS",
        title: "Pilih Pendekatan",
        text: "Titik percabangan logika: Apakah validasi menggunakan Data (Sains) atau Mitos (Budaya)?",
        analogy: "Mobil Mogok: Ke Bengkel Resmi (Scan ECU) vs Panggil Dukun Tiup Mesin.",
        caseStudy: "PPDGJ (Medis) vs Primbon."
    },
    "mistik": {
        category: "JALUR MITOS",
        title: "Atribusi Mistik",
        text: "Jalan pintas kognitif. Otak mengisi ketidaktahuan dengan cerita hantu agar merasa 'paham' situasi.",
        analogy: "Petir dianggap kemarahan Dewa sebelum listrik ditemukan.",
        caseStudy: "Epilepsi zaman dulu dianggap kerasukan setan."
    },
    "dukun": {
        category: "OUTPUT",
        title: "Dukun & Sugesti",
        text: "Pengobatan sugestif. Kadang sembuh karena efek Placebo, bukan karena perbaikan medis.",
        analogy: "Memukul TV rusak agar nyala (untung-untungan).",
        caseStudy: "Fenomena Begu Ganjang."
    },
    "sains": {
        category: "DATA MEDIS",
        title: "Dissociative Trance Disorder",
        text: "Diagnosis resmi (ICD-10 F44.3). Kesadaran utama non-aktif, sistem emosi mengambil alih.",
        analogy: "Mode Airplane di HP. Mesin hidup, sinyal mati.",
        caseStudy: "Pasien histeria tidak merespon nama sendiri."
    },
    "kimia": {
        category: "NEUROKIMIA",
        title: "Banjir Kimia Otak",
        text: "Otak memproduksi Endorfin & Dopamin berlebih. Menyebabkan euforia dan kebal sakit.",
        analogy: "Narkoba Alami Tubuh (Runner's High).",
        caseStudy: "Atraksi kekebalan tubuh (debus/kuda lumping)."
    },
    "memori": {
        category: "DATABASE",
        title: "Memori Budaya",
        text: "Isi kesurupan selalu sesuai budaya setempat. Hantu lokal, bukan impor.",
        analogy: "MP3 Player hanya memutar lagu yang sudah didownload.",
        caseStudy: "Orang Eropa kesurupan Vampir, Indonesia Pocong."
    },
    "solusi": {
        category: "SOLUSI",
        title: "Putus Siklusnya",
        text: "Jangan diberi panggung/atensi. Isolasi di ruang tenang.",
        analogy: "Algoritma TikTok: Tanpa Like/View, orang malas posting.",
        caseStudy: "Protokol penanganan histeria massal."
    }
};

const drawer = document.getElementById('rightDrawer');
const overlay = document.getElementById('drawerOverlay');

function openDrawer(key, event) {
    if(event) event.preventDefault();
    
    const data = contentData[key];
    if(!data) return;

    // 1. Isi Data
    document.getElementById('panelCategory').textContent = data.category;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelText').innerHTML = data.text;
    document.getElementById('panelAnalogy').textContent = data.analogy;
    document.getElementById('panelCase').textContent = data.caseStudy;

    // 2. Buka Drawer & Overlay
    drawer.classList.add('open');
    overlay.classList.add('active');
}

function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
}

// Tutup dengan tombol ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeDrawer();
    }
});
