// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentIndex = 0;
  
  // Initialize the first testimonial
  cards[0].classList.add('active');
  
  function showTestimonial(index) {
      // Remove all classes
      cards.forEach(card => {
          card.classList.remove('active', 'prev');
      });
      
      dots.forEach(dot => {
          dot.classList.remove('active');
      });
      
      // Add appropriate classes
      cards[index].classList.add('active');
      dots[index].classList.add('active');
      
      // Add prev class to previous card
      const prevIndex = index === 0 ? cards.length - 1 : index - 1;
      cards[prevIndex].classList.add('prev');
  }
  
  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % cards.length;
      showTestimonial(currentIndex);
  }
  
  function prevTestimonial() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showTestimonial(currentIndex);
  }
  
  // Event listeners
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);
  
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          showTestimonial(currentIndex);
      });
  });
  
  // Auto rotate testimonials
  let interval = setInterval(nextTestimonial, 7000);
  
  // Pause rotation when hovering
  const testimonialsContainer = document.querySelector('.testimonials-container');
  testimonialsContainer.addEventListener('mouseenter', () => {
      clearInterval(interval);
  });
  
  testimonialsContainer.addEventListener('mouseleave', () => {
      interval = setInterval(nextTestimonial, 7000);
  });
});