document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.toggle('open');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.remove('open');
});

const video = document.getElementById('customVideo');

// Скрываем контролы по умолчанию
video.removeAttribute('controls');