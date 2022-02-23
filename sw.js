let startButton = document.getElementById('btn1');
let pauseButton = document.getElementById('btn2');
let resetButton = document.getElementById('btn3');

//Start Button Listener
startButton.addEventListener('click', function(){
        countSeconds(),
        countMinutes(), 
        countHours()
});
//Pause Button Listener
pauseButton.addEventListener('click', function(){
    pauseTimer()
});
//Reset Button Listener
resetButton.addEventListener('click', function(){
    resetTimer()
});

// Count Seconds Function
function countSeconds(){
    var secondsTime = 0;
    var countSeconds = setInterval(function(){
        secondsTime++;
        if(secondsTime == 60){
            secondsTime = 0;
        }
        if(secondsTime < 10){
            document.getElementById('numsec').innerText = "0" + secondsTime;
        } else {
            document.getElementById('numsec').innerText = secondsTime;
        }
    }, 1000);
};
//Count Minutes Function
function countMinutes(){
    var MinutesTime = 0;
    var countMinutes = setInterval(function(){
        MinutesTime++;
        if(MinutesTime == 60){
            minutesTime = 0;
        }
        if(MinutesTime < 10){
            document.getElementById('nummin').innerText =  "0" + MinutesTime;
        }
        else{
            document.getElementById('nummin').innerText = MinutesTime;
        }
    }, 60000);
};
//Count Hours Function
function countHours(){
    var HoursTime = 0;
    var countHours = setInterval(function(){
        HoursTime++;
        if(HoursTime < 10){
            document.getElementById('numhour').innerText =  "0" + HoursTime;
        }
        else{
            document.getElementById('numhour').innerText = HoursTime;
        }
        document.getElementById('numhour').innerText = HoursTime;
    }, 3600000);
};
//Pause Timer Function
function pauseTimer(){
};
//Reset Timer Function
function resetTimer(){
   location.reload();
};


