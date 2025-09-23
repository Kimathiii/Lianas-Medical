document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const toggleButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Contact form (optional handling)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Implement your submission logic here (e.g., fetch to backend or Formspree)
      // e.preventDefault();
    });
  }

  // Cookie Consent Banner
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');

  // Check if user has already made a choice
  const cookieChoice = localStorage.getItem('cookie-consent');
  
  if (!cookieChoice) {
    // Show banner if no choice has been made
    cookieBanner.classList.remove('hidden');
  }

  // Handle cookie acceptance
  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'accepted');
      cookieBanner.classList.add('hidden');
      
      // Enable analytics or other tracking here if needed
      // For now, this is just an informative website
    });
  }

  // Handle cookie decline
  if (cookieDecline) {
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'declined');
      cookieBanner.classList.add('hidden');
      
      // Disable analytics or other tracking here if needed
    });
  }
});
