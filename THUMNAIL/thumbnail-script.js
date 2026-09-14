/**
 * Data Array: Unsplash assets (Aapki Images)
 */
const imageData = [
  "Thumbnail image/1.webp",
  "Thumbnail image/2.webp",
  "Thumbnail image/3.webp",
  "Thumbnail image/4.webp",
  "Thumbnail image/5.webp",
  "Thumbnail image/6.webp",
  "Thumbnail image/7.webp",
  "Thumbnail image/8.webp",
  "Thumbnail image/9.webp",
  "Thumbnail image/10.webp",
  "Thumbnail image/11.webp",
  "Thumbnail image/12.webp",
  "Thumbnail image/13.webp",
  "Thumbnail image/14.webp",
  "Thumbnail image/15.webp",
  "Thumbnail image/16.webp",
  "Thumbnail image/17.webp",
  "Thumbnail image/18.webp",
];

// Core DOM Elements
const galleryRing = document.getElementById("gallery-ring");
const items = [];
const numItems = imageData.length;

// State Management
let isAnimating = false;
let expandedItem = null;
let hoveredItem = null;

// Stack Timeline Management
const stackProxy = { progress: 0 };
let stackTimeline;

// Performance Tweaks (Lag prevention)
gsap.ticker.fps(60);
gsap.ticker.lagSmoothing(1000, 16);

/**
 * Initialization (LAZY LOADING & DEFAULT STACK MODE)
 */
function initGallery() {
  imageData.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.index = index;

    // Hide initially
    gsap.set(item, { opacity: 0, scale: 0, force3D: true });

    const img = new Image();
    img.loading = "lazy";
    img.decoding = "async";
    gsap.set(img, { opacity: 0 });

    // Cache & Lazy load fix for Mobile
    if (img.complete) {
      gsap.to(img, { opacity: 1, duration: 0.8, ease: "power2.out" });
    } else {
      img.onload = () => {
        gsap.to(img, { opacity: 1, duration: 0.8, ease: "power2.out" });
      };
    }

    img.src = src;
    item.appendChild(img);
    galleryRing.appendChild(item);
    items.push(item);

    attachInteractions(item);
  });

  // Set initial stack positions (Invisible)
  items.forEach((item, i) => {
    const props = getStackProps(i);
    gsap.set(item, { x: props.x, y: props.y, zIndex: props.zIndex });
  });

  // Smooth pop-in animation
  gsap.to(items, {
    scale: (i) => getStackProps(i).scale,
    opacity: (i) => getStackProps(i).opacity,
    duration: 1.5,
    stagger: 0.1,
    ease: "expo.out",
    onComplete: startStackLoop,
  });
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
 * Stack Infinite Loop Logic
 */
function startStackLoop() {
  stackProxy.progress = 0;

  stackTimeline = gsap.to(stackProxy, {
    progress: 1,
    duration: 15, // Speed of the waterfall (increase to slow down)
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
 * Interactions (Hover & Click)
 */
function attachInteractions(item) {
  // Hover Logic (Desktop Only)
  item.addEventListener("mouseenter", () => {
    // Ignore on touch devices to prevent stuck images
    if (window.matchMedia("(hover: none)").matches || window.innerWidth <= 768)
      return;
    if (expandedItem || isAnimating) return;

    hoveredItem = item;
    if (stackTimeline) stackTimeline.pause();

    gsap.to(item, {
      scale: 1.15,
      zIndex: 9999,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  });

  item.addEventListener("mouseleave", () => {
    // Ignore on touch devices
    if (window.matchMedia("(hover: none)").matches || window.innerWidth <= 768)
      return;
    if (expandedItem === item || isAnimating) return;

    hoveredItem = null;

    const i = parseInt(item.dataset.index);
    const props = getStackProps(i);

    gsap.to(item, {
      scale: props.scale,
      zIndex: props.zIndex,
      duration: 0.4,
      ease: "power3.out",
      onComplete: () => {
        if (!hoveredItem && !expandedItem && stackTimeline) {
          stackTimeline.resume();
        }
      },
    });
  });

  // Click Logic (Works Everywhere)
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
  hoveredItem = null;
  document.body.classList.add("is-viewing");
  document.body.classList.add("is-animating"); // Disable background pointer events
  item.classList.add("is-transitioning", "is-expanded");

  if (stackTimeline) stackTimeline.pause();

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
    force3D: false, // Image quality fix
    onComplete: () => {
      isAnimating = false;
      document.body.classList.remove("is-animating");
    },
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
 * Close Image (Return to Stack)
 */
function closeImage(item) {
  isAnimating = true;
  document.body.classList.add("is-animating");
  document.body.classList.remove("is-viewing");
  item.classList.remove("is-expanded");

  const index = parseInt(item.dataset.index);
  const props = getStackProps(index);

  gsap.to(item, {
    x: props.x,
    y: props.y,
    scale: props.scale,
    zIndex: props.zIndex,
    duration: 1.2,
    ease: "expo.inOut",
    force3D: false,
    onComplete: () => {
      item.classList.remove("is-transitioning");
      expandedItem = null;
      hoveredItem = null;
      isAnimating = false;
      document.body.classList.remove("is-animating");

      if (stackTimeline) stackTimeline.resume();
    },
  });

  // Restore other items smoothly
  items.forEach((otherItem) => {
    if (otherItem !== item) {
      const p = getStackProps(parseInt(otherItem.dataset.index));
      gsap.to(otherItem, {
        opacity: p.opacity,
        filter: "blur(0px)",
        scale: p.scale,
        duration: 1,
        ease: "power3.inOut",
        clearProps: "filter",
      });
    }
  });
}

window.addEventListener("load", initGallery);
