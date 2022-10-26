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

// FAQ Section

function revealFaq0() {
  $("#faq-answer0").slideToggle();
}
function revealFaq1() {
  $("#faq-answer1").slideToggle();
}
function revealFaq2() {
  $("#faq-answer2").slideToggle();
}
function revealFaq3() {
  $("#faq-answer3").slideToggle();
}
function revealFaq4() {
  $("#faq-answer4").slideToggle();
}

function revealFaq5() {
  $("#faq-answer5").slideToggle();
}
function revealFaq6() {
  $("#faq-answer6").slideToggle();
}
function revealFaq7() {
  $("#faq-answer7").slideToggle();
}
function revealFaq8() {
  $("#faq-answer8").slideToggle();
}
function revealFaq9() {
  $("#faq-answer9").slideToggle();
}



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
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4100); // Change image every 2 seconds
}
