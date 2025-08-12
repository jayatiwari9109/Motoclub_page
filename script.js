// Select elements
const cards = document.querySelectorAll('.testimonial-card');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let current = 0;
let interval = null;

// Show the current testimonial
function showCard(index) {
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transition = 'opacity 1s ease-in-out';
    card.style.position = 'absolute';
    card.style.zIndex = '-1';
  });

  cards[index].style.opacity = '1';
  cards[index].style.zIndex = '1';
  cards[index].style.position = 'relative';
}

// Show next card
function nextCard() {
  current = (current + 1) % cards.length;
  showCard(current);
}

// Show previous card
function prevCard() {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
}

// Auto-slide every 5 seconds
function startAutoSlide() {
  interval = setInterval(nextCard, 5000);
}

// Stop auto-slide on hover (optional feature)
function stopAutoSlide() {
  clearInterval(interval);
}

// Event listeners
rightArrow.addEventListener('click', nextCard);
leftArrow.addEventListener('click', prevCard);

// Optional: stop auto-slide when mouse enters
document.querySelector('.testimonial-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.testimonial-container').addEventListener('mouseleave', startAutoSlide);

// Initialize
showCard(current);
startAutoSlide();
