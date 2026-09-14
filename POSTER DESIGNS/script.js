/**
 * Advanced Infinite Canvas & Parallax Engine
 * Recreates the exact awwwards-level feel of the reference image.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Data Structure for Gallery Items ---
  // Approximating the layout, scale, and content themes from the 2560x1440 reference.
  const canvasItems = [
    {
      src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
      x: -40,
      y: -30,
      w: 12,
      h: 15,
      depth: 0.8,
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800",
      x: -10,
      y: -45,
      w: 16,
      h: 20,
      depth: 1.1,
    },
    {
      src: "https://images.unsplash.com/photo-1544253303-34e819b16ea9?q=80&w=800",
      x: 25,
      y: -35,
      w: 12,
      h: 15,
      depth: 0.9,
    },
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
      x: -28,
      y: -10,
      w: 10,
      h: 12.5,
      depth: 1.2,
    },
    {
      src: "https://images.unsplash.com/photo-1530973428-5eb2cad62aaf?q=80&w=800",
      x: -18,
      y: 5,
      w: 8,
      h: 10,
      depth: 0.85,
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      x: -5,
      y: -5,
      w: 12,
      h: 15,
      depth: 1.05,
    },
    {
      src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800",
      x: 15,
      y: -15,
      w: 10,
      h: 12.5,
      depth: 0.95,
    },
    {
      src: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=800",
      x: 45,
      y: 0,
      w: 12,
      h: 15,
      depth: 1.3,
    },
    {
      src: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?q=80&w=800",
      x: -15,
      y: 30,
      w: 12,
      h: 15,
      depth: 1.15,
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
      x: 35,
      y: 35,
      w: 8,
      h: 10,
      depth: 0.9,
    },
    {
      src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800",
      x: 5,
      y: 20,
      w: 16,
      h: 20,
      depth: 0.7,
    },
    {
      src: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=800",
      x: -35,
      y: 15,
      w: 12,
      h: 15,
      depth: 1.4,
    },
    {
      src: "https://images.unsplash.com/photo-1532187863486-abf9db090b83?q=80&w=800",
      x: 10,
      y: 10,
      w: 6,
      h: 7.5,
      depth: 1.0,
    },
    {
      src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800",
      x: 28,
      y: 10,
      w: 10,
      h: 12.5,
      depth: 0.8,
    },

    {
      src: "images/DOOM.png",
      x: -45,
      y: -20,
      w: 12,
      h: 15,
      depth: 1.25,
    },

    // Scatter smaller particles (Also converted to 4:5)
    { src: "", x: -20, y: -25, w: 4, h: 5, depth: 1.5, color: "#ccc" },
    { src: "", x: 20, y: -5, w: 4, h: 5, depth: 0.5, color: "#e3e3e3" },
    { src: "", x: -5, y: 35, w: 6, h: 7.5, depth: 1.2, color: "#bbb" },
  ];

  const canvas = document.getElementById("canvas");
  const gridBackground = document.querySelector(".grid-background");

  // Generate DOM Elements
  canvasItems.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "gallery-item";
    // Base positioning in viewport percentage (vw/vh) for responsive aspect
    el.style.left = `${item.x}vw`;
    el.style.top = `${item.y}vw`;
    el.style.width = `${item.w}vw`;
    el.style.height = `${item.h}vw`;
    el.dataset.depth = item.depth;

    if (item.radius) el.style.borderRadius = item.radius;
    el.style.zIndex = Math.floor(item.depth * 10);

    if (item.src) {
      el.innerHTML = `
                <div class="item-inner" style="${item.radius ? `border-radius: ${item.radius};` : ""}">
                    <img src="${item.src}" alt="Gallery Image ${index}">
                </div>
            `;
    } else {
      // Empty placeholder for aesthetic layout
      el.style.background = item.color;
    }

    canvas.appendChild(el);
  });

  const items = document.querySelectorAll(".gallery-item");

  // --- 2. Custom Cursor Logic ---
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Instant dot movement
    gsap.set(cursor, { x: mouseX, y: mouseY });
  });

  // Smooth follower using requestAnimationFrame
  const renderCursor = () => {
    cursorX += (mouseX - cursorX) * 0.15; // LERP
    cursorY += (mouseY - cursorY) * 0.15;
    gsap.set(cursorFollower, { x: cursorX, y: cursorY });
    requestAnimationFrame(renderCursor);
  };
  renderCursor();

  // Hover interactions
  items.forEach((item) => {
    item.addEventListener("mouseenter", () =>
      document.body.classList.add("hover-active"),
    );
    item.addEventListener("mouseleave", () =>
      document.body.classList.remove("hover-active"),
    );
  });

  // --- 3. Cinematic Loader & Intro Animation ---
  let progress = 0;
  const counterEl = document.querySelector(".loader-counter");
  const barEl = document.querySelector(".loader-bar");

  const updateLoader = () => {
    progress += Math.random() * 2;
    if (progress > 100) progress = 100;

    counterEl.textContent = `${Math.floor(progress)}%`;
    barEl.style.width = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(revealExperience, 400);
    }
  };

  // Start loader
  requestAnimationFrame(updateLoader);

  function revealExperience() {
    const tl = gsap.timeline();

    // Hide Loader
    tl.to("#loader", {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
    })

      // Animate Grid Appearance
      .fromTo(
        ".grid-background",
        {
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.6",
      )

      // Stagger in the items with a cinematic pop
      .fromTo(
        items,
        {
          opacity: 0,
          scale: 0.5,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "back.out(1.5)",
        },
        "-=1.2",
      );
  }

  // --- 4. Infinite Canvas WebGL-Style Transform Engine ---
  // Variables for Pan and Zoom
  let state = {
    targetX: 0,
    targetY: 0,
    targetScale: 1,
    currentX: 0,
    currentY: 0,
    currentScale: 1,
    isDragging: false,
    startX: 0,
    startY: 0,
    panSensitivity: 1.5,
    zoomSensitivity: 0.001,
    minScale: 0.3,
    maxScale: 3,
    lerpFactor: 0.08,
  };

  // Parallax tracking based on mouse position relative to center
  let parallaxTargetX = 0;
  let parallaxTargetY = 0;
  let parallaxCurrentX = 0;
  let parallaxCurrentY = 0;

  // Mouse Wheel for Zoom
  window.addEventListener(
    "wheel",
    (e) => {
      // Prevent default browser scroll
      e.preventDefault();

      const zoomDelta = -e.deltaY * state.zoomSensitivity;
      state.targetScale += zoomDelta;

      // Clamp zoom
      state.targetScale = Math.max(
        state.minScale,
        Math.min(state.maxScale, state.targetScale),
      );
    },
    { passive: false },
  );

  // Drag to Pan
  window.addEventListener("mousedown", (e) => {
    state.isDragging = true;
    state.startX = e.clientX - state.targetX;
    state.startY = e.clientY - state.targetY;
    document.body.style.cursor = "grabbing";
    cursor.style.display = "none"; // hide custom cursor dot while dragging
  });

  window.addEventListener("mousemove", (e) => {
    if (state.isDragging) {
      state.targetX = e.clientX - state.startX;
      state.targetY = e.clientY - state.startY;
    } else {
      // Calculate parallax targets when not dragging
      const normX = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      parallaxTargetX = normX * 50; // Max 50px offset based on depth
      parallaxTargetY = normY * 50;
    }
  });

  window.addEventListener("mouseup", () => {
    state.isDragging = false;
    document.body.style.cursor = "none";
    cursor.style.display = "block";
  });
  window.addEventListener("mouseleave", () => (state.isDragging = false));

  // Touch Support for Mobile (Pan & basic zoom adaptation)
  let touchStartX = 0,
    touchStartY = 0;
  window.addEventListener(
    "touchstart",
    (e) => {
      state.isDragging = true;
      touchStartX = e.touches[0].clientX - state.targetX;
      touchStartY = e.touches[0].clientY - state.targetY;
    },
    { passive: false },
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (state.isDragging) {
        state.targetX = e.touches[0].clientX - touchStartX;
        state.targetY = e.touches[0].clientY - touchStartY;
      }
    },
    { passive: false },
  );

  window.addEventListener("touchend", () => (state.isDragging = false));

  // Main Engine Render Loop
  const renderCanvas = () => {
    // LERP for smooth Pan & Zoom
    state.currentX += (state.targetX - state.currentX) * state.lerpFactor;
    state.currentY += (state.targetY - state.currentY) * state.lerpFactor;
    state.currentScale +=
      (state.targetScale - state.currentScale) * (state.lerpFactor * 1.5);

    // Apply to main canvas wrapper
    canvas.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) scale(${state.currentScale})`;

    // Move grid background opposite to create vast space illusion
    gridBackground.style.transform = `translate3d(${state.currentX * 0.1}px, ${state.currentY * 0.1}px, 0) scale(${1 + (state.currentScale - 1) * 0.1})`;

    // LERP for Parallax
    parallaxCurrentX += (parallaxTargetX - parallaxCurrentX) * 0.05;
    parallaxCurrentY += (parallaxTargetY - parallaxCurrentY) * 0.05;

    // Apply Parallax to individual items based on their data-depth
    items.forEach((item) => {
      const depth = parseFloat(item.dataset.depth) || 1;
      // Using GSAP quickSetter here would be more performant, but standard style setting works well enough for < 100 items.
      // Notice we keep the original translate(-50%, -50%) for centering in the transform chain.
      const pX = parallaxCurrentX * depth;
      const pY = parallaxCurrentY * depth;
      item.style.transform = `translate(-50%, -50%) translate3d(${pX}px, ${pY}px, 0)`;
    });

    requestAnimationFrame(renderCanvas);
  };

  // Initialize Render Loop
  renderCanvas();

  // Resize handler to recenter logic if necessary
  window.addEventListener("resize", () => {
    // Recalculate viewport centers if needed
  });
});
