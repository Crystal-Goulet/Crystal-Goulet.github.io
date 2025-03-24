
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
  
    // Fade-in scroll animation
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => appearOnScroll.observe(fader));
  
    // Dark Mode Toggle
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
      });
      
  });
  