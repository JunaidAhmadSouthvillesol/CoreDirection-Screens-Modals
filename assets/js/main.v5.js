(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('ri-menu-line')
    this.classList.toggle('ri-close-line')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
	
	
  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false,
  //     disable: 'mobile'
  //   })
  // });
	
    /**
   * screenshot-slider - partner with us
   */

    if (jQuery(".screenshot-slider").length > 0) {

        $('.screenshot-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: '<button class="l-16-slide-btn slick-prev focus-reset "><i class="ri-arrow-left-s-line" style="font-size: 34px;line-height: 1.3;"></i></button>',
            nextArrow: '<button class="l-16-slide-btn active slick-next focus-reset"><i class="ri-arrow-right-s-line" style="font-size: 34px;line-height: 1.3;"></i></button>',
            centerMode: true,
            centerPadding: '130px',
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            easing: 'linear',
            speed: 800,
            appendDots: ".screenshots-dots-l-16",
            responsive: [{
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 5,
                        centerPadding: '100px',

                    }
                },
                {
                    breakpoint: 1750,
                    settings: {
                        slidesToShow: 5,
                        centerPadding: '20px',

                    }
                },
                {
                    breakpoint: 1670,
                    settings: {
                        slidesToShow: 4,
                        centerPadding: '60px',

                    }
                },
                {
                    breakpoint: 1640,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '20px',

                    }
                },
                {
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '30px',

                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '10px',

                    }
                },
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '20px',

                    }
                },
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '10px',

                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '10px',

                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',

                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20px',
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20px',
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '10px',
                    }
                },
                {
                    breakpoint: 515,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        centerPadding: '0px',
                        arrows: false,
                    }
                }

            ]
        });
    }

    /*Landing L-16 slider arrow active*/

    $(document).ready(function() {
        $('.l-16-slide-btn').click(function() {
            $('.l-16-slide-btn').removeClass("active");
            $(this).addClass("active");
        });
    });

  /**
   * Partner-with-us testimonial slider
   */

    if (jQuery(".testimonial-slider-l-16").length > 0) {
        $(".testimonial-slider-l-16").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],
        });
    }	

})();


$(document).on("click touch", "#header #navbar a.nav-link", function () {
  $('.mobile-nav-toggle').addClass('ri-menu-line');
  $('.mobile-nav-toggle').removeClass('ri-close-line');
});