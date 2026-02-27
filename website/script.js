/* ═══════════════════════════════════════════════════════════
   HAPPY TREE GUYS — Interactive Script
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── NAV SCROLL EFFECT ───
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ─── MOBILE MENU ───
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('nav__links--open');
      // Animate hamburger
      const spans = hamburger.querySelectorAll('span');
      hamburger.classList.toggle('is-open');
      if (hamburger.classList.contains('is-open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        hamburger.classList.remove('is-open');
        var spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ─── BEFORE / AFTER CAROUSEL ───
  var carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    var carouselSlides = carousel.querySelectorAll('.ba-carousel__slide');
    var carouselDots = carousel.querySelectorAll('.ba-carousel__dot');
    var prevBtn = carousel.querySelector('[data-carousel-prev]');
    var nextBtn = carousel.querySelector('[data-carousel-next]');
    var currentSlide = 0;
    var totalSlides = carouselSlides.length;
    var autoPlayTimer = null;

    function goToSlide(index) {
      // Wrap around
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      carouselSlides[currentSlide].classList.remove('ba-carousel__slide--active');
      carouselDots[currentSlide].classList.remove('ba-carousel__dot--active');

      currentSlide = index;

      carouselSlides[currentSlide].classList.add('ba-carousel__slide--active');
      carouselDots[currentSlide].classList.add('ba-carousel__dot--active');
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 6000);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    prevBtn.addEventListener('click', function () {
      goToSlide(currentSlide - 1);
      startAutoPlay();
    });

    nextBtn.addEventListener('click', function () {
      goToSlide(currentSlide + 1);
      startAutoPlay();
    });

    carouselDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goToSlide(parseInt(dot.getAttribute('data-dot'), 10));
        startAutoPlay();
      });
    });

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSlide(currentSlide + 1);
        } else {
          goToSlide(currentSlide - 1);
        }
        startAutoPlay();
      }
    }, { passive: true });

    startAutoPlay();
  }

  // ─── COUNTER ANIMATION ───
  function animateCounters() {
    var counters = document.querySelectorAll('.proof-bar__number');

    counters.forEach(function (counter) {
      if (counter.dataset.animated) return;

      var target = parseFloat(counter.getAttribute('data-count'));
      var isDecimal = target % 1 !== 0;
      var duration = 2000;
      var startTime = null;

      function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var easedProgress = easeOutExpo(progress);
        var current = easedProgress * target;

        if (isDecimal) {
          counter.textContent = current.toFixed(1);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          if (isDecimal) {
            counter.textContent = target.toFixed(1);
          } else {
            counter.textContent = target.toLocaleString();
          }
        }
      }

      counter.dataset.animated = 'true';
      requestAnimationFrame(step);
    });
  }

  // ─── SCROLL ANIMATION (Simple AOS replacement) ───
  function handleScrollAnimations() {
    var elements = document.querySelectorAll('[data-aos]');
    var proofBar = document.querySelector('.proof-bar');

    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);

      if (rect.top < window.innerHeight * 0.85) {
        setTimeout(function () {
          el.classList.add('aos-animate');
        }, delay);
      }
    });

    // Counter animation trigger
    if (proofBar) {
      var rect = proofBar.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        animateCounters();
      }
    }
  }

  window.addEventListener('scroll', handleScrollAnimations, { passive: true });
  // Run once on load
  setTimeout(handleScrollAnimations, 200);

  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ─── FAQ ACCORDION (only one open at a time) ───
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });

  // ─── GOOGLE ADS-STYLE HERO TEXT ROTATOR ───
  var ghero = document.querySelector('.ghero');
  var gheroRotator = document.getElementById('gheroRotator');
  if (ghero && gheroRotator) {
    var gheroSlides = gheroRotator.querySelectorAll('.ghero__slide');
    var gheroCircleImgs = document.querySelectorAll('.ghero__circle-img');
    var gheroCurrentSlide = 0;
    var gheroTotalSlides = gheroSlides.length;

    function gheroGoTo(index) {
      // Remove active from current
      gheroSlides[gheroCurrentSlide].classList.remove('ghero__slide--active');
      if (gheroCircleImgs[gheroCurrentSlide]) {
        gheroCircleImgs[gheroCurrentSlide].classList.remove('ghero__circle-img--active');
      }

      gheroCurrentSlide = index;
      if (gheroCurrentSlide >= gheroTotalSlides) gheroCurrentSlide = 0;

      // Add active to new
      var activeSlide = gheroSlides[gheroCurrentSlide];
      activeSlide.classList.add('ghero__slide--active');
      if (gheroCircleImgs[gheroCurrentSlide]) {
        gheroCircleImgs[gheroCurrentSlide].classList.add('ghero__circle-img--active');
      }

      // Update theme color on the section
      var theme = activeSlide.getAttribute('data-bg');
      ghero.setAttribute('data-theme', theme);
    }

    // Set initial theme
    ghero.setAttribute('data-theme', gheroSlides[0].getAttribute('data-bg'));

    // Auto-rotate every 3 seconds
    setInterval(function () {
      gheroGoTo(gheroCurrentSlide + 1);
    }, 3000);
  }

})();
