// LOADER - 5. ANIMATION
gsap.to("#spinner", {
  rotation: 360,
  duration: 1,
  repeat: -1,
  ease: "none"
});

window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.set("#loader", { display: "none" }); 
      gsap.set("#main-content", { visibility: "visible" });
      document.body.style.overflow = "auto"; 
    }
  });
});

// MOBILE MENU VANILLAJS - NOT COMPARED
const toggleBtn = document.querySelector(".toggle-button");
      const dropdown = document.querySelector(".dropdown-menu");
      const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

      toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
      });

      dropdownLinks.forEach((link) => {
        link.addEventListener("click", () => {
          dropdown.classList.add("hidden");
        });
      });

// YEAR OF WORK
      document.addEventListener('DOMContentLoaded', () => {
        const startYear = 2016;
        const currentYear = new Date().getFullYear();
        const years = currentYear - startYear; // 2026 = 10

        const pocetEl = document.querySelector('.rok-pocet');
        if (pocetEl) {
          pocetEl.textContent = years; // Iba zobrazí 10
        }
      });

// HERO TEXT - 1. ANIMATION
 const heroElements = document.querySelectorAll(".hero-text");
        // h1
        gsap.from(heroElements[0], { opacity: 0, y: 16, duration: 1, delay: 0 });
        // h2
        gsap.from(heroElements[1], { opacity: 0, y: 16, duration: 1, delay: 0.6 });
        // p
        gsap.from(heroElements[2], { opacity: 0, y: 16, duration: 1, delay: 0.8 });
        // tlačidlá
        gsap.from(heroElements[3], { opacity: 0, y: 16, duration: 1, delay: 1.0 });

// ABOUT ANIMATION
 document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        const revealEls = document.querySelectorAll(".about-scroll");

        gsap.set(revealEls, { opacity: 0, y: 20 });

        revealEls.forEach(el => {
          gsap.to(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",  
              end: "bottom 10%",   
              toggleActions: "play reverse play reverse", 
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power1.out",
          });
        });
      });
// SERVICES GHANGE PHOTOS
gsap.registerPlugin(ScrollTrigger);

const pictures = document.querySelectorAll('picture[data-img]');
const sections = document.querySelectorAll('[data-section]');

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => showImage(i + 1),
    onEnterBack: () => showImage(i + 1),
  });
});

function showImage(num) {
  pictures.forEach(pic => {
    if (pic.dataset.img == num) {
      gsap.to(pic, { opacity: 1, duration: 0.7, ease: "power2.out", zIndex: 50 });
    } else {
      gsap.to(pic, { opacity: 0, duration: 0.7, ease: "power2.out", zIndex: 10 });
    }
  });
}
//PRICES - 2. ANIMATION
 let isAnimating = false;

    document.querySelectorAll('#s, #m, #l, #xl, #xxl').forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        if (this.checked && !isAnimating) {
          isAnimating = true;
          gsap.set('.panel', { scale: 0.75 });  // Vždy reset!

          gsap.to('.panel', {
            scale: 1,
            duration: 1,
            ease: "power2.out",  // Jednoduchý easing (alebo [0.25,0.46,0.45,0.94])
            onComplete: () => { isAnimating = false; }
          });
        }
      });
    });

//AUTOMATIC GALLERY IMAGES
(() => {
        const firstSlide = document.querySelector('.slide');
        const numbers = [3, 4, 5, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

        numbers.forEach(num => {
          const newSlide = firstSlide.cloneNode(true);
          newSlide.querySelectorAll('[srcset*="2"], img[src*="2"]').forEach(el => {
            el.srcset = el.srcset.replace(/2(-mobile)?(\.webp|\.jpg)/g, num + '$1$2');
            if (el.tagName === 'IMG') el.src = `./images/gallery/${num}.jpg`;
            el.alt = `Psí salón ${num}`;
          });
          firstSlide.after(newSlide);
        });
      })();

// INFINITE GALLERY - 3. ANIMATION
const track = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide img');

const scrollTween = gsap.to(track, {
  x: "-50%", 
  duration: 120,
  ease: "linear",
  repeat: -1
});

track.addEventListener('mouseenter', () => scrollTween.pause());
track.addEventListener('mouseleave', () => scrollTween.resume());

slides.forEach(img => {
  img.addEventListener('mouseenter', () => {
    gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.out" });
  });
  img.addEventListener('mouseleave', () => {
    gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
  });
});

// HOVER
document.addEventListener('DOMContentLoaded', () => {
  function setupHover(selector, enterProps, leaveProps) {
    document.querySelectorAll(selector).forEach(el => {
      gsap.set(el, { clearProps: "all" });
      
      el.addEventListener('mouseenter', () => {
        gsap.to(el, { 
          ...enterProps, 
          duration: 0.5, 
          ease: "power2.out" 
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { 
          ...leaveProps, 
          duration: 0.5, 
          ease: "power2.out" 
        });
      });
    });
  }

  // CLOSE-HOVER
  setupHover('.close-hover', 
    { color: '#ef4444' }, 
    { color: '' }
  );
  // HERO-ICON-HOVER
  setupHover('.hero-icon-hover', 
    { scale: 1.1 }, 
    { scale: 1 }
  );
  // NAV-HOVER
  setupHover('.nav-hover', 
    { color: '#f472b6' }, 
    { color: '' }
  );
  // PAW-HOVER
  setupHover('.paw-hover', 
    { scale: 1.25, cursor: 'pointer' }, 
    { scale: 1 }
  );
  // FOOTER-ICON-HOVER
  setupHover('.footer-icon-hover', 
    { 
      backgroundColor: 'rgba(236,72,153,0.8)',
      borderColor: 'rgba(255,255,255,0.5)',
      color: 'rgba(255,255,255,0.9)',
      scale: 1.1 
    }, 
    { 
      backgroundColor: '', 
      borderColor: '', 
      color: '', 
      scale: 1 
    }
  );
  // PHONE-CONTACT-HOVER
  setupHover('.phone-contact-hover', 
    { color: '#3b82f6' }, 
    { color: '' }
  );
});

