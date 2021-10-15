const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("anchor-els");
const logo = document.getElementById("logo");
const navContainer = document.getElementById("navbar-container");
const hamburgerIcon = document.getElementById("hamburger-icon");

hamburger.addEventListener("click", function () {
  navItems.classList.toggle("show");
  logo.classList.toggle("hide");
  navContainer.classList.toggle("display");
  hamburgerIcon.classList.toggle("rotate");
});

function fading() {
  $("#box1").fadeIn(100).fadeOut(100).fadeIn(100);

  setTimeout(function () {
    $("#box2").fadeIn(100).fadeOut(100).fadeIn(100);
  }, 500);

  setTimeout(function () {
    $("#box3").fadeIn(100).fadeOut(100).fadeIn(100);
  }, 1000);
}

$(".discount-button").click(function () {
  $(".discount-button").attr("disabled", "disabled");
  fading();
  let randomNum = Math.floor(Math.random() * 10);
  setTimeout(function () {
    if (randomNum <= 0 || randomNum < 3) {
      $("#box1").html(
        "<i class='mt-2 bronze-color fas fa-4x fa-award'></i><h3 class='mt-1'>Congratulations!</h3><h3>You won 10% discount.</h3><a class=' mt-1 f-m switch-a-color btn-action' href='#title-section'>Claim your reward</a>"
      );
    } else if (randomNum <= 3 || randomNum < 6) {
      $("#box2").html(
        "<i class='mt-2 silver-color fas fa-4x fa-award'></i><h3 class='mt-1'>Congratulations!</h3><h3>You won 15% discount.</h3><a class='mt-1 f-m switch-a-color btn-action' href='#title-section'>Claim your reward</a>"
      );
    } else {
      $("#box3").html(
        "<i class='mt-2 gold-color fas fa-4x fa-award'></i><h3 class='mt-1'>Congratulations!</h3><h3>You won 20% discount.</h3><a class='mt-1 f-m switch-a-color btn-action' href='#title-section'>Claim your reward</a>"
      );
    }
  }, 2000);
});
