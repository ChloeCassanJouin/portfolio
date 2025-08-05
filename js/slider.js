
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      slide.style.display = i === index ? 'flex' : 'none';
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let index = (currentSlide + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    let index = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      let index = parseInt(dot.getAttribute('data-slide'));
      showSlide(index);
    });
  });

  // Auto-slide toutes les 7 secondes
  setInterval(nextSlide, 7000);

  // Init
  showSlide(0);
