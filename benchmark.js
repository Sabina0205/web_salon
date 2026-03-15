document.addEventListener("DOMContentLoaded", () => {
  // ===== AUTO SCROLL =====
  let scrollSpeed = 0.6;
  function autoScroll() {
    window.scrollBy(0, scrollSpeed);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      window.scrollTo(0, 0);
    }
    requestAnimationFrame(autoScroll);
  }
  autoScroll();

  // ===== HOVER SIMULÁCIA =====
  const hoverMapping = [
    { selector: '.close-hover', enter: { color: '#ef4444' }, leave: { color: '' } },
    { selector: '.hero-icon-hover', enter: { scale: 1.1 }, leave: { scale: 1 } },
    { selector: '.nav-hover', enter: { color: '#f472b6' }, leave: { color: '' } },
    { selector: '.paw-hover', enter: { scale: 1.25, cursor: 'pointer' }, leave: { scale: 1 } },
    {
      selector: '.footer-icon-hover', enter: {
        backgroundColor: 'rgba(236,72,153,0.8)',
        borderColor: 'rgba(255,255,255,0.5)',
        color: 'rgba(255,255,255,0.9)',
        scale: 1.1
      }, leave: { backgroundColor: '', borderColor: '', color: '', scale: 1 }
    },
    { selector: '.phone-contact-hover', enter: { color: '#3b82f6' }, leave: { color: '' } }
  ];
  // ===== GALLERY HOVER SIMULÁCIA =====
  const galleryTrack = document.querySelector('.slide-track');
  const galleryImages = document.querySelectorAll('.slide img');

  function triggerGalleryHover() {
    if (!galleryTrack || galleryImages.length === 0) return;

    galleryTrack.dispatchEvent(new Event('mouseenter'));

    galleryImages.forEach((img, i) => {
      setTimeout(() => {
        img.dispatchEvent(new Event('mouseenter'));
        setTimeout(() => img.dispatchEvent(new Event('mouseleave')), 800);
      }, i * 300);
    });

    setTimeout(() => {
      galleryTrack.dispatchEvent(new Event('mouseleave'));
    }, galleryImages.length * 300 + 800);
  }

  setInterval(triggerGalleryHover, 10000);

  function triggerHover(el) {
    if (!el) return;

    // TAILWIND - TEMPORARY HOVER
    el.classList.add('hover-temp');
    setTimeout(() => el.classList.remove('hover-temp'), 800);

    // JS, GSAP SIMULATION HOVER
    el.dispatchEvent(new Event("mouseenter"));
    setTimeout(() => el.dispatchEvent(new Event("mouseleave")), 800);
  }

  setInterval(() => {
    hoverMapping.forEach(h => {
      const els = document.querySelectorAll(h.selector);
      els.forEach(el => triggerHover(el));
    });
  }, 4000);

  // ===== MODAL =====
  const pawLabels = document.querySelectorAll(".paw");
  let modalIndex = 0;
  let openCount = 0;
  const maxOpen = 5;

  const modalInterval = setInterval(() => {
    if (openCount >= maxOpen) {
      clearInterval(modalInterval);
      return;
    }

    if (pawLabels.length === 0) return;

    const label = pawLabels[modalIndex];
    if (!label) return;

    label.click();
    openCount++;

    const closeLabel = document.querySelector('label[for="close"]');
    if (closeLabel) setTimeout(() => closeLabel.click(), 1000);

    modalIndex = (modalIndex + 1) % pawLabels.length;

  }, 3000);
});