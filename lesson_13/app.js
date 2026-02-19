const rightArrowList = document.querySelectorAll('.fa-arrow-right')
const leftArrowList = document.querySelectorAll('.fa-arrow-left')
const sliderList = document.querySelectorAll('.slider')

const btnAll = document.querySelector('.btn-all')
const sidebar = document.querySelector('.sidebar-nav')
const sidebar_div = document.querySelector('.sidebar-nav > div')
const btnClose = document.querySelector('.fa-xmark')





rightArrowList.forEach((rightArrow, index)=>{
    rightArrow.addEventListener('click',()=>{
        console.log("right arrow clicked");
        sliderList[index].scrollLeft+=20;    
    })
})

leftArrowList.forEach((leftArrow, index)=>{
    leftArrow.addEventListener('click',()=>{
        console.log("left arrow clicked");
        sliderList[index].scrollLeft-=20;    
    })
})


sliderList.forEach((slider, index)=>{
    slider.addEventListener('scroll',()=>{
    if(slider.scrollLeft>0){
        leftArrowList[index].style.visibility = 'visible'
    } else{
        leftArrowList[index].style.visibility = 'hidden'
    }
    })
})

btnAll.addEventListener('click', ()=>{
    sidebar.style.visibility = 'visible';
    sidebar_div.style.transform = 'translateX(0)'
})

btnClose.addEventListener('click', ()=>{
  sidebar.style.visibility = 'hidden';  
  sidebar_div.style.transform = 'translateX(-100%)'
})