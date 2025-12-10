// Database Konten
const contentData = {
    "start": {
        icon: "🎬",
        category: "LANGKAH 1: OBSERVASI",
        title: "Fenomena Kesurupan",
        text: "Seseorang tiba-tiba berperilaku aneh, suara berubah, tenaga menjadi kuat, dan mengaku sebagai entitas lain (harimau, leluhur, dll). Ini adalah titik awal pengamatan.",
        analogy: "Seperti HP yang tiba-tiba 'Freeze' atau membuka aplikasi sendiri. Kita melihat layarnya aneh, tapi belum tahu sebabnya (Hardware rusak atau Software crash?).",
        caseStudy: "Sering terjadi saat upacara bendera, kemah, atau situasi di bawah tekanan sosial yang tinggi."
    },
    "decision": {
        icon: "⚖️",
        category: "LANGKAH 2: ALAT VERIFIKASI",
        title: "Pilih Kacamata Analisis",
        text: "Kita dihadapkan pada dua pilihan cara pandang. Apakah kita menggunakan instrumen ilmiah (EEG, Psikologi) atau hanya mengandalkan cerita turun-temurun (Testimoni)?",
        analogy: "Mobil mogok: Apakah dibawa ke bengkel resmi untuk scan komputer (Sains), atau panggil orang pintar untuk meniup kap mesin (Mistik)?",
        caseStudy: "Dr. Ryu menegaskan: Dokter bekerja berdasarkan pedoman medis (PPDGJ), bukan primbon."
    },
    "mistik": {
        icon: "👻",
        category: "JALUR A (FALSE)",
        title: "Atribusi Mistik",
        text: "Jika alat ilmiah TIDAK digunakan, otak manusia secara default akan mencari penjelasan termudah: 'Ini pasti kerjaan roh halus'. Ini adalah jalan pintas kognitif.",
        analogy: "Zaman purba: Petir menyambar karena Dewa Thor marah. (Padahal itu listrik statis). Ketidaktahuan melahirkan mitos.",
        caseStudy: "Dulu epilepsi dianggap kerasukan setan. Sekarang kita tahu itu badai listrik di otak."
    },
    "dukun": {
        icon: "🔮",
        category: "OUTPUT JALUR A",
        title: "Solusi: Dukun & Sugesti",
        text: "Pengobatan berupa mantra atau rukyah. Kadang berhasil sembuh, tapi itu seringkali adalah efek Sugesti/Placebo atau siklus alami penyakit yang memang sudah waktunya berhenti.",
        analogy: "Memukul TV rusak sampai nyala lagi. Kadang berhasil karena konektor terguncang, tapi tidak memperbaiki sirkuit yang rusak.",
        caseStudy: "Kasus 'Begu Ganjang' atau 'Koro'. Penanganan mistik seringkali hanya menenangkan sementara."
    },
    "sains": {
        icon: "🏥",
        category: "JALUR B (TRUE)",
        title: "Diagnosis Medis: DTD",
        text: "Secara medis, ini adalah <strong>Dissociative Trance Disorder (DTD)</strong>. Bukan roh yang masuk, tapi kesadaran utama yang 'bergeser' atau tertidur sementara.",
        analogy: "Mode 'Airplane' di HP. HP-nya menyala, mesin jalan, tapi fungsi komunikasi utamanya mati sementara.",
        caseStudy: "Tercatat dalam klasifikasi penyakit internasional (ICD-10) dan PPDGJ."
    },
    "kimia": {
        icon: "🧪",
        category: "MEKANISME BIOLOGIS",
        title: "Banjir Kimia Otak",
        text: "Saat kesurupan, otak memproduksi <strong>Dopamin</strong> (Nikmat) dan <strong>Oksitosin</strong> (Nyaman) berlebihan. Pelaku merasa 'Nge-fly' dan rileks.",
        analogy: "Narkoba Alami. Tubuh memproduksi zat mirip morfin. Makanya orang kesurupan merasa enteng dan kadang ketagihan.",
        caseStudy: "Sensasi ini mirip dengan 'Runner's High' setelah lari maraton atau orgasme."
    },
    "memori": {
        icon: "💾",
        category: "SUMBER DATA",
        title: "Database Memori",
        text: "Otak hanya bisa memutar 'skrip' yang pernah direkam. Hantu yang muncul selalu sesuai budaya setempat.",
        analogy: "Hard Disk. Anda tidak bisa memutar file film yang belum didownload. Orang Jawa tidak akan kesurupan Drakula.",
        caseStudy: "Orang Inggris kesurupan Vampir, orang Indonesia kesurupan Pocong/Macan. Tidak pernah tertukar."
    },
    "solusi": {
        icon: "✅",
        category: "SOLUSI AKHIR",
        title: "Putus Siklusnya",
        text: "Kesurupan seringkali punya motif bawah sadar mencari perhatian (Secondary Gain). Solusinya: Jangan diberi panggung.",
        analogy: "Algoritma Medsos: Jika postingan 'Caper' tidak ada yang Like, orangnya malas posting. Jika kesurupan dicuekin, dia bangun sendiri.",
        caseStudy: "Saran Dr. Ryu: Tinggalkan saja, jangan dikerumuni. Nanti bangun sendiri karena 'malu' atau bosan."
    }
};

function selectNode(key, event) {
    if(event) event.preventDefault();

    const data = contentData[key];
    if (!data) return;

    // 1. Update Konten Panel
    document.getElementById('panelIcon').textContent = data.icon;
    document.getElementById('panelCategory').textContent = data.category;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelText').innerHTML = data.text;
    document.getElementById('panelAnalogy').textContent = data.analogy;
    document.getElementById('panelCase').textContent = data.caseStudy;

    // 2. Update Visual Active State
    document.querySelectorAll('.node-card').forEach(el => el.classList.remove('active'));
    // Cari elemen yang diklik dan tambahkan class active
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // Fallback untuk load awal
        document.querySelector(`.node-card.${key}`).classList.add('active');
    }
}

// Load awal
selectNode('start', null);
