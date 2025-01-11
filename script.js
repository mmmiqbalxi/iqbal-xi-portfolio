// dark/light mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const icon = themeToggle.querySelector('.iconify');
    if (document.body.classList.contains('dark-theme')) {
        icon.setAttribute('data-icon', 'mdi:weather-sunny');
        icon.style.color = '#FFF';
    } else {
        icon.setAttribute('data-icon', 'mdi:weather-night');
        icon.style.color = '#000';
    }
});

const darkStyles = document.createElement('style');
darkStyles.textContent = `
    body.dark-theme {
        background-color: #000;
        color: #FFF;
    }
    
    body.dark-theme .profile-picture .avatar {
        border: 5px solid #FFF;
    }

    body.dark-theme .project-card {
        background-color: #2b2b2b;
    }
    
    body.dark-theme .project-grid .project-card {
        background-color: #2b2b2b; /* Card background color */
        box-shadow: 0 4px 6px rgba(235, 0, 0, 0.1); /* Light shadow */
    }

    body.dark-theme .project-grid .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(255, 255, 255, 0.36); /* White shadow on hover */
    }
    
    body.dark-theme #contact-form input,
    body.dark-theme #contact-form textarea {
        background-color: #333; /* Background dark mode */
        color: #FFF; /* Text color */
        border: 1px solid #555; /* Border color */
    }

    body.dark-theme #contact-form input:focus,
    body.dark-theme #contact-form textarea:focus {
        border-color: #007BFF; /* Highlight border */
        background-color: #444; /* Slightly lighter for focus */
    }

    body.dark-theme #contact-form input::placeholder,
    body.dark-theme #contact-form textarea::placeholder {
        color: #FFF; /* Placeholder in white */
        opacity: 1; /* Ensures placeholder is fully visible */
    }
`;
document.head.appendChild(darkStyles);

// Download CV
document.getElementById("download-btn").addEventListener("click", () => {
    // tampilkan custom
    document.getElementById("custom-alert").style.display = "flex";
});

// tutup alert jika Cancel di klik
document.getElementById("cancel-btn").addEventListener("click", () => {
    document.getElementById("custom-alert").style.display = "none";
})

// mengunduh CV jika OK di klik
document.getElementById("ok-btn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "doc/M-Iqbal-CV.pdf";
    link.download = "Muhamad-Iqbal-CV.pdf";
    link.click();
    document.getElementById("custom-alert").style.display = "none";
});

// Open Modal atau gambar membesar ketika di klik
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImage.src = imageSrc;
}

// Close Modal untuk menutup gambar
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}