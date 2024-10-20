document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.toggle('open');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.remove('open');
});

const video = document.getElementById('customVideo');

// Скрываем контролы по умолчанию
video.removeAttribute('controls');

const videos = document.querySelectorAll('video');

// Применяем обработчики событий для каждого видео
videos.forEach((video) => {
    // Скрываем контролы по умолчанию
    video.removeAttribute('controls');
});