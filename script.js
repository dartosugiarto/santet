// Database Konten Lengkap
const contentData = {
    "start": {
        icon: "🎬",
        category: "LANGKAH 1: OBSERVASI",
        title: "Fenomena Kesurupan",
        text: "Seseorang tiba-tiba berperilaku aneh, suara berubah, tenaga menjadi kuat, dan mengaku sebagai entitas lain (harimau, leluhur, dll). Ini adalah titik awal pengamatan.",
        analogy: "Seperti komputer yang tiba-tiba 'Freeze' atau membuka aplikasi yang tidak kita klik. Kita melihat layarnya aneh, tapi belum tahu sebabnya (Hardware rusak atau Software crash?).",
        caseStudy: "Di Indonesia sering terjadi saat upacara bendera atau kegiatan kemah (situasi di bawah tekanan/panas)."
    },
    "decision": {
        icon: "⚖️",
        category: "LANGKAH 2: ALAT VERIFIKASI",
        title: "Decision: Metode Apa yang Dipakai?",
        text: "Kita dihadapkan pada dua pilihan cara pandang. Apakah kita menggunakan instrumen ilmiah (EEG, Scan Otak, Psikologi) atau hanya mengandalkan cerita turun-temurun (Testimoni)?",
        analogy: "Seperti mobil mogok: Apakah Anda bawa ke bengkel untuk dicolok komputer diagnostik (Sains), atau Anda panggil orang pintar untuk meniup kap mesin (Mistik)?",
        caseStudy: "Dr. Ryu menegaskan: Dokter bekerja berdasarkan pedoman medis (PPDGJ), bukan primbon."
    },
    "mistik": {
        icon: "👻",
        category: "JALUR A (FALSE)",
        title: "Atribusi Mistik (Logika Lama)",
        text: "Jika alat ilmiah TIDAK digunakan, otak manusia secara default akan mencari penjelasan termudah: 'Ini pasti kerjaan roh halus'. Ini adalah jalan pintas kognitif.",
        analogy: "Zaman purba: Petir menyambar karena Dewa Thor marah. (Padahal itu listrik statis). Ketidaktahuan mekanisme melahirkan mitos.",
        caseStudy: "Dulu epilepsi dianggap kerasukan setan. Setelah sains maju, kita tahu itu badai listrik di otak, bukan setan."
    },
    "dukun": {
        icon: "🔮",
        category: "OUTPUT JALUR A",
        title: "Pengobatan Sugesti (Placebo)",
        text: "Solusinya adalah Dukun atau Rukyah. Kadang berhasil sembuh, tapi itu adalah efek Sugesti/Placebo atau siklus alami penyakit yang memang sudah waktunya berhenti.",
        analogy: "Memukul TV yang rusak sampai nyala lagi. Kadang berhasil karena konektor longgar terguncang, tapi tidak memperbaiki masalah sirkuit yang sebenarnya.",
        caseStudy: "Kasus 'Begu Ganjang' di Sumatera atau 'Koro' di Sulawesi. Penanganan mistik seringkali hanya menenangkan sementara tapi bisa kambuh."
    },
    "sains": {
        icon: "🏥",
        category: "JALUR B (TRUE)",
        title: "Diagnosis Medis: DTD",
        text: "Dalam kedokteran, ini didiagnosis sebagai <strong>Dissociative Trance Disorder (DTD)</strong>. Bukan roh yang masuk, melainkan kesadaran utama yang 'bergeser' atau tertidur sementara.",
        analogy: "Mode 'Airplane' di HP. HP-nya masih menyala, mesinnya jalan, tapi fungsi komunikasi utamanya mati sementara.",
        caseStudy: "Masuk dalam klasifikasi penyakit internasional (ICD-10) dan Pedoman Penggolongan Diagnosis Gangguan Jiwa (PPDGJ) di Indonesia."
    },
    "kimia": {
        icon: "🧪",
        category: "MEKANISME BIOLOGIS",
        title: "Banjir Zat Kimia Otak",
        text: "Saat kesurupan, otak memproduksi <strong>Dopamin</strong> (Rasa Nikmat) dan <strong>Oksitosin</strong> (Rasa Nyaman) secara berlebihan. Ini membuat pelaku merasa 'Nge-fly' dan rileks.",
        analogy: "Narkoba Alami. Tubuh memproduksi zat yang efeknya mirip morfin. Itulah sebabnya orang kesurupan merasa enteng dan kadang ketagihan mengulanginya.",
        caseStudy: "Mirip dengan sensasi 'Runner's High' setelah lari maraton, atau rasa nyaman luar biasa saat menyusui bayi (banjir oksitosin)."
    },
    "memori": {
        icon: "💾",
        category: "SUMBER DATA",
        title: "Database Memori Lokal",
        text: "Otak hanya bisa memutar 'skrip' yang pernah direkam sebelumnya. Hantu yang muncul selalu sesuai budaya setempat.",
        analogy: "Hard Disk Komputer. Anda tidak bisa memutar file film yang belum pernah Anda download. Otak tidak bisa memunculkan 'Vampir China' kalau Anda orang Jawa yang tidak pernah nonton film China.",
        caseStudy: "Orang Inggris tidak pernah kesurupan Pocong. Orang Jawa tidak pernah kesurupan Drakula. Hantunya selalu lokal."
    },
    "solusi": {
        icon: "✅",
        category: "SOLUSI AKHIR",
        title: "Putus Siklus Gratifikasi",
        text: "Karena kesurupan seringkali memiliki motif bawah sadar untuk mencari perhatian (Secondary Gain) atau istirahat (Primary Gain), solusinya adalah jangan diberi panggung.",
        analogy: "Algoritma Medsos: Jika postingan 'Caper' tidak ada yang Like dan Comment, lama-lama orangnya malas posting. Jika kesurupan dicuekin, dia akan bangun sendiri karena 'malu' atau bosan.",
        caseStudy: "Saran Dr. Ryu: Tinggalkan saja. Jangan dikerumuni. Nanti bangun sendiri karena tidak ada insentif (perhatian) yang didapat."
    }
};

// Fungsi untuk mengganti konten
function selectNode(nodeKey) {
    const data = contentData[nodeKey];
    if (!data) return;

    // Update UI Panel
    document.getElementById('panelIcon').textContent = data.icon;
    document.getElementById('panelCategory').textContent = data.category;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelText').innerHTML = data.text;
    document.getElementById('panelAnalogy').textContent = data.analogy;
    document.getElementById('panelCase').textContent = data.caseStudy;

    // Highlight Node di Diagram
    document.querySelectorAll('.node-group').forEach(el => el.classList.remove('active'));
    // Cari elemen yang diklik (secara manual atau via event) dan tambahkan kelas active
    // Catatan: Di SVG onclick, 'this' merujuk ke elemen. Kita handle class active di sana.
}

// Event Listener Tambahan untuk styling aktif
const allNodes = document.querySelectorAll('.node-group');
allNodes.forEach(node => {
    node.addEventListener('click', function() {
        allNodes.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    });
});

// Load awal
selectNode('start');
