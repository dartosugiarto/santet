// --- DATABASE KONTEN (LOGIKA RUNTUT) ---
const steps = [
    {
        icon: "🤔",
        category: "Langkah 1: Fenomena",
        title: "Apa Itu Kesurupan?",
        text: "Secara medis, ini disebut <strong>Dissociative Trance Disorder (DTD)</strong>. Bukan roh jahat yang masuk, tapi kesadaran yang 'bergeser' sementara.",
        analogy: "Analogi HP: <br>Ini bukan 'Virus' yang masuk dari luar, tapi HP sedang membuka aplikasi berat (Mode Game/Fokus) sehingga aplikasi lain (kesadaran) tertutup sementara."
    },
    {
        icon: "📂",
        category: "Langkah 2: Database Memori",
        title: "Kenapa Hantunya Lokal?",
        text: "Otak hanya bisa memunculkan apa yang tersimpan di memori. Orang Jawa kesurupan Macan Putih, Orang Inggris kesurupan Vampir. Tidak pernah tertukar.",
        analogy: "Analogi Folder File: <br>Anda tidak bisa membuka file yang belum pernah Anda download. Otak hanya memutar ulang 'File Audio/Video' yang sudah ada di hard disk (ingatan) Anda."
    },
    {
        icon: "🧪",
        category: "Langkah 3: Zat Kimia Otak",
        title: "Kenapa Ketagihan?",
        text: "Saat kesurupan, otak dibanjiri <strong>Dopamin</strong> (Rasa Nikmat) dan <strong>Oksitosin</strong> (Rasa Nyaman). Ini membuat tubuh rileks luar biasa setelahnya.",
        analogy: "Analogi Narkoba Alami: <br>Otak memberikan 'hadiah' zat kimia yang memabukkan. Rasanya seperti baru selesai pijat refleksi atau olahraga berat (runner's high). Nyaman!"
    },
    {
        icon: "🎭",
        category: "Langkah 4: Motif Bawah Sadar",
        title: "Untuk Apa Kesurupan?",
        text: "Ada keuntungan tersembunyi: <strong>Primary Gain</strong> (Istirahat dari stres) dan <strong>Secondary Gain</strong> (Dapat perhatian/kasih sayang).",
        analogy: "Analogi Aktor: <br>Anak pemalu yang tidak diperhatikan, tiba-tiba menjadi 'Pusat Perhatian' di panggung saat kesurupan. Bawah sadar berkata: 'Cara ini berhasil!'"
    },
    {
        icon: "💊",
        category: "Langkah 5: Solusi Medis",
        title: "Bagaimana Mengobatinya?",
        text: "Karena ini mekanisme mencari perhatian (bawah sadar), cara terbaik adalah: <strong>Jangan diberi panggung</strong>. Abaikan atau tinggalkan.",
        analogy: "Analogi Sinyal: <br>Jika Anda berhenti memberi 'Like' dan 'Komentar' pada postingan caper, orang itu akan berhenti posting. Putus siklus 'Hadiah'-nya."
    }
];

let currentStep = 0;

// --- RENDER ENGINE ---
const cardPanel = document.getElementById('cardPanel');

function renderCard() {
    const data = steps[currentStep];
    
    // Reset Animasi: Hapus kelas lalu tambahkan lagi agar animasi ulang berjalan
    cardPanel.classList.remove('fade-in');
    void cardPanel.offsetWidth; // Trigger reflow (trik CSS agar animasi restart)
    cardPanel.classList.add('fade-in');

    cardPanel.innerHTML = `
        <div>
            <div class="icon-box">${data.icon}</div>
            <h4>${data.category}</h4>
            <h2>${data.title}</h2>
            <div class="content">
                <p>${data.text}</p>
                <div class="analogy-box">
                    <span class="analogy-title">💡 LOGIKA SEDERHANA:</span>
                    ${data.analogy}
                </div>
            </div>
        </div>

        <div>
            <div class="dots">
                ${steps.map((_, i) => `<div class="dot ${i === currentStep ? 'active' : ''}"></div>`).join('')}
            </div>
            <div class="btn-group">
                <button class="btn-prev" onclick="prevStep()" ${currentStep === 0 ? 'disabled' : ''}>Kembali</button>
                <button class="btn-next" onclick="nextStep()">
                    ${currentStep === steps.length - 1 ? 'Selesai (Ulang)' : 'Lanjut →'}
                </button>
            </div>
        </div>
    `;
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
    } else {
        currentStep = 0; // Loop kembali ke awal
    }
    renderCard();
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderCard();
    }
}

// Jalankan render pertama kali saat halaman dimuat
renderCard();
