const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progressBar = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const volumeControl = document.getElementById("volume");

// Función para actualizar el tiempo en formato mm:ss
const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

// Play/Pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

// Actualizar la barra de progreso y el contador de tiempo
audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Establecer duración total cuando la canción carga
audio.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// Permitir cambiar la posición de la canción con la barra de progreso
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Control de volumen
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});
