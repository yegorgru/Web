var slideIndex = 0;
document.onload = showSlides(slideIndex);

document.getElementById('first-dot').onclick = function (){
	currentSlide(1);
}

document.getElementById('second-dot').onclick = function (){
	currentSlide(2);
}

document.getElementById('third-dot').onclick = function (){
	currentSlide(3);
}

document.getElementById('fourth-dot').onclick = function (){
	currentSlide(4);
}

document.getElementById('prev').onclick = function (){
	plusSlides(-1);
}

document.getElementById('next').onclick = function (){
	plusSlides(1);
}

function plusSlides(n) {
  showSingleSlide(slideIndex += n);
}

function currentSlide(n) {
  showSingleSlide(slideIndex = n);
}

function showSingleSlide(n) {
	var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
    }
	if (slideIndex == 0) {slideIndex = 4}
  	if (slideIndex > slides.length) {slideIndex = 1}
  	slides[slideIndex-1].style.display = "block";
}

function showSlides(n) {
	  var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
    }
  	slideIndex++;
  	if (slideIndex > slides.length) {slideIndex = 1}
  	slides[slideIndex-1].style.display = "block";
  	setTimeout(showSlides, 4000);
}

document.getElementById('feedback').onclick = function (){
    document.getElementById('form-wrapper').style.visibility = "visible";
    document.getElementById('form-wrapper').style.opacity = 1;
    document.getElementById('feedback').style.visibility = "hidden";
}

document.getElementById('feedback-close').onclick = function (){
    document.getElementById('form-wrapper').style.visibility = "hidden";
    document.getElementById('form-wrapper').style.opacity = 0;
    document.getElementById('feedback').style.visibility = "visible";
}