const elements = document.querySelectorAll('.to-animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
        } else {
            entry.target.classList.remove('in-viewport');
        }
    });
});

elements.forEach(element => observer.observe(element));

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0:{
          items: 1
        },
        600:{
          items: 2
        },
        1000:{
          items: 3
        }
      }
    });
  });