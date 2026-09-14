/**
 * Data Array: Unsplash assets
 */
const imageData = [
  "/Drakens-Portfolio/Thumbnail image/1.webp",
  "/Drakens-Portfolio/Thumbnail image/2.webp",
  "/Drakens-Portfolio/Thumbnail image/3.webp",
  "/Drakens-Portfolio/Thumbnail image/4.webp",
  "/Drakens-Portfolio/Thumbnail image/5.webp",
  "/Drakens-Portfolio/Thumbnail image/6.webp",
  "/Drakens-Portfolio/Thumbnail image/7.webp",
  "/Drakens-Portfolio/Thumbnail image/8.webp",
  "/Drakens-Portfolio/Thumbnail image/9.webp",
  "/Drakens-Portfolio/Thumbnail image/10.webp",
  "/Drakens-Portfolio/Thumbnail image/11.webp",
  "/Drakens-Portfolio/Thumbnail image/12.webp",
  "/Drakens-Portfolio/Thumbnail image/13.webp",
  "/Drakens-Portfolio/Thumbnail image/14.webp",
  "/Drakens-Portfolio/Thumbnail image/15.webp",
  "/Drakens-Portfolio/Thumbnail image/16.webp",
  "/Drakens-Portfolio/Thumbnail image/17.webp",
  "/Drakens-Portfolio/Thumbnail image/18.webp"
];

// Core DOM Elements
const galleryRing = document.getElementById("gallery-ring");
const toggleBtn = document.getElementById("toggle-layout-btn");
const items = [];
const numItems = imageData.length;

// State Management
let isAnimating = false;
let expandedItem = null;
let hoveredItem = null; // Track currently hovered item
let currentRadius = 0;
let isStackedMode = false;

// Timelines & Proxies
const rotationProxy = { angle: 0 };
let mainTimeline; // Circular Timeline
const stackProxy = { progress: 0 };
let stackTimeline; // Stack Loop Timeline

/**
 * 
 * Initialization (UPDATED FOR SMOOTH LOADING)
 */
async function initGallery() {
  // Array to hold all image loading promises
  const loadPromises = imageData.map((src, index) => {
    return new Promise((resolve) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.dataset.index = index;
      
      // Hide initially to prevent layout shifts
      gsap.set(item, { opacity: 0, scale: 0 }); 

      const img = new Image();
      img.onload = () => resolve(); // Jab image load ho jaye tab aage badho
      img.onerror = () => resolve(); // Agar koi image error de toh bhi aage badho
      img.src = src;
      
      item.appendChild(img);
      galleryRing.appendChild(item);
      items.push(item);

      attachInteractions(item);
    });
  });

  // WAIT FOR ALL IMAGES TO LOAD BEFORE ANIMATING
  await Promise.all(loadPromises);

  // Jab saari images load ho jayein, tab math calculations aur animation start karo
  calculateRadius();
  updatePositions(true);

  gsap.fromTo(
    items,
    { scale: 0, opacity: 0, rotation: () => Math.random() * 90 - 45 },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.5,
      stagger: 0.1, // Stagger hone se ek-ek karke ayenge, smooth lagega
      ease: "expo.out",
      onComplete: startRotation,
    }
  );
}

/**
 * Circle Radius Calculation
 */
function calculateRadius() {
  const vmin = Math.min(window.innerWidth, window.innerHeight);
  currentRadius = window.innerWidth <= 768 ? vmin * 0.38 : vmin * 0.35;
}

/**
 * Stack Math Helper: Calculates Position, Opacity, Z-Index for Stack Mode
 */
function getStackProps(index) {
  const spreadX = window.innerWidth * 0.8;
  const spreadY = window.innerHeight * 0.8;
  const startX = -spreadX / 2;
  const startY = -spreadY / 2;

  // Calculate loop progress (0 to 1)
  let p = (index / numItems + stackProxy.progress) % 1;

  const x = startX + p * spreadX;
  const y = startY + p * spreadY;
  let zIndex = Math.floor(p * 1000);
  let opacity = 1;
  let scale = 1;

  // Fade edges for smooth looping
  if (p < 0.1) {
    opacity = p / 0.1;
    scale = 0.8 + (p / 0.1) * 0.2;
  } else if (p > 0.9) {
    opacity = (1 - p) / 0.1;
    scale = 1 + ((p - 0.9) / 0.1) * 0.2;
  }

  return { x, y, zIndex, opacity, scale, p };
}

/**
 * Circular Loop Updates
 */
function updatePositions(isInitial = false) {
  if (expandedItem || isStackedMode) return;

  const angleOffset = rotationProxy.angle * (Math.PI / 180);

  items.forEach((item, i) => {
    if (item.classList.contains("is-transitioning") || item === hoveredItem)
      return;

    const angle = (i / numItems) * Math.PI * 2 + angleOffset;
    const x = Math.cos(angle) * currentRadius;
    const y = Math.sin(angle) * currentRadius;

    if (isInitial) gsap.set(item, { x: x, y: y });
    else gsap.set(item, { x: x, y: y, zIndex: 1 });
  });
}

function startRotation() {
  mainTimeline = gsap.to(rotationProxy, {
    angle: 360,
    duration: 35,
    repeat: -1,
    ease: "none",
    onUpdate: () => updatePositions(false),
  });
}

/**
 * Stack Loop Logic
 */
function startStackLoop() {
  stackProxy.progress = 0;

  stackTimeline = gsap.to(stackProxy, {
    progress: 1,
    duration: 15, // Speed of the waterfall/stack
    repeat: -1,
    ease: "none",
    onUpdate: () => {
      items.forEach((item, i) => {
        // Ignore items currently expanding or being hovered
        if (
          item.classList.contains("is-transitioning") ||
          item === expandedItem ||
          item === hoveredItem
        )
          return;

        const props = getStackProps(i);
        gsap.set(item, {
          x: props.x,
          y: props.y,
          zIndex: props.zIndex,
          opacity: props.opacity,
          scale: props.scale,
        });
      });
    },
  });
}

/**
 * Toggle Button Layout Switcher
 */
toggleBtn.addEventListener("click", () => {
  if (isAnimating || expandedItem) return;

  isAnimating = true;
  isStackedMode = !isStackedMode;

  if (isStackedMode) {
    toggleBtn.innerText = "Back to Circle";
    if (mainTimeline) mainTimeline.pause();

    stackProxy.progress = 0;

    items.forEach((item, i) => {
      item.classList.add("is-transitioning");
      const props = getStackProps(i);

      gsap.to(item, {
        x: props.x,
        y: props.y,
        scale: props.scale,
        opacity: props.opacity,
        rotation: 0,
        zIndex: props.zIndex,
        duration: 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          item.classList.remove("is-transitioning");
          if (i === numItems - 1) {
            isAnimating = false;
            startStackLoop(); // Start infinite motion once layout is set
          }
        },
      });
    });
  } else {
    toggleBtn.innerText = "Toggle Layout";
    if (stackTimeline) stackTimeline.kill();

    const angleOffset = rotationProxy.angle * (Math.PI / 180);

    items.forEach((item, i) => {
      item.classList.add("is-transitioning");
      const angle = (i / numItems) * Math.PI * 2 + angleOffset;
      const targetX = Math.cos(angle) * currentRadius;
      const targetY = Math.sin(angle) * currentRadius;

      gsap.to(item, {
        x: targetX,
        y: targetY,
        zIndex: 1,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          item.classList.remove("is-transitioning");
          if (i === numItems - 1) {
            isAnimating = false;
            if (mainTimeline) mainTimeline.resume();
          }
        },
      });
    });
  }
});

/**
 * Interactions (Hover & Click)
 */
