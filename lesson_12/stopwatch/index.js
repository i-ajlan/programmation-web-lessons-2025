timeDisplayElem = document.querySelector('.time-display')
pauseBtn = document.querySelector('.btn-pause')
startBtn = document.querySelector('.btn-start')
resetBtn = document.querySelector('.btn-reset')

let centisec = 0;
let sec = 0;
let min = 0;

let centisecFormatted;
let secFormatted;
let minFormatted;

let intervalId = null;
// if(centisec<10 ){
//     centisecFormatted = `0${centisec}`
// } else{
//     centisecFormatted = `${centisec}`
// }

function renderTime(){
    centisecFormatted = centisec<10 ? `0${centisec}` : `${centisec}`
    secFormatted = sec<10 ? `0${sec}` : `${sec}`
    minFormatted = min<10 ? `0${min}` : `${min}`

    timeDisplayElem.innerText = `${minFormatted} : ${secFormatted} : ${centisecFormatted}`
}



function startStopWatch(){
    centisec +=1;
    if(centisec===100){
        centisec = 0;
        sec += 1;
        if(sec === 60){
            sec=0;
            min += 1;
        }
    }
    renderTime()
}

function pauseStopWatch(){
    clearInterval(intervalId)
    intervalId = null
}
startBtn.addEventListener('click', function(){
    if(intervalId == null){
        intervalId = setInterval(startStopWatch, 10)
    }
})

pauseBtn.addEventListener('click', function(){
    if(intervalId != null){
        pauseStopWatch()
    }
})

resetBtn.addEventListener('click', function(){
    if(intervalId != null){
        pauseStopWatch()
    }
    centisec = 0;
    sec = 0;
    min = 0;
    renderTime();
})
