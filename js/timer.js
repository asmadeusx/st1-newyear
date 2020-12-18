// Выставление даты до которой таймер считает дни.
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
// Для тестов
// var countDownDate = new Date("Dec 18, 2020 15:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Получить текущую дату
    var now = new Date().getTime();
    // Разница между текущей датой и концом таймера
    var distance = countDownDate - now;
    // Преобразование значений в дни, часы, минуты и секунды
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Вывод результата в элементы id="timer_"
    document.getElementById("timer_header").innerHTML = "До нового года осталось:"
    document.getElementById("timer_day").innerHTML = days + "<br>дней"
    document.getElementById("timer_hour").innerHTML = hours + "<br>часов"
    document.getElementById("timer_minute").innerHTML = minutes + "<br>минут"
    document.getElementById("timer_second").innerHTML = seconds + "<br>секунд"
    // Если таймер подошел к концу, отобразить иной текст 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer_header").innerHTML = "Он уже наступил! Ура!";
        document.getElementById("timer_day").innerHTML = ""
        document.getElementById("timer_hour").innerHTML = "";
        document.getElementById("timer_minute").innerHTML = "";
        document.getElementById("timer_second").innerHTML = "";
    }
}, 1000);