// Image Slider 

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0; 
let intervalId = null; // it will return an id 

// intializeSlide()     // OR Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", intializeSlider)

function intializeSlider(){  // this funtion will put at least one pic in the page
   if(slides.length > 0){ // with the if statement you can check if the slider gave images or not
        slides[slideIndex].classList.add("displaySlide");
        intervalId =  setInterval(next, 5000); // this can be use as an automatic slider to showcase something in your page
}
    
}

function showSlide(index){

if(index >= slides.length){ // this if statement will check if the last image has reached and put the 1st image if it has
    slideIndex = 0;
}else if(index < 0) {
    slideIndex = slides.length - 1;
}

    slides.forEach(slide => {
        slide.classList.remove("displaySlide") // this will remove the display property from the current silde
    });
    slides[slideIndex].classList.add("displaySlide"); // this will add display property to the slide that has been called
}

function prev(){
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}

function next(){
    slideIndex++;
    showSlide(slideIndex);
}

