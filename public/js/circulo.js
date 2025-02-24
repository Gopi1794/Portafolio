document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector('.circle');
    const numBits = 20; // Cantidad de 1s y 0s
    const radius = 220; // Radio del círculo

    for (let i = 0; i < numBits; i++) {
        const angle = (i / numBits) * (2 * Math.PI); // Convierte en radianes
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const bit = document.createElement('div');
        bit.classList.add('bit');
        bit.textContent = Math.random() > 0.5 ? '1' : '0'; // Alterna entre 1 y 0

        // Posiciona los bits alrededor del círculo
        bit.style.left = `${25 + x}px`;
        bit.style.top = `${25 + y}px`;

        circle.appendChild(bit);
    }
});