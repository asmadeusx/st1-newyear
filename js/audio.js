
// При загрузке страницы выполнить функцию, 
// чтобы не случилось "минус уши"
window.onload = function() {
    // Поиск элемента audio
    var audio = document.querySelector("audio");
    // Задание громкости в 10%
    audio.volume = 0.1;
}