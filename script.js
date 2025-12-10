// Database Konten dengan SVG Icons
const contentData = {
    "start": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
        category: "01. OBSERVASI",
        title: "Fenomena Kesurupan",
        text: "Seseorang tiba-tiba berperilaku aneh, suara berubah, tenaga menjadi kuat, dan mengaku sebagai entitas lain. Secara medis, ini adalah indikasi awal disosiasi.",
        analogy: "Smartphone 'Freeze'. Layar error bukan berarti hardware rusak, bisa jadi software crash.",
        caseStudy: "Sering terjadi saat upacara bendera atau situasi tekanan sosial tinggi."
    },
    "decision": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>`,
        category: "02. ANALISIS",
        title: "Pilih Pendekatan",
        text: "Titik percabangan logika. Apakah kita validasi menggunakan data objektif (Sains) atau cerita turun-temurun (Mitos)?",
        analogy: "Mobil Mogok: Ke bengkel (Scan Komputer) vs Panggil Dukun.",
        caseStudy: "PPDGJ (Medis) vs Primbon (Budaya)."
    },
    "mistik": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
        category: "JALUR MITOS",
        title: "Atribusi Mistik",
        text: "Jalan pintas kognitif (Heuristik). Otak mengisi ketidaktahuan dengan cerita hantu agar merasa 'paham' situasi dengan cepat.",
        analogy: "Dulu petir dianggap kemarahan Dewa karena listrik belum ditemukan.",
        caseStudy: "Epilepsi zaman dulu dianggap kerasukan setan."
    },
    "dukun": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`,
        category: "OUTPUT",
        title: "Dukun & Sugesti",
        text: "Solusi berbasis sugesti. Kadang berhasil karena efek Placebo, tapi tidak menyembuhkan akar masalah fisiologis.",
        analogy: "Memukul TV rusak. Kadang nyala karena hoki, bukan karena diperbaiki.",
        caseStudy: "Fenomena Begu Ganjang."
    },
    "sains": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
        category: "DATA MEDIS",
        title: "Jalur Medis (DTD)",
        text: "Dissociative Trance Disorder (F44.3). Kesadaran utama non-aktif, sistem limbik (emosi) mengambil alih kendali motorik.",
        analogy: "Mode Airplane di HP. Mesin hidup, tapi sinyal komunikasi mati.",
        caseStudy: "Tercatat resmi di ICD-10 (WHO)."
    },
    "kimia": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>`,
        category: "NEUROKIMIA",
        title: "Banjir Kimia Otak",
        text: "Otak memproduksi Endorfin & Dopamin berlebih. Menyebabkan rasa kuat, kebal sakit, dan euforia.",
        analogy: "Narkoba Alami Tubuh. Mirip sensasi 'Runner's High'.",
        caseStudy: "Kekebalan tubuh saat atraksi Kuda Lumping."
    },
    "memori": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>`,
        category: "DATABASE",
        title: "Memori Budaya",
        text: "Isi kesurupan selalu sesuai budaya. Orang tidak akan kesurupan hantu yang tidak ia kenal.",
        analogy: "MP3 Player hanya bisa memutar lagu yang sudah di-download.",
        caseStudy: "Orang Eropa kesurupan Vampir, Indonesia kesurupan Pocong."
    },
    "solusi": {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        category: "SOLUSI",
        title: "Putus Siklusnya",
        text: "Jangan diberi panggung. Isolasi di ruang tenang. Tanpa audiens, otak akan kembali sadar karena bosan/lelah.",
        analogy: "Algoritma TikTok: Jika tidak ada Like/View, orang malas posting.",
        caseStudy: "Protokol penanganan histeria massal."
    }
};

function selectNode(key, event) {
    if(event) event.preventDefault();
    
    const data = contentData[key];
    if(!data) return;

    // 1. SWITCH VISIBILITY
    // Sembunyikan 'Empty State', Tampilkan 'Content State'
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('contentState').style.display = 'flex';

    // 2. Update Konten
    document.getElementById('panelIcon').innerHTML = data.svg;
    document.getElementById('panelCategory').textContent = data.category;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelText').innerHTML = data.text;
    document.getElementById('panelAnalogy').textContent = data.analogy;
    document.getElementById('panelCase').textContent = data.caseStudy;

    // 3. Active State (Visual)
    document.querySelectorAll('.node-card').forEach(el => el.classList.remove('active'));
    if(event.currentTarget) event.currentTarget.classList.add('active');
}
