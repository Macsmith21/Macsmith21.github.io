// Main JavaScript file for the portfolio
// Adding animation without relying on React or external packages

document.addEventListener('DOMContentLoaded', () => {
    // Header Section Animation
    const headerTitle = document.querySelector('.App-header h1');
    const headerText = document.querySelector('.App-header p');
  
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = 'translateY(-50px)';
    setTimeout(() => {
      headerTitle.style.transition = 'opacity 1s, transform 1s';
      headerTitle.style.opacity = 1;
      headerTitle.style.transform = 'translateY(0)';
    }, 100);
  
    headerText.style.opacity = 0;
    setTimeout(() => {
      headerText.style.transition = 'opacity 1.5s';
      headerText.style.opacity = 1;
    }, 500);
  
    // About Section Animation
    const aboutSection = document.querySelector('.About');
    const aboutTitle = aboutSection.querySelector('h2');
    const aboutText = aboutSection.querySelector('p');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutTitle.style.transition = 'transform 1s, opacity 1s';
          aboutTitle.style.transform = 'translateX(0)';
          aboutTitle.style.opacity = 1;
  
          aboutText.style.transition = 'transform 1s, opacity 1s';
          aboutText.style.transform = 'translateX(0)';
          aboutText.style.opacity = 1;
        }
      });
    }, { threshold: 0.5 });
  
    aboutTitle.style.transform = 'translateX(-100px)';
    aboutTitle.style.opacity = 0;
  
    aboutText.style.transform = 'translateX(100px)';
    aboutText.style.opacity = 0;
  
    observer.observe(aboutSection);
  
    // Projects Section Animation
    const projectItems = document.querySelectorAll('.Project-item');
  
    projectItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transition = 'transform 0.2s';
        item.style.transform = 'scale(1.1)';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });
    });
  
    // Contact Form Animation
    const contactSection = document.querySelector('.Contact');
    const contactForm = contactSection.querySelector('.Contact-form');
  
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactForm.style.transition = 'opacity 1.5s';
          contactForm.style.opacity = 1;
        }
      });
    }, { threshold: 0.5 });
  
    contactForm.style.opacity = 0;
    contactObserver.observe(contactSection);
  });
  