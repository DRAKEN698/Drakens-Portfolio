document.addEventListener("DOMContentLoaded", () => {
  const ring = document.getElementById("ring");
  const btnScroll = document.getElementById("btn-scroll");
  const btnAnimate = document.getElementById("btn-animate");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  // Top-Left Header Elements
  const topThumb = document.getElementById("dynamic-thumb");
  const topTitle = document.getElementById("dynamic-title");

  // Configuration
  const numCards = 48; // Total cards
  const cardWidth = 140;
  const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / numCards)) + 60;

  // ==========================================
  // YAHAN APNI IMAGES AUR TITLES DAALO 👇
  // ==========================================
  const myGalleryData = [
    { src: "MANIPULATION image/Toxic.webp", title: "Toxic" },
    { src: "MANIPULATION image/Devil.webp", title: "Devil" },
    {
      src: "MANIPULATION image/attack on titan.webp",
      title: "Attack on Titan",
    },
    { src: "MANIPULATION image/DOOM.webp", title: "DooM" },
    { src: "MANIPULATION image/HOF.webp", title: "HoF" },
    { src: "MANIPULATION image/Resident evil.webp", title: "Resident Evil" },
    { src: "MANIPULATION image/Ghost Rider.webp", title: "Ghost Rider" },
    { src: "MANIPULATION image/Naruto.webp", title: "Naruto" },
    { src: "MANIPULATION image/Mario.webp", title: "Mario" },
    { src: "MANIPULATION image/Untitled-3.webp", title: "Unownable" },
    { src: "MANIPULATION image/Space.webp", title: "Space" },
    { src: "MANIPULATION image/smile.webp", title: "Smile" },
    { src: "MANIPULATION image/Robin.webp", title: "Robin" },
    { src: "MANIPULATION image/GAMBIT.webp", title: "GAMBIT" },
    { src: "MANIPULATION image/CAPTAIN.webp", title: "CAPTAIN" },
    { src: "MANIPULATION image/Sang Chi.webp", title: "Sang Chi" },
    { src: "MANIPULATION image/Iceman.webp", title: "Iceman" },
    { src: "MANIPULATION image/Akuma.webp", title: "Akuma" },
    { src: "MANIPULATION image/Kraven.webp", title: "Kraven" },
    { src: "MANIPULATION image/Pirate.webp", title: "Pirate" },
    { src: "MANIPULATION image/AQ Man.webp", title: "AQ Man" },
    // Aap yahan aur bhi add kar sakte ho same format me
  ];

  // Page load hote hi pehli image header me set kar do
  if (myGalleryData.length > 0) {
    topThumb.src = myGalleryData[0].src;
    topTitle.textContent = myGalleryData[0].title;
  }

  let isDragging = false;
  let dragDistance = 0;

  // 1. Generate the 3D Cards
  for (let i = 0; i < numCards; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "card-wrapper";

    const angle = (360 / numCards) * i;
    wrapper.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

    const card = document.createElement("div");
    card.className = "card";

    // Array me se data nikalo (humne '%' hata diya taaki repeat na ho)
    const itemData = myGalleryData[i];

    if (itemData) {
      // Agar array mein image hai toh usko dikhao
      card.innerHTML = `<img src="${itemData.src}" alt="${itemData.title}" draggable="false" loading="lazy">`;

      // HOVER EFFECT (Top Left Change Hoga)
      card.addEventListener("mouseenter", () => {
        topThumb.src = itemData.src;
        topTitle.textContent = itemData.title;
      });

      // Click Interaction (Lightbox opening)
      card.addEventListener("click", (e) => {
        if (dragDistance > 5) {
          e.preventDefault();
          return;
        }
        lightboxImg.src = itemData.src;
        lightbox.classList.add("active");
      });
    } else {
      // Agar image nahi hai, toh card ko ekdum BLACK aur empty rakho
      card.innerHTML = "";
      card.classList.add("empty-card");
    }

    wrapper.appendChild(card);
    ring.appendChild(wrapper);
  }

  // 3. Close Lightbox
  const closeLightbox = () => lightbox.classList.remove("active");
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox
    .querySelector(".lightbox-bg")
    .addEventListener("click", closeLightbox);

  // 4. Animation and Scroll Variables
  let currentRotation = 0;
  let isAnimating = true;
  let scrollVelocity = 0;
  let lastX = 0;

  // GSAP Ticker
  gsap.ticker.add(() => {
    if (isAnimating && !isDragging) {
      currentRotation -= 0.15;
    } else {
      currentRotation += scrollVelocity;
      scrollVelocity *= 0.9;
    }

    ring.style.transform = `rotateY(${currentRotation}deg)`;
  });

  // Helper function
  function activateScrollMode() {
    if (!isAnimating) return;
    isAnimating = false;
    btnScroll.classList.add("active");
    btnAnimate.classList.remove("active");
  }

  // 5. Button Logic
  btnScroll.addEventListener("click", activateScrollMode);

  btnAnimate.addEventListener("click", () => {
    isAnimating = true;
    btnAnimate.classList.add("active");
    btnScroll.classList.remove("active");
  });

  // 6. Scroll Support
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault(); // YEH LINE BROWSER KO SCROLL HONE SE ROKEGI

      activateScrollMode();
      scrollVelocity -= e.deltaY * 0.015;
    },
    { passive: false },
  ); // YEH ALLOW KAREGA preventDefault KO KAAM KARNE KE LIYE

  // 7. Drag & Swipe Support
  window.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".ui-layer") || e.target.closest(".lightbox")) return;

    isDragging = true;
    dragDistance = 0;
    lastX = e.clientX;
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastX;
    dragDistance += Math.abs(deltaX);

    if (dragDistance > 5) {
      activateScrollMode();
      scrollVelocity += deltaX * 0.08;
    }

    lastX = e.clientX;
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
  });

  window.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  // 8. Intro Animation
  gsap.fromTo(
    ".card-wrapper",
    { autoAlpha: 0, scale: 0, y: 100 },
    {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.02,
      ease: "expo.out",
      delay: 0.2,
    },
  );

  gsap.from(".ui-layer > div", {
    autoAlpha: 0,
    y: 20,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    delay: 1.5,
  });
});
