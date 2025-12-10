// Database Konten
const contentData = {
    "start": {
        category: "01. OBSERVASI",
        title: "Fenomena Kesurupan",
        text: "Seseorang tiba-tiba berperilaku aneh, suara berubah, tenaga menjadi kuat, dan mengaku sebagai entitas lain (harimau, leluhur, dll).",
        analogy: "Smartphone 'Freeze'. Layar error bukan berarti hardware rusak, bisa jadi software crash.",
        caseStudy: "Upacara bendera, kemah, tekanan sosial tinggi."
    },
    "decision": {
        category: "02. DECISION POINT",
        title: "Pilih Kacamata Analisis",
        text: "Di titik ini kita harus memilih framework berpikir: Apakah menggunakan data objektif (Sains) atau cerita budaya (Mistik)?",
        analogy: "Mobil mogok: Bawa ke bengkel (Sains) atau panggil dukun tiup mesin (Mistik)?",
        caseStudy: "Perbedaan diagnosis PPDGJ vs Primbon."
    },
    "mistik": {
        category: "JALUR MITOS",
        title: "Atribusi Mistik",
        text: "Otak mencari jalan pintas (Heuristik). Jika tidak ada penjelasan logis yang dipahami, otak mengisi celah dengan cerita hantu.",
        analogy: "Orang purba mengira petir adalah kemarahan Dewa Thor.",
        caseStudy: "Epilepsi zaman dulu dianggap kerasukan."
    },
    "dukun": {
        category: "OUTPUT",
        title: "Dukun & Sugesti",
        text: "Pengobatan berbasis mantra. Kadang sembuh karena efek Placebo (keyakinan) atau penyakit memang sembuh sendiri (Self-limiting disease).",
        analogy: "Memukul TV rusak agar nyala kembali. Kadang berhasil karena hoki, bukan perbaikan teknis.",
        caseStudy: "Fenomena Begu Ganjang."
    },
    "sains": {
        category: "JALUR LOGIKA",
        title: "Jalur Medis (DTD)",
        text: "Secara medis dikenal sebagai <strong>Dissociative Trance Disorder (F44.3)</strong>. Gangguan di mana kesadaran utama 'tertidur'.",
        analogy: "Mode Airplane di HP. Mesin hidup tapi sinyal mati.",
        caseStudy: "Pasien ICD-10 F44.3."
    },
    "kimia": {
        category: "NEUROBIOLOGI",
        title: "Banjir Kimia Otak",
        text: "Otak memproduksi <strong>Endorfin & Dopamin</strong> berlebih. Sensasi 'Nge-fly', kuat, dan tidak sakit.",
        analogy: "Narkoba alami tubuh. Mirip sensasi pelari maraton (Runner's High).",
        caseStudy: "Kekebalan tubuh saat trans (misal: Kuda Lumping)."
    },
    "memori": {
        category: "DATABASE",
        title: "Memori Budaya",
        text: "Hantu yang muncul selalu sesuai budaya setempat. Tidak mungkin orang Jawa kesurupan Drakula.",
        analogy: "MP3 Player hanya bisa memutar lagu yang sudah di-download.",
        caseStudy: "Kasus kesurupan massal pabrik di Jawa vs Eropa."
    },
    "solusi": {
        category: "GOAL / SOLUSI",
        title: "Putus Siklusnya",
        text: "Jangan diberi panggung. Pisahkan dari kerumunan, diamkan di ruang tenang. Otak akan reset sendiri saat bosan.",
        analogy: "Algoritma TikTok: Kalau konten tidak dilike, kreator berhenti posting.",
        caseStudy: "Protokol penanganan histeria massal."
    }
};

const drawer = document.getElementById('sideDrawer');

function selectNode(key, event) {
    if(event) event.preventDefault();
    const data = contentData[key];
    if(!data) return;

    // 1. Update Konten Drawer
    document.getElementById('panelCategory').textContent = data.category;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelText').innerHTML = data.text;
    document.getElementById('panelAnalogy').textContent = data.analogy;
    document.getElementById('panelCase').textContent = data.caseStudy;

    // 2. Active State pada Node
    document.querySelectorAll('.node-card').forEach(el => el.classList.remove('active'));
    if(event.currentTarget) event.currentTarget.classList.add('active');

    // 3. Buka Drawer
    drawer.classList.add('open');
}

function closeDrawer() {
    drawer.classList.remove('open');
    document.querySelectorAll('.node-card').forEach(el => el.classList.remove('active'));
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    // Tidak auto-open, biar bersih seperti roadmap.sh
});
