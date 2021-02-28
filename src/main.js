import 'bootstrap';
import './styles/main.scss';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

// Add your custom JS here.
(function($) {
  $(document).ready(function(){
    var homeSlider = $('.home .hero-slider .owl-carousel');
    homeSlider.owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      autoplayHoverPause: true
    });

    var trainingCarousel = $('.reference .slider .owl-carousel');
    trainingCarousel.owlCarousel({
      items:4,
      loop: true,
      autoplay: false,
      smartSpeed: 1500,
      margin: 30,
      autoWidth: true,
      autoplayHoverPause: true
    })
    var testimonialCarousel = $('.why-batmark .testimonial-slider .owl-carousel');
    testimonialCarousel.owlCarousel({
      loop: true,
      autoplay: false,
      smartSpeed: 1500,
      margin: 30,
      autoWidth: true,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items:2,
        },
        992: {
          items:1,
        },
        1200: {
          items:2,
        }
      }
    })
    var trainingslCarousel = $('.trainings-testimonial .testimonial-slider-trainings .owl-carousel');
    trainingslCarousel.owlCarousel({
      items:2,
      loop: true,
      autoplay: false,
      smartSpeed: 1500,
      autoWidth: true,
      autoplayHoverPause: true,
      center: true,
      dots: true,
      responsive: {
        0: {
          items: 2,
          margin: 20,
        },
        578: {
          items: 2,
          margin: 30,
        },
        768: {
          items: 2,
          margin: 30,
        },
        992: {
          items: 2,
          margin: 50,
        },
        1200: {
          margin: 70,
        }
      }
    })
  });
}(jQuery));
