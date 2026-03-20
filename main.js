 // GLOBAL FLAG FOR REDUCED MOTION
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 // LOADER - 5. ANIMATION
 window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (!prefersReducedMotion) {
        loader.classList.add("opacity-0");
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    } else {
        loader.style.display = "none";
    }
});

// DROPDOWN MENU
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

// SERVICES PHOTO CHANGE
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("[data-section]");
    const pictures = document.querySelectorAll("picture[data-img]");

    function switchImage() {
        let current = 1;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                current = section.dataset.section;
            }
        });

        pictures.forEach(pic => {
            if (prefersReducedMotion) {
                pic.classList.remove("opacity-0");
            } else {
                if (pic.dataset.img === current) {
                    pic.classList.remove("opacity-0");
                    pic.classList.add("opacity-100");
                } else {
                    pic.classList.remove("opacity-100");
                    pic.classList.add("opacity-0");
                }
            }
        });
    }

    if (!prefersReducedMotion) {
        window.addEventListener("scroll", switchImage);
    }
    switchImage();
});

 // AUTOMATIC GENERATING GALLERY
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
