const slide = document.getElementById('carouselSlide');
const images = slide.querySelectorAll('img');
const dotsContainer = document.getElementById('dotsContainer');
const totalSlides = images.length;

let index = 0;

// Create Dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const updateDots = () => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

const goToSlide = (i) => {
  index = i;
  slide.style.transform = `translateX(${-index * 100}%)`;
  updateDots();
};

const nextSlide = () => {
  index = (index + 1) % totalSlides;
  goToSlide(index);
};

const prevSlide = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  goToSlide(index);
};

// Auto Slide
setInterval(nextSlide, 3000);