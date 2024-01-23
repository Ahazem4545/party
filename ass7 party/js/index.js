
$('.slider-one').slideDown(1000)
$('.slider-two').slideUp(1000)
$('.slider-three').slideUp(1000)
$('.slider-four').slideUp(1000)

$('.Singer-One').click(()=>{
    $('.slider-one').slideToggle(1000)
    $('.slider-two').slideUp(1000)
    $('.slider-three').slideUp(1000)
    $('.slider-four').slideUp(1000)
})

$('.Singer-two').click(()=>{
    $('.slider-two').slideToggle(1000)
    $('.slider-one').slideUp(1000)
    $('.slider-three').slideUp(1000)
    $('.slider-four').slideUp(1000)
})

$('.Singer-three').click(()=>{
    $('.slider-three').slideToggle(1000)
    $('.slider-two').slideUp(1000)
    $('.slider-one').slideUp(1000)
    $('.slider-four').slideUp(1000)
})

$('.Singer-four').click(()=>{
    $('.slider-four').slideToggle(1000)
    $('.slider-two').slideUp(1000)
    $('.slider-three').slideUp(1000)
    $('.slider-one').slideUp(1000)
})


let timeRemain=''

// console.log(day);
// console.log(min);
// console.log(hour);
// console.log(sec);


function joinUs(day,hour,min,sec) {
    

     timeRemain = `<div class="day border bg-black border-1 time  bg-transparent d-flex justify-content-center align-items-center">${5-day}D</div>
    <div class="hour border bg-black border-1 time  bg-transparent d-flex justify-content-center align-items-center">${hour}H</div>
    <div class="min border bg-black border-1 time  bg-transparent d-flex justify-content-center align-items-center">${min}M</div>
    <div class="sec border bg-black border-1 time  bg-transparent d-flex justify-content-center align-items-center">${sec}S</div>`
    document.querySelector('.join-us').innerHTML=timeRemain
}
setInterval(()=>{

    let d = new Date();
    let day = d.getDay()
    let hour= d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()



    joinUs(day,hour,min,sec)
},1000 )
let inputVal = document.querySelector('textarea')
inputVal.addEventListener('keyup',(e)=>{
    console.log(e);
    console.log(inputVal.value);
    let inputCount = [inputVal.value]
    inputCount += []
    console.log(inputCount.length);


$('.span-color').html(`${100-inputCount.length}`)

})

$('.span-color').html(`100`)
