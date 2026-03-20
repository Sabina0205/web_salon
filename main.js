// LOADER - 5. ANIMATION
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.classList.add("opacity-0");

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// MOBILE MENU
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

// HERO ANIMATION - 1.animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(16px)";

        requestAnimationFrame(() => {
            setTimeout(() => {
                el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }, index * 300);
        });
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

// ABOUT-SCROLL
document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".about-scroll");

    revealEls.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)"; // trocha väčšie posunutie pre efekt
        el.style.transition = "opacity 1s ease-out, transform 1s ease-out"; // pomalšie
    });

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Trigger až keď je element vo výške medzi 0.3 a 0.8 okna
            const visible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.3;

            if (visible) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            } else {
                el.style.opacity = 0;
                el.style.transform = "translateY(40px)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// SERVICES PHOTO CHANGE
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-section]");
  const pictures = document.querySelectorAll("picture[data-img]");

  function switchImage() {
    let current = 1; // default

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        current = section.dataset.section;
      }
    });

    pictures.forEach(pic => {
      if (pic.dataset.img === current) {
        pic.classList.remove("opacity-0");
        pic.classList.add("opacity-100");
      } else {
        pic.classList.remove("opacity-100");
        pic.classList.add("opacity-0");
      }
    });
  }

  window.addEventListener("scroll", switchImage);
  switchImage();
});

// PRICES ANIMATION - 2. ANIMATION
const panel = document.querySelector('.panel');
panel.style.transform = 'scale(0.75)';

['#s', '#m', '#l', '#xl', '#xxl'].forEach(id => {
    const checkbox = document.querySelector(id);
    checkbox.addEventListener('change', function () {
        const overlay = document.querySelector('.overlay');
        const content = document.querySelector(`.content-${this.id.slice(1)}`);

        if (this.checked) {
            panel.animate(
                [{ transform: 'scale(0.75)' }, { transform: 'scale(1)' }],
                { duration: 1000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' }
            );
        }
    });
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

// INFINITE GALLERY - 3. ANIMATION
const track = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide img');
let speed = 0.5;
let position = 0;

function animate() {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

track.addEventListener('mouseenter', () => speed = 0);
track.addEventListener('mouseleave', () => speed = 0.5);

slides.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transition = 'transform 0.5s ease-out';
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transition = 'transform 0.5s ease-out';
        img.style.transform = 'scale(1)';
    });
});

animate();

// HOVER - 4. ANIMATION
// CLOSE-HOVER
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.close-hover').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.color = '#ef4444';
        });
        el.addEventListener('mouseleave', () => {
            el.style.color = '';
        });
    });
    //HERO-ICON-HOVER
    document.querySelectorAll('.hero-icon-hover').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.1)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.color = '';
            el.style.transform = 'scale(1)';
        });
    });
    //NAV-HOVER
    document.querySelectorAll('.nav-hover').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.color = '#f472b6';
        });
        el.addEventListener('mouseleave', () => {
            el.style.color = '';
        });
    });
    //PAW-HOVER
    document.querySelectorAll('.paw-hover').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.25)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
        });
    });
    //FOOTER-ICON-HOVER
    document.querySelectorAll('.footer-icon-hover').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.backgroundColor = 'rgba(236,72,153,0.8)';
            el.style.borderColor = 'rgba(255,255,255,0.5)';
            el.style.color = 'rgba(255,255,255,0.9)';
            el.style.transform = 'scale(1.1)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.backgroundColor = '';
            el.style.borderColor = '';
            el.style.color = '';
            el.style.transform = 'scale(1)';
        });
    });
});
//PHONE-CONTACT-HOVER
document.querySelectorAll('.phone-contact-hover').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = '#3b82f6';
    });
    el.addEventListener('mouseleave', () => {
        el.style.color = '';
    });
});
