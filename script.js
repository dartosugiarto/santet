// Database Konten (Isi materi tetap sama, struktur disesuaikan)
const contentData = {
    "start": {
        category: "01. OBSERVASI",
        title: "Fenomena Kesurupan",
        text: "Seseorang tiba-tiba berperilaku aneh, suara berubah, tenaga menjadi kuat, dan mengaku sebagai entitas lain. Secara neurosains, ini adalah fenomena <strong>Disosiasi Kesadaran</strong>.",
        analogy: "Smartphone 'Freeze'. Layar error bukan berarti hardware rusak, bisa jadi software crash.",
        caseStudy: "Umum terjadi pada situasi tekanan sosial tinggi (upacara, kemah) di mana ambang batas stres terlampaui."
    },
    "decision": {
        category: "02. METODOLOGI",
        title: "Pemilihan Instrumen",
        text: "Pencarian kebenaran membutuhkan instrumen yang terkalibrasi. Kita harus memilih: Validasi Objektif (Data) atau Validasi Subjektif (Testimoni).",
        analogy: "Mobil Mogok: Dibawa ke bengkel resmi (Scan ECU) vs Panggil 'Orang Pintar' tiup kap mesin.",
        caseStudy: "PPDGJ (Pedoman Penggolongan Diagnosis Gangguan Jiwa) vs Primbon."
    },
    "mistik": {
        category: "JALUR BIAS (FALLACY)",
        title: "Atribusi Mistik",
        text: "Jalan pintas kognitif (Heuristik). Ketika otak tidak menemukan penjelasan logis yang cepat, ia mengisi kekosongan data dengan mitos budaya.",
        analogy: "God of the Gaps: Dulu petir dianggap kemarahan Zeus karena listrik statis belum ditemukan.",
        caseStudy: "Dulu Epilepsi dianggap kerasukan setan, kini bisa diobati dengan obat antikonvulsan."
    },
    "dukun": {
        category: "OUTCOME JALUR A",
        title: "Efek Placebo",
        text: "Intervensi ritual kadang berhasil bukan karena kekuatan supranatural, melainkan manipulasi psikologis (Sugesti) dan siklus alami penyakit.",
        analogy: "Memukul TV Rusak: Kadang menyala kembali karena guncangan, bukan karena perbaikan sirkuit yang benar.",
        caseStudy: "Fenomena 'Begu Ganjang'. Penanganan mistik hanya menenangkan gejala (simtomatik), tidak menyembuhkan akar masalah."
    },
    "sains": {
        category: "DIAGNOSIS KLINIS",
        title: "Dissociative Trance Disorder",
        text: "Dalam ICD-10 (F44.3), ini adalah gangguan trans disosiatif. Kesadaran utama 'tertidur' (inhibit), sementara alam bawah sadar mengambil alih motorik.",
        analogy: "Mode Airplane: Mesin HP hidup, layar menyala, tapi fungsi komunikasi utama non-aktif.",
        caseStudy: "Pasien tidak akan merespon panggilan nama aslinya, karena 'File' identitas diri sedang tidak diakses oleh RAM otak."
    },
    "kimia": {
        category: "MEKANISME NEUROBIOLOGI",
        title: "Neurotransmitter Flood",
        text: "Otak membanjiri sistem saraf dengan <strong>Endorfin, Dopamin, dan Oksitosin</strong>. Ini menciptakan sensasi euforia (Nge-fly) dan bebas rasa sakit.",
        analogy: "Narkoba Endogen: Tubuh memproduksi zat mirip morfin sendiri. Pelaku merasa sangat ringan dan kuat.",
        caseStudy: "Mirip 'Runner's High' pada pelari maraton atau sensasi ekstase saat ritual keagamaan intens."
    },
    "memori": {
        category: "DATABASE MEMORI",
        title: "Cultural Bound Syndrome",
        text: "Isi kesurupan selalu terikat budaya. Otak hanya bisa memproyeksikan data yang sudah tersimpan di Hippocampus.",
        analogy: "Media Player: Anda tidak bisa memutar lagu yang belum pernah di-download.",
        caseStudy: "Orang Eropa kesurupan Vampir/Alien. Orang Indonesia kesurupan Pocong/Macan. Tidak pernah tertukar."
    },
    "solusi": {
        category: "REKOMENDASI KLINIS",
        title: "Extinction Strategy",
        text: "Memutus rantai <em>Secondary Gain</em> (keuntungan terselubung mencari perhatian). Jika tidak ada audiens, pertunjukan berhenti.",
        analogy: "Algoritma Medsos: Konten yang tidak dapat 'Like' (Atensi) akan berhenti diposting oleh kreatornya.",
        caseStudy: "Isolasi pasien di ruang tenang. Tanpa penonton, otak akan kembali ke mode sadar karena kelelahan atau bosan."
    }
};

function selectNode(key, event) {
    // Mencegah link meloncat ke atas halaman
    if(event) event.preventDefault();

    const data = contentData[key];
    if (!data) return;

    // --- 1. Update Text Konten ---
    // Pastikan ID ini ada di HTML Anda
    const catEl = document.getElementById('panelCategory');
    const titleEl = document.getElementById('panelTitle');
    const textEl = document.getElementById('panelText');
    const analogyEl = document.getElementById('panelAnalogy');
    const caseEl = document.getElementById('panelCase');

    if(catEl) catEl.textContent = data.category;
    if(titleEl) titleEl.textContent = data.title;
    if(textEl) textEl.innerHTML = data.text;
    if(analogyEl) analogyEl.textContent = data.analogy;
    if(caseEl) caseEl.textContent = data.caseStudy;

    // --- 2. Update Warna Badge (Fitur Tambahan) ---
    // Mengubah warna badge kategori sesuai jenis node
    if(catEl) {
        if(key === 'mistik' || key === 'dukun') {
            catEl.style.color = '#BE123C'; // Merah
            catEl.style.background = '#FFF1F2';
        } else if (key === 'start' || key === 'decision') {
            catEl.style.color = '#1E293B'; // Slate
            catEl.style.background = '#F1F5F9';
        } else if (key === 'solusi') {
            catEl.style.color = '#059669'; // Hijau
            catEl.style.background = '#ECFDF5';
        } else {
            catEl.style.color = '#0369A1'; // Biru
            catEl.style.background = '#F0F9FF';
        }
    }

    // --- 3. Update Visual Active State (Warna Tombol) ---
    // Hapus class 'active' dari semua node
    document.querySelectorAll('.node-card').forEach(el => el.classList.remove('active'));
    
    // Tambahkan class 'active' ke node yang diklik
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // Fallback: cari berdasarkan class jika dipanggil manual (saat load awal)
        const defaultEl = document.querySelector(`.node-card.${key}`);
        if(defaultEl) defaultEl.classList.add('active');
    }
}

// Inisialisasi awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    selectNode('start', null);
});
