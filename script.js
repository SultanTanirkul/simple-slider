
//Configs
let configs = 
{
    _interval: 5000,
    _direction: "left"
};

// DOM access variables
let slider = document.getElementById("slides");
let images = slider.children;

// Control Buttons
let nextSlide = document.getElementById("right-controller");
let prevSlide = document.getElementById("left-controller");

// Slide to be shown initially
images[0].style.display = "block";


// Variable to hold current position of the slider
let count = 0;


nextSlide.addEventListener("click", function(){
    slideRight();
    console.log("Slide Right");
    clearInterval(_cycle);

});

prevSlide.addEventListener("click", function(){
    slideLeft();
    console.log("Slide Right");
    clearInterval(_cycle);

});

function slideRight(){
    images[count].style.display = "none";
    images[count = ++count < images.length ? count : count = 0].style.display = "block"; 
}

function slideLeft(){
    images[count].style.display = "none";
    images[count = count - 1 >= 0 ? --count : count = images.length - 1].style.display = "block";
}

let showSlides = function()
{
    if(configs._direction === "right"){
        slideRight();
    }else {
        slideLeft();
    }

};
// Start Cycling/Sliding
let _cycle = setInterval(showSlides, configs._interval);

// Pause when Mouse over slider
slider.addEventListener("mouseenter", function(){
    clearInterval(_cycle);
    console.log("Mouse Enter");
});

// Run Slider when mouse is not over slider
slider.addEventListener("mouseleave", function(){
    _cycle = setInterval(showSlides, configs._interval);
    console.log("Mouse mouseleave");
});





