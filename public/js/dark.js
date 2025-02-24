const btnSol = document.querySelector('.sol');
const btnLuna = document.querySelector('.luna');
const videoYo = document.querySelector('.video');
const imgYo = document.querySelector('.fondo-circulo');
const particulas = document.querySelector('#particles-js');

function cambiarEstilo() {
    const bits = document.querySelectorAll('.bit');
    const dialogo = document.createElement('div');
    dialogo.classList.add('dialogo');
    dialogo.textContent = '👋 Gracias! Ahora puedo cambiar de pose';
    document.body.appendChild(dialogo);

    if (document.body.classList.contains('modo-claro')) {
        document.body.classList.replace('modo-claro', 'modo-oscuro');
        btnSol.style.display = 'flex';
        btnLuna.style.display = 'none';
        videoYo.style.display = 'block';
        imgYo.style.display = 'none';
        particulas.style.display = 'block';

        videoYo.currentTime = 0;
        videoYo.play();

        bits.forEach(bit => {
            bit.style.color = '#3dd600';
            bit.style.animationDuration = '.2s';
        });

        // Aparece y desaparece la viñeta
        setTimeout(() => {
            dialogo.style.opacity = '1';
        }, 100);
        setTimeout(() => {
            dialogo.style.opacity = '0';
            document.body.removeChild(dialogo);
        }, 5000);
    } else {
        document.body.classList.replace('modo-oscuro', 'modo-claro');
        btnSol.style.display = 'none';
        btnLuna.style.display = 'flex';
        videoYo.style.display = 'none';
        imgYo.style.display = 'block';
        particulas.style.display = 'none';

        videoYo.pause();

        bits.forEach(bit => {
            bit.style.color = '';
            bit.style.animationDuration = '';
        });
    }
}