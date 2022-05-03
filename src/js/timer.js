const deadline = '2022-7-25',
      deadline_2 = '2022-6-15',
      deadline_3 = '2022-8-15',
      deadline_4 = '2022-9-15',
      minSecondsInSecond = 1000,
      secondInMinute = 60,
      minInHour = 60,
      hoursInDay = 24;  

function getTime(endTime) {
    const time = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(time / (minSecondsInSecond * secondInMinute * minInHour * hoursInDay)),
          hours = Math.floor((time / (minSecondsInSecond * secondInMinute * minInHour) % hoursInDay)),
          minutes = Math.floor((time / minSecondsInSecond / secondInMinute) % minInHour),
          seconds = Math.floor((time / minSecondsInSecond) % secondInMinute);

        return {
        'totalTime': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(className, endTime) {
    const timer = document.querySelector(className),
          days = timer.querySelector('.days'),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const time = getTime(endTime);

        days.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds

        if( time.totalTime <= 0) {
            clearInterval(timeInterval)
        }
    }
}

setClock('.timer', deadline);
setClock('.timer_2', deadline_2);
setClock('.timer_3', deadline_3);
setClock('.timer_4', deadline_4);
