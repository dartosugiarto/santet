const contentData = {
    "start": {
        category: "01. OBSERVASI",
        title: "Fenomena Ganjil",
        text: "Masyarakat sering menjumpai fenomena yang sulit dijelaskan: Kesurupan, melihat hantu, anak indigo, hingga penyakit aneh (santet). Kita sering terjebak pada penjelasan 'Logika Mistika'.",
        analogy: "Seperti manusia purba melihat petir: Dianggap kemarahan Dewa Zeus, padahal itu listrik statis.",
        caseStudy: "Tan Malaka menyebut 'Logika Mistika' sebagai cara berpikir yang berhenti pada takhayul tanpa mencari bukti konkret."
    },
    "mistik_root": {
        category: "JALUR BUDAYA",
        title: "Logika Mistika",
        text: "Kecenderungan otak untuk mencari jawaban cepat dan memuaskan, bukan jawaban yang benar. Mistis memberikan rasa 'aman' semu dan kepastian.",
        analogy: "Mobil mogok: Lebih nyaman panggil dukun tiup mesin (ada harapan) daripada panggil montir yang bilang 'mesin hancur' (fakta pahit).",
        caseStudy: "Wabah Flu Spanyol 1918: Orang lari ke dukun/agama karena kedokteran belum punya obat, memberikan ketenangan psikologis meski tetap meninggal."
    },
    "santet": {
        category: "KLAIM SUPRANATURAL",
        title: "Santet & Guna-guna",
        text: "Penyakit mendadak, muntah darah, atau buta yang dianggap kiriman gaib. Seringkali ini adalah penyakit medis yang belum terdiagnosis.",
        analogy: "Orang buta mendadak dituduh santet, padahal keracunan.",
        caseStudy: "Kasus Atlet Buta: Mengaku disantet, ternyata keracunan Metanol (Alkohol Oplosan) yang merusak saraf mata."
    },
    "santet_medis": {
        category: "PENJELASAN SAINS",
        title: "Keracunan & Penyakit Langka",
        text: "Banyak 'Santet' adalah penyakit medis: <br>1. <strong>Muntah Darah/Paku:</strong> Bisa jadi gangguan Pica (menelan benda asing) atau Hemofilia (darah sukar membeku).<br>2. <strong>Kusta/Leprosy:</strong> Dulu dianggap kutukan, ternyata bakteri.",
        analogy: "Clostridium Tetani (Tetanus): Membuat tubuh kaku melengkung seperti kerasukan setan, padahal infeksi bakteri tanah.",
        caseStudy: "Tidak ada satu pun laporan otopsi kedokteran di seluruh dunia yang menemukan paku/silet 'gaib' di dalam tubuh tanpa jalan masuk logis."
    },
    "indigo": {
        category: "KLAIM SUPRANATURAL",
        title: "Anak Indigo",
        text: "Anak yang dianggap punya kemampuan melihat hantu atau masa depan. Istilah ini populer dari salah kaprah 'Fotografi Kirlian' (Aura Ungu).",
        analogy: "Daun pun kalau difoto Kirlian auranya bisa ungu jika kadar airnya pas.",
        caseStudy: "Klaim 'Melihat Hantu' seringkali adalah pareidolia atau imajinasi aktif yang divalidasi oleh lingkungan (Eco Chamber)."
    },
    "savant": {
        category: "DIAGNOSIS MEDIS",
        title: "Savant Syndrome / Autism",
        text: "Banyak 'Anak Indigo' sebenarnya adalah <strong>Savant Syndrome</strong> atau spektrum Autisme. Mereka punya sensori yang sangat sensitif (bisa dengar detak jam, tau suhu tubuh) tapi minim kemampuan sosial.",
        analogy: "Dr. Ryu Hasan kecil dianggap dukun karena bisa menebak orang sakit (sangat peka), padahal dia autis/savant.",
        caseStudy: "Anak Savan bisa menghitung 45x93 di luar kepala, tapi sulit belanja di Indomaret. Itu handicap, bukan kesaktian."
    },
    "ketindihan": {
        category: "FENOMENA TIDUR",
        title: "Ketindihan (Eureup-eureup)",
        text: "Bangun tidur tapi badan tidak bisa gerak, dada sesak, sering melihat bayangan hitam. Dianggap diduduki setan.",
        analogy: "Seperti komputer yang layarnya sudah nyala, tapi keyboard dan mouse belum connect.",
        caseStudy: "Mitos di berbagai negara: Old Hag (Inggris), Kanashibari (Jepang)."
    },
    "sleep_paralysis": {
        category: "MEKANISME BIOLOGIS",
        title: "Sleep Paralysis (REM Atonia)",
        text: "Saat tidur mimpi (REM), otak melumpuhkan otot agar kita tidak lari-lari saat mimpi. Ketindihan terjadi saat <strong>Otak sadar duluan, tapi otot masih dikunci</strong>.",
        analogy: "Sistem keamanan mobil yang telat dibuka kuncinya saat pengemudi sudah masuk.",
        caseStudy: "Halusinasi bayangan hitam muncul karena otak panik (Amigdala aktif) mencari penjelasan kenapa tubuh lumpuh."
    },
    "sains_root": {
        category: "PENDEKATAN NEUROSAINS",
        title: "Neurosains (Otak)",
        text: "Memahami fenomena dari aktivitas listrik dan kimia di otak. Otak manusia adalah produk evolusi yang tidak dirancang untuk 'Benar', tapi untuk 'Selamat'.",
        analogy: "Hardware (Otak) menjalankan Software (Pikiran). Kalau software glitch, bukan berarti ada hantu di dalam CPU.",
        caseStudy: "Stargate Project (CIA): Riset 20 tahun mencari orang sakti/paranormal untuk militer. Hasilnya: NOL. Dibubarkan."
    },
    "dtd": {
        category: "DIAGNOSIS MEDIS",
        title: "DTD (Dissociative Trance Disorder)",
        text: "Kesurupan adalah gangguan mental (ICD-10 F44.3). Kesadaran utama 'tertidur', sistem limbik (emosi) mengambil alih. Bukan kemasukan roh, tapi 'keluarnya' kesadaran diri.",
        analogy: "Mode Airplane di HP: Mesin hidup, layar nyala, tapi fungsi komunikasi mati.",
        caseStudy: "Pasien histeria massal di pabrik/sekolah."
    },
    "kimia_otak": {
        category: "NEUROKIMIA",
        title: "Banjir Kimia Otak",
        text: "Saat trans/kesurupan, otak memproduksi: <br>1. <strong>Dopamin:</strong> Rasa nikmat/Nge-fly.<br>2. <strong>Endorfin:</strong> Anti-nyeri (kebal pukul).<br>3. <strong>Oksitosin:</strong> Rasa nyaman/bonding.",
        analogy: "Narkoba Alami Tubuh. Mirip sensasi 'Runner's High' pada pelari maraton.",
        caseStudy: "Pemain Kuda Lumping makan beling tidak sakit karena banjir Endorfin, bukan karena mantra."
    },
    "hyper_recall": {
        category: "FENOMENA MEMORI",
        title: "Hyper-Recalling",
        text: "Fenomena 'bisa bahasa asing' saat kesurupan. Otak memutar kembali rekaman memori bawah sadar (misal: sering dengar ngaji, lagu barat) yang biasanya tidak bisa diakses.",
        analogy: "Seperti file tersembunyi di komputer yang tiba-tiba terbuka. Dia hanya 'memutar ulang', tidak bisa diajak ngobrol bahasa tersebut.",
        caseStudy: "Orang Jawa kesurupan 'Bahasa Arab', padahal cuma mengulang hafalan audio yang pernah didengar, bukan paham tata bahasa."
    },
    "gains": {
        category: "MOTIVASI BAWAH SADAR",
        title: "Primary & Secondary Gain",
        text: "Kenapa kesurupan berulang? <br>1. <strong>Primary Gain:</strong> Otak istirahat (shutdown) dari stres.<br>2. <strong>Secondary Gain:</strong> Mendapat perhatian/kasih sayang (biasanya terjadi pada orang yang merasa terabaikan).",
        analogy: "Anak kecil pura-pura sakit perut supaya tidak sekolah (tapi ini terjadi di level bawah sadar).",
        caseStudy: "Kesurupan massal selalu menular pada orang-orang yang punya tekanan emosi sama (misal: mau ujian, upacara panas)."
    },
    "solusi": {
        category: "TERAPI",
        title: "Solusi: Extinction",
        text: "Cara terbaik menangani kesurupan caper: <strong>JANGAN DIBERI PANGGUNG</strong>. Isolasi di tempat tenang, jangan ditonton. Tanpa audiens, otak akan berhenti bersandiwara.",
        analogy: "Algoritma Medsos: Kalau konten tidak ada yang Like/View, kreator akan berhenti posting.",
        caseStudy: "Protokol medis: Pisahkan pasien, tenangkan, beri oksigen. Jangan dirubung atau dibacakan mantra (malah makin jadi)."
    },
    "halusinasi": {
        category: "PERSEPSI OTAK",
        title: "Penampakan & Halusinasi",
        text: "Melihat hantu adalah kesalahan interpretasi otak (Pareidolia) atau halusinasi akibat suhu dingin, gelombang infrasound, atau medan magnet.",
        analogy: "Melihat baju digantung seperti orang gantung diri saat gelap.",
        caseStudy: "Hantu itu terikat budaya (Cultural Bound). Orang Inggris tidak mungkin melihat Pocong, orang Indonesia tidak melihat Vampir."
    },
    "evolusi": {
        category: "EVOLUSI",
        title: "Evolusi & Survival",
        text: "Kenapa kita takut hantu? Evolusi melatih otak kita untuk <strong>Paranoid</strong>. Lebih baik lari dari 'bayangan' yang dikira harimau, daripada diam ternyata harimau beneran.",
        analogy: "False Positive: Lebih baik salah sangka ada hantu, daripada salah sangka tidak ada predator.",
        caseStudy: "Manusia purba yang 'rasional' dan tidak takut semak bergoyang, sudah punah dimakan Singa. Kita adalah keturunan manusia penakut."
    }
};

// ... (Sisa kode script.js sama seperti sebelumnya: drawer logic, dll)
const drawer = document.getElementById('rightDrawer');
const overlay = document.getElementById('drawerOverlay');

function openDrawer(key, event) {
    if(event) event.preventDefault();
    const data = contentData[key];
    if(!data) return;

    // Update Content
    document.getElementById('panelCategory').textContent = data.category;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelText').innerHTML = data.text;
    document.getElementById('panelAnalogy').innerHTML = data.analogy;
    document.getElementById('panelCase').innerHTML = data.caseStudy;

    // Open
    drawer.classList.add('open');
    overlay.classList.add('active');
}

function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeDrawer();
});
