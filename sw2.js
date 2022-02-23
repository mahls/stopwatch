var startButton = document.getElementById('btn1');
var pauseButton = document.getElementById('btn2');
var resetButton = document.getElementById('btn3');

let stopwatch = {

    seconds: 0,
    minutes: 0,
    hours: 0,

    secondsIntervalId: 0,
    minutesIntervalId: 0,
    hoursIntervalId: 0,

    isTimerStarted: false,

    countSeconds: function () {

        stopwatch.secondsIntervalId = setInterval(function () {
            stopwatch.seconds += 1;
            if (stopwatch.seconds == 60) {
                stopwatch.seconds = 0;
            }
            if (stopwatch.seconds < 10) {
                document.getElementById('numsec').innerText = "0" + stopwatch.seconds;
            } else {
                document.getElementById('numsec').innerText = stopwatch.seconds;
            }
        }, 1000);

    },
    
    countMinutes: function () {

        stopwatch.minutesIntervalId = setInterval(function () {
            stopwatch.minutes += 1;
            if(stopwatch.minutes == 60) {
                stopwatch.minutes = 0;
            }
            if (stopwatch.minutes < 10) {
                document.getElementById('nummin').innerText = "0" + stopwatch.minutes;
            } else {
                document.getElementById('nummin').innerText = stopwatch.minutes;
            }
        }, 60000);

    },

    countHours: function () {

        stopwatch.hoursIntervalId = setInterval(function () {
            console.log('hours number hours increase');
            stopwatch.hours += 1;
            if (stopwatch.hours == 60) {
                stopwatch.hours = 0;
            }
            if (stopwatch.hours < 10) {
                document.getElementById('numhour').innerText = "0" + stopwatch.hours;
            } else {
                document.getElementById('numhour').innerText = stopwatch.hours;
            }
        }, 3600000);

    },

    start: function () {

        if (stopwatch.isTimerStarted == false) {
            stopwatch.countSeconds();
            stopwatch.countMinutes();
            stopwatch.countHours();
            stopwatch.isTimerStarted = true;
        }
    },

    pause: function () {

        clearInterval(stopwatch.secondsIntervalId);
        clearInterval(stopwatch.minutesIntervalId);
        clearInterval(stopwatch.hoursIntervalId);
        stopwatch.isTimerStarted = false;

    },

    reset: function () {

        clearInterval(stopwatch.secondsIntervalId);
        clearInterval(stopwatch.minutesIntervalId);
        clearInterval(stopwatch.hoursIntervalId);
        stopwatch.seconds = 0;
        stopwatch.minutes = 0;
        stopwatch.hours = 0;
        document.getElementById('numsec').innerText = '00';
        document.getElementById('nummin').innerText = '00';
        document.getElementById('numhour').innerText = '00';
        stopwatch.isTimerStarted = false;
        //alternative location.reload();

    },

}

startButton.addEventListener('click', stopwatch.start);
pauseButton.addEventListener('click', stopwatch.pause);
resetButton.addEventListener('click', stopwatch.reset);