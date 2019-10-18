window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#Home").offset().top
    }, 100);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#About").offset().top
    }, 1000);
});

$("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#Portfolio").offset().top
    }, 2000);
});