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
    
    margin:5,
    autoplay: true,
    autoplayTimeout:5000,
    loop:true,
    // slideSpeed : 600,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})


$("#owl-demo").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });




document.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(e.key==="ArrowRight"){
        console.log('Moving to the right')
    }else if(e.key==="ArrowLeft"){
        console.log("Moving Left")
    }
})

const products=document.querySelector(".product-items")


async function getProducts(){
const response=await fetch("https://dummyjson.com/products")
console.log(response)
if(response.status===200){
    const data=await response.json();
    console.log(data.products)

    console.log(data.products.slice(0,9))
        
    let htmlOutput="";
    data.products.slice(0,9).map((product)=>{
        htmlOutput +=`
        <div class="item-card flex-Start">
        <div class="left-in-card-item center">
            <img src="${product.thumbnail}" alt=""class="item-img bold">
        </div>
        <div class="right-in-card-item center">
            <p class="item-name">${product.title}</p>
            <div class="price-details center">
                <p class="current-price bold">Ugx<span class="curr-pric  bold">${product.price}</span> </p>
                <p class="original-price">Ugx <span>${product.discountPercentage}</span></p>
            </div>
            <div class="dicount-comment">
                <p class="comment">${product.description}</span></p>
            </div>
        </div>
    </div>`
});
products.innerHTML = htmlOutput;

}
}
getProducts();