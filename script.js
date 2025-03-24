
document.addEventListener("DOMContentLoaded", function () {
    // Scroll animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));
  
    // Dark Mode Toggle
    const toggle = document.getElementById("theme-toggle");
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  