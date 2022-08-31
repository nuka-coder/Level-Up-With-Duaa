// Events Navigation Button

$("#events-btn").hover(function() {
  $("#events-icon").fadeToggle();
});

$("#events-btn").hover(function() {
  $(this).css("background-color", "#A37060");
}, function() {
  $(this).css("background-color", "#D5937D");
});

// Services Navigation Button

$("#services-btn").hover(function() {
  $("#services-icon").fadeToggle();
});

$("#services-btn").hover(function() {
  $(this).css("background-color", "#656B51");
}, function() {
  $(this).css("background-color", "#949D77");
});

// Services Navigation Button

$("#about-btn").hover(function() {
  $("#about-icon").fadeToggle();
});

$("#about-btn").hover(function() {
  $(this).css("background-color", "#9e742c");
}, function() {
  $(this).css("background-color", "#D29E3B");
});


// MOBILE NAVIGATION

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function revealNavigation() {
//   var x = document.getElementById("mobileLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

$(".icon").click(function(){
  var menu = $("#mobileLinks");
menu.slideToggle();
$(".homepage-landing-section").css("margin-top", "0");
})

// Testimonials section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
