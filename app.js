function generateConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    const colors = [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
    ];
    const shapes = ["rectangle", "circle", "triangle"];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Generar color aleatorio
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // Posición inicial
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${Math.random() * 50}px`;

        // Tamaño aleatorio
        const size = Math.random() * 8 + 4; // Tamaños entre 4px y 12px
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size * 2}px`;

        // Animación adicional (para variar)
        confetti.style.animationDelay = `${Math.random() * 2}s`;

        confettiContainer.appendChild(confetti);
    }

    // Limpia los confetis después de un tiempo
    setTimeout(() => {
        confettiContainer.innerHTML = "";
    }, 3000);
}

// Llamar la función cuando sea necesario
generateConfetti();
