const hamList=document.querySelector(".ham-list")
const hamSvg=document.querySelector(".hamSvg")
const moboNav=document.querySelector(".moboNav")
const heroSectn=document.querySelector(".heroSectn")
const cancel=document.querySelector("#cancelBtn")



hamSvg.addEventListener(("click"),function(e){
    heroSectn.classList.add("inactive")
    moboNav.classList.add("inactive")
    hamList.classList.add("active")
})
cancel.addEventListener(("click"),function(e){
    hamList.classList.remove("active")
    heroSectn.classList.toggle("inactive")
    moboNav.classList.toggle("inactive")
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})


document.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(e.key==="ArrowRight"){
        console.log('Moving to the right')
    }else if(e.key==="ArrowLeft"){
        console.log("Moving Left")
    }
})

