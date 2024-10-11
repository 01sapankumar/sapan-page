const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elemc= document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")
elemc.addEventListener("mouseenter", function(){
    fixed.style.display="block";
})
elemc.addEventListener("mouseleave", function(){
    fixed.style.display="none";
})
var a = document.querySelectorAll(".elem")
a.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        console.log(image)
        fixed.style.backgroundImage = `url(${image})`
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var load= document.querySelector("#loader")
setTimeout(function(){
    load.style.top = "-100%"
}, 4000)