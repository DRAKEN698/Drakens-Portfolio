/**
 * 3D Layout Switcher Logic
 * Implements mathematical layouts, virtual scroll, and GSAP interpolations.
 */

const App = {
  settings: {
    totalItems: 18,
    baseRadius: 650,
    scrollSensitivity: 0.0008,
    scrollFriction: 0.08,
    // YEH NAYI LINE ADD KAREIN (Value change karke speed control karein)
    autoScrollSpeed: 0.0001,
  },

  state: {
    currentMode: "ring", // 'ring', 'tilt', 'flat', 'gallery'
    nextMode: null,
    transitionProgress: 0,
    scrollY: 0,
    targetScrollY: 0,
    isAnimating: false,
    items: [],
  },

  DOM: {
    scene: document.getElementById("scene"),
    navBtns: document.querySelectorAll(".nav-btn"),
    counter: document.getElementById("counter"),
  },

  // Curated high-quality placeholders mimicking product/fashion shots
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", // Shoe (Product)
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80", // Graphic
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", // Headphones
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", // Watch
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80", // Bag
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80", // UI element
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80", // Glasses
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80", // Camera
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&q=80", // Object
    "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&q=80", // Sneakers
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80", // Abstract
    "https://images.unsplash.com/photo-1558098329-a11cff621064?w=600&q=80", // Perfume
    "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=600&q=80", // Tech
    "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b9?w=600&q=80", // Bottle
    "https://images.unsplash.com/photo-1621360841013-c76831f124ed?w=600&q=80", // Toy
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80", // Chair
    "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?w=600&q=80", // Laptop
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=600&q=80", // Book
  ],

  init() {
    this.generateDOM();
    this.bindEvents();
    this.setupLightbox(); // <--- YEH NAYI LINE ADD KARO
    this.resize();
    this.updateRender = this.updateRender.bind(this);
    requestAnimationFrame(this.updateRender);
  },

  generateDOM() {
    for (let i = 0; i < this.settings.totalItems; i++) {
      const wrapper = document.createElement("div");
      wrapper.className = "card-wrapper";

      const inner = document.createElement("div");
      inner.className = "card-inner";

      const img = document.createElement("img");
      img.src = this.images[i % this.images.length];
      img.className = "card-img";
      img.draggable = false;

      inner.appendChild(img);
      wrapper.appendChild(inner);
      this.DOM.scene.appendChild(wrapper);

      this.state.items.push(wrapper);
    }
  },

  bindEvents() {
    // Virtual Wheel Scroll
    window.addEventListener(
      "wheel",
      (e) => {
        // Adjust delta for different devices (mac trackpad vs mouse wheel)
        let delta = e.deltaY;
        if (e.deltaMode === 1) delta *= 30; // DOM_DELTA_LINE
        this.state.targetScrollY += delta * this.settings.scrollSensitivity;
      },
      { passive: true },
    );

    // Touch handling for mobile
    let touchStartY = 0;
    window.addEventListener(
      "touchstart",
      (e) => {
        touchStartY = e.touches[0].clientY;
      },
      { passive: true },
    );

    window.addEventListener(
      "touchmove",
      (e) => {
        const touchY = e.touches[0].clientY;
        const delta = touchStartY - touchY;
        this.state.targetScrollY += delta * this.settings.scrollSensitivity * 2;
        touchStartY = touchY;
      },
      { passive: true },
    );

    // Navigation
    this.DOM.navBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const newMode = e.target.dataset.mode;
        if (newMode === this.state.currentMode || this.state.isAnimating)
          return;

        // Update active class
        this.DOM.navBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");

        this.triggerTransition(newMode);
      });
    });

    window.addEventListener("resize", () => this.resize());
  },

  setupLightbox() {
    // Modal ka HTML create kar rahe hain JS se
    this.DOM.lightbox = document.createElement("div");
    this.DOM.lightbox.className = "lightbox";
    this.DOM.lightbox.innerHTML = `
            <div class="lightbox-close">CLOSE</div>
            <img src="" class="lightbox-img" id="lightbox-img">
        `;
    document.body.appendChild(this.DOM.lightbox);

    const lbImg = document.getElementById("lightbox-img");

    // Har card par click event lagana
    document.querySelectorAll(".card-inner").forEach((card) => {
      card.addEventListener("click", (e) => {
        const imgSrc = card.querySelector("img").src;
        lbImg.src = imgSrc; // Click ki hui image ko modal mein daalo

        // Auto-scroll (rotation) ko pause karo
        this.state.originalSpeed = this.settings.autoScrollSpeed;
        this.settings.autoScrollSpeed = 0;

        // GSAP smooth zoom animation
        gsap.to(this.DOM.lightbox, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.fromTo(
          lbImg,
          { scale: 0.7 },
          { scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        );
      });
    });

    // Modal pe click karne se wapas close ho jayega
    this.DOM.lightbox.addEventListener("click", () => {
      // Rotation wapas start karo
      this.settings.autoScrollSpeed = this.state.originalSpeed || 0.0001;

      // Modal hide animation
      gsap.to(this.DOM.lightbox, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    });
  },

  resize() {
    const w = window.innerWidth;
    // Scale radius dynamically based on screen width
    if (w > 2000) this.settings.baseRadius = 750;
    else if (w > 1400) this.settings.baseRadius = 650;
    else if (w > 1024) this.settings.baseRadius = 500;
    else if (w > 768) this.settings.baseRadius = 400;
    else this.settings.baseRadius = 250;
  },

  triggerTransition(newMode) {
    this.state.isAnimating = true;
    this.state.nextMode = newMode;

    // GSAP tween controls the mathematical interpolation progress
    gsap.to(this.state, {
      transitionProgress: 1,
      duration: 1.4,
      ease: "power3.inOut",
      onComplete: () => {
        this.state.currentMode = newMode;
        this.state.nextMode = null;
        this.state.transitionProgress = 0;
        this.state.isAnimating = false;
      },
    });
  },

  // ==========================================
  // Core Layout Math Functions
  // Each function returns {x, y, z, rx, ry, rz}
  // ==========================================

  mathRing(angle, radius) {
    return {
      // x ki value (1.7 se 1.2 kar di) -> Isse chaurai (width) kam hogi aur left/right bahar nahi jayega
      x: Math.sin(angle) * (radius * 1.0),

      // y ki value (0.8 se 0.5 kar di) -> Isse lambaai (height) kam hogi aur upar/neeche bahar nahi jayega
      y: -Math.sin(angle) * (radius * 0.5) - Math.cos(angle) * (radius * 0.15),

      // z ki value (1.2 se 0.8 kar di) -> Isse depth control hogi
      z: Math.cos(angle) * (radius * 0.8),

      rx: 0,
      ry: angle * 0.15,
      rz: 0,
    };
  },

  mathTilt(angle, baseRadius) {
    // Pura circle screen ke andar fit karne ke liye size (1.1) se ghatakar (0.75) kar diya hai
    const r = baseRadius * 0.75;

    // Plane ka tilt angle (-65 degrees)
    const tiltAngle = -65 * (Math.PI / 180);

    // Base coordinates
    const cx = Math.sin(angle) * r;
    const cy = 0;
    const cz = Math.cos(angle) * r;

    // 3D Matrix math applied for tilt
    const y = cy * Math.cos(tiltAngle) - cz * Math.sin(tiltAngle);
    const z = cy * Math.sin(tiltAngle) + cz * Math.cos(tiltAngle);

    return {
      x: cx,
      y: y,
      z: z, // Ab z-depth bhi automatically control mein rahegi
      rx: tiltAngle * -0.5,
      ry: angle,
      rz: 0,
    };
  },

  mathFlat(angle, radius) {
    // Lissajous curve for a figure-8 / lazy-S path
    return {
      x: Math.sin(angle) * (radius * 1.6), // Wide horizontal spread
      y: Math.sin(angle * 2) * (radius * 0.4), // Vertical sine wave (twice freq)
      z: Math.cos(angle) * (radius * 0.2), // Slight depth based on X pos
      rx: 0,
      ry: Math.sin(angle) * 0.2, // Very subtle turn facing the viewer
      rz: 0,
    };
  },

  mathGallery(angle, radius) {
    // Uses a massive radius to simulate a straight line while maintaining
    // continuous mathematical looping without sudden jumps.
    const bigRadius = radius * 6;

    return {
      x: Math.sin(angle) * bigRadius,
      y: 0,
      z: Math.cos(angle) * bigRadius - bigRadius, // Offset Z so front is at 0
      rx: 0,
      ry: angle * 0.15, // Slight tilt to follow the massive curve
      rz: 0,
    };
  },

  // Map string keys to math functions
  getLayoutFunc(mode) {
    switch (mode) {
      case "ring":
        return this.mathRing;
      case "tilt":
        return this.mathTilt;
      case "flat":
        return this.mathFlat;
      case "gallery":
        return this.mathGallery;
      default:
        return this.mathRing;
    }
  },

  // Linear interpolation between two layout objects
  lerpLayout(layoutA, layoutB, t) {
    return {
      x: layoutA.x + (layoutB.x - layoutA.x) * t,
      y: layoutA.y + (layoutB.y - layoutA.y) * t,
      z: layoutA.z + (layoutB.z - layoutA.z) * t,
      rx: layoutA.rx + (layoutB.rx - layoutA.rx) * t,
      ry: layoutA.ry + (layoutB.ry - layoutA.ry) * t,
      rz: layoutA.rz + (layoutB.rz - layoutA.rz) * t,
    };
  },

  updateRender() {
    // YEH NAYI LINE ADD KAREIN - Yeh har frame par loop ko aage badhayega
    this.state.targetScrollY += this.settings.autoScrollSpeed;

    // Purana code jo already aapke paas hai
    this.state.scrollY +=
      (this.state.targetScrollY - this.state.scrollY) *
      this.settings.scrollFriction;

    // ... baki loop ka pura code same rahega
    const N = this.settings.totalItems;
    let closestIndex = 0;
    let minZ = Infinity; // To find which item is front-most for the counter

    this.state.items.forEach((item, index) => {
      const normalizedIndex = index / N;

      // Core formula: item's intrinsic angle minus global scroll rotation.
      // When scrollY = 1, the entire layout has rotated one full cycle.
      const angle =
        normalizedIndex * Math.PI * 2 - this.state.scrollY * Math.PI * 2;

      const layoutFuncA = this.getLayoutFunc(this.state.currentMode);
      let pos = layoutFuncA(angle, this.settings.baseRadius);

      // If transitioning, calculate target layout and lerp between them
      if (this.state.isAnimating && this.state.nextMode) {
        const layoutFuncB = this.getLayoutFunc(this.state.nextMode);
        const posB = layoutFuncB(angle, this.settings.baseRadius);
        pos = this.lerpLayout(pos, posB, this.state.transitionProgress);
      }

      // Apply transforms (using translate3d for hardware acceleration)
      item.style.transform = `
                translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)
                rotateX(${pos.rx}rad) 
                rotateY(${pos.ry}rad) 
                rotateZ(${pos.rz}rad)
            `;

      // Calculate z-index logic and closest item for counter
      if (pos.z > minZ) {
        // item is further back, handled natively by CSS 3D context
      } else if (Math.cos(angle) > 0.9) {
        // Track item closest to camera (angle near 0, 2PI, etc)
        closestIndex = index;
      }
    });

    // Update footer counter (1-indexed)
    const displayNum = String(closestIndex + 1).padStart(2, "0");
    const totalNum = String(N).padStart(2, "0");
    this.DOM.counter.textContent = `${displayNum} — ${totalNum}`;

    requestAnimationFrame(this.updateRender);
  },
};

// Initialize App on load
window.addEventListener("DOMContentLoaded", () => App.init());
