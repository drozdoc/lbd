// Mobile Toggle
var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
var mobileNav = document.querySelector('#home');

document.addEventListener(
  'click',
  function(event) {
    if (event.target.classList.contains('mobile-nav-toggle')) {
      mobileNav.classList.toggle('mobile-nav-open');
    }
    if (event.target.classList.contains('mobile-nav-link')) {
      mobileNav.classList.remove('mobile-nav-open');
    }
  },
  false
);

// Scroll customization
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
  speedAsDuration: true,
  easing: 'easeInOutCubic',
  header: '[data-scroll-header]'
});

// Scroll to active links
gumshoe.init();

// Lazy Load
var myLazyLoad = new LazyLoad({
  elements_selector: '.lazy'
});

// Date
window.onload = function() {
  var date = new Date().getFullYear();
  document.getElementById('year').innerHTML = date;
};

// On scroll animations
var easeBoxes = [];

document.querySelectorAll('.animate-up').forEach((elem, i) => {
  easeBoxes.push(
    basicScroll.create({
      elem: elem,
      from: 'top-bottom',
      to: 'middle-bottom',
      direct: true,
      props: {
        '--ty': {
          from: '200px',
          to: '0'
        },
        '--o': {
          from: 0.01,
          to: 0.99
        }
      }
    })
  );
});

easeBoxes.forEach(easeBox => easeBox.start());

// Quote Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('testimonial-quote');
  var dots = document.getElementsByClassName('testimonial-quote-dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('is-visible');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].classList.add('is-visible');
  dots[slideIndex - 1].className += ' active';
}
