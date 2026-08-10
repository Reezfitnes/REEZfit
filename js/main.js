// REEZ FITNESS CENTER — shared site behavior
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Sticky header on scroll ---- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 30) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      links.classList.toggle('is-open');
      document.body.style.overflow = links.classList.contains('is-open') ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('is-open');
        links.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Count-up stats ---- */
  var counters = document.querySelectorAll('[data-count]');
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && counters.length) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterIO.observe(el); });
  }

  /* ---- Class filter tabs (classes.html) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var classCards = document.querySelectorAll('[data-category]');
  if (filterBtns.length && classCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var filter = btn.getAttribute('data-filter');
        classCards.forEach(function (card) {
          var show = filter === 'all' || card.getAttribute('data-category') === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---- Contact form -> opens WhatsApp with a pre-filled message ---- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var name = form.querySelector('#name').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var email = form.querySelector('#email').value.trim();
      var interest = form.querySelector('#interest').value;
      var message = form.querySelector('#message').value.trim();

      var text = "Hi REEZ Fitness Center, I'd like to get in touch.\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Interested in: " + interest + "\n" +
        "Message: " + message;

      var waUrl = "https://wa.me/97332299844?text=" + encodeURIComponent(text);

      if (status) {
        status.textContent = "Opening WhatsApp with your message ready to send...";
        status.classList.add('is-visible', 'ok');
      }

      window.open(waUrl, '_blank');
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
