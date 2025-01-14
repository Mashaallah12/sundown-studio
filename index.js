const scroll = new LocomotiveScroll({ //this is a locomotive library code using this code we have add smooth scroll in our webpage
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function () {
   fixed.style .display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style .display = 'none'
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
    
// }) 

var elems = document.querySelectorAll(".elem")
elems.forEach((e) => {
    e.addEventListener("mouseenter",()=>{
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage =  `url(${image})`
    })
});