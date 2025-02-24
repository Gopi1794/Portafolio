document.addEventListener("DOMContentLoaded", function () {
    // Inicializar partículas
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#ffffff" },
            "shape": {
                "type": "circle",
                "stroke": { "width": 0, "color": "#000000" }
            },
            "opacity": {
                "value": 0.5, "random": false,
                "anim": { "enable": false }
            },
            "size": {
                "value": 3, "random": true,
                "anim": { "enable": false }
            },
            "line_linked": {
                "enable": true, "distance": 150, "color": "#ffffff",
                "opacity": 0.4, "width": 1
            },
            "move": {
                "enable": true, "speed": 6, "direction": "none",
                "random": false, "straight": false, "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            }
        },
        "retina_detect": true
    });

    // ⚡ Forzar la actualización al cargar la página
    window.dispatchEvent(new Event('resize'));

    // Iniciar estadísticas (opcional)
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    count_particles = document.querySelector('.js-count-particles');

    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});
