// Объявление переменных
var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];
// Описание функции
function decOfNum(number, titles)
{
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}

// Выставление даты до которой таймер считает дни, т.е. в нашем случае НГ
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

// Для тестов
// var countDownDate = new Date("Dec 18, 2020 16:52:00").getTime();

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
    document.getElementById("timer_header").innerHTML = "До нового года осталось:";
    document.getElementById("timer_day").innerHTML = days + "<br>" + decOfNum(days, ['день', 'дня', 'дней']);
    document.getElementById("timer_hour").innerHTML = hours + "<br>" + decOfNum(hours, ['час', 'часа', 'часов']);
    document.getElementById("timer_minute").innerHTML = minutes + "<br>" + decOfNum(minutes, ['минута', 'минуты', 'минут']);
    document.getElementById("timer_second").innerHTML = seconds + "<br>" + decOfNum(seconds, ['секунда', 'секунды', 'секунд']);

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