function attachInteractions(item) {
  // Hover: Popping image to the absolute front and pausing motion
  item.addEventListener("mouseenter", () => {
    if (expandedItem || isAnimating) return;

    hoveredItem = item;

    // Pause moving timelines for easy clicking and clean hover
    if (isStackedMode && stackTimeline) stackTimeline.pause();
    if (!isStackedMode && mainTimeline) mainTimeline.pause();

    gsap.to(item, {
      scale: isStackedMode ? 1.15 : 1.05,
      zIndex: 9999, // Bring absolutely to front
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  });

  item.addEventListener("mouseleave", () => {
    if (expandedItem === item || isAnimating) return;

    hoveredItem = null;

    // Calculate where the item SHOULD return to
    let targetScale = 1;
    let targetZ = 1;

    if (isStackedMode) {
      const i = parseInt(item.dataset.index);
      const props = getStackProps(i);
      targetScale = props.scale;
      targetZ = props.zIndex;
    }

    gsap.to(item, {
      scale: targetScale,
      zIndex: targetZ,
      duration: 0.4,
      ease: "power3.out",
      onComplete: () => {
        // Resume movement only if no other item was hovered immediately
        if (!hoveredItem && !expandedItem) {
          if (isStackedMode && stackTimeline) stackTimeline.resume();
          if (!isStackedMode && mainTimeline) mainTimeline.resume();
        }
      },
    });
  });

  item.addEventListener("click", () => {
    if (isAnimating) return;
    if (expandedItem === item) closeImage(item);
    else if (expandedItem === null) openImage(item);
  });
}

/**
 * Open Image (Expand to Center)
 */
function openImage(item) {
  isAnimating = true;
  expandedItem = item;
  hoveredItem = null; // BUG FIX: Clear hover state so it doesn't get stuck later
  document.body.classList.add("is-viewing");
  item.classList.add("is-transitioning", "is-expanded");

  if (isStackedMode && stackTimeline) stackTimeline.pause();
  if (!isStackedMode && mainTimeline) mainTimeline.pause();

  const rect = item.getBoundingClientRect();
  const padding = window.innerWidth <= 768 ? 20 : 60;
  const scaleX = (window.innerWidth - padding * 2) / rect.width;
  const scaleY = (window.innerHeight - padding * 2) / rect.height;
  const targetScale = Math.min(scaleX, scaleY, 4);

  gsap.to(item, {
    x: 0,
    y: 0,
    scale: targetScale,
    zIndex: 10000,
    opacity: 1,
    duration: 1.2,
    ease: "expo.inOut",
    onComplete: () => (isAnimating = false),
  });

  items.forEach((otherItem) => {
    if (otherItem !== item) {
      gsap.to(otherItem, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.5,
        duration: 1,
        ease: "power3.inOut",
      });
    }
  });
}

/**
 * Close Image (Return to Orbit/Stack)
 */
function closeImage(item) {
  isAnimating = true;
  document.body.classList.remove("is-viewing");
  item.classList.remove("is-expanded");

  const index = parseInt(item.dataset.index);
  let targetX, targetY, targetZ, targetScale;

  // Calculate return position based on current active mode
  if (isStackedMode) {
    const props = getStackProps(index);
    targetX = props.x;
    targetY = props.y;
    targetZ = props.zIndex;
    targetScale = props.scale;
  } else {
    const angleOffset = rotationProxy.angle * (Math.PI / 180);
    const angle = (index / numItems) * Math.PI * 2 + angleOffset;
    targetX = Math.cos(angle) * currentRadius;
    targetY = Math.sin(angle) * currentRadius;
    targetZ = 1;
    targetScale = 1;
  }

  gsap.to(item, {
    x: targetX,
    y: targetY,
    scale: targetScale,
    zIndex: targetZ,
    duration: 1.2,
    ease: "expo.inOut",
    onComplete: () => {
      item.classList.remove("is-transitioning");
      expandedItem = null;
      hoveredItem = null; // BUG FIX: Ensure it's clear
      isAnimating = false;

      if (isStackedMode) stackTimeline.resume();
      else mainTimeline.resume();
    },
  });

  // Restore other items smoothly
  items.forEach((otherItem) => {
    if (otherItem !== item) {
      let op = 1;
      let sc = 1;

      if (isStackedMode) {
        const props = getStackProps(parseInt(otherItem.dataset.index));
        op = props.opacity;
        sc = props.scale;
      }

      gsap.to(otherItem, {
        opacity: op,
        filter: "blur(0px)",
        scale: sc,
        duration: 1,
        ease: "power3.inOut",
        clearProps: "filter",
      });
    }
  });
}

/**
 * Handle Resize
 */
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    calculateRadius();
    if (!expandedItem && !isAnimating && !isStackedMode) {
      updatePositions(true);
    }
  }, 150);
});

window.addEventListener("load", initGallery);
