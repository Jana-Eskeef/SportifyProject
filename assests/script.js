$(document).ready(function() {
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-link");
const signn = document.querySelector(".signn");
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
