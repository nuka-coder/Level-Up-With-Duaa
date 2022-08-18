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
})
