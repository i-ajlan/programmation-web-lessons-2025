let hourElem = document.querySelector('.hour')
let minElem = document.querySelector('.min')
let secElem = document.querySelector('.sec')

let date = null


function updateDate(){
    date = new Date()
    
    hourElem.innerText = date.getHours()
    minElem.innerText = date.getMinutes()
    secElem.innerText = date.getSeconds()
}
updateDate()

setInterval(updateDate, 1000)
