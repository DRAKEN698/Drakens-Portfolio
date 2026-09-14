document.addEventListener("DOMContentLoaded", () => {
  // --- NAYA SCROLL & HOVER LOGIC START ---
  const columns = document.querySelectorAll(".gallery-column");
  const columnsData = []; // Har column ka data store karne ke liye

  columns.forEach((column, index) => {
    const track = column.querySelector(".gallery-track");
    const direction = column.getAttribute("data-direction");
    const speedAttr = column.getAttribute("data-speed");

    // Clone for seamless loop
    const originalContent = track.innerHTML;
    track.innerHTML = originalContent + originalContent;

    // Speed ko numbers mein convert karna
    let baseSpeed = 1;
    if (speedAttr === "slow") baseSpeed = 0.5;
    if (speedAttr === "medium") baseSpeed = 1;
    if (speedAttr === "fast") baseSpeed = 1.5;

    // Agar direction up hai, toh speed minus mein hogi
    if (direction === "up") baseSpeed = -baseSpeed;

    columnsData.push({
      trackEl: track,
      y: 0,
      speed: baseSpeed,
      isHovered: false,
      trackHeight: 0, // Calculate karenge loop ke liye
    });

    // Hover Check (Auto-scroll pause karne ke liye)
    column.addEventListener(
      "mouseenter",
      () => (columnsData[index].isHovered = true),
    );
    column.addEventListener(
      "mouseleave",
      () => (columnsData[index].isHovered = false),
    );

    // Mouse Wheel (Scroll) Check
    column.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault(); // Default page scroll rokna
        // Mouse wheel scroll karne par us specific column ka Y position update karna
        columnsData[index].y += e.deltaY * 0.8; // 0.8 scroll sensitivity hai
      },
      { passive: false },
    );
  });

  // 60FPS Smooth Animation Loop
  function animateGallery() {
    columnsData.forEach((data) => {
      // Height ek baar calculate karenge jab images load ho jayengi
      if (data.trackHeight === 0 && data.trackEl.scrollHeight > 0) {
        // Kyunki humne content duplicate kiya hai, isliye total height ka aada (half) lenge
        data.trackHeight = data.trackEl.scrollHeight / 2;
      }

      // Agar hover NAHI hai, toh auto-scroll karo
      if (!data.isHovered) {
        data.y += data.speed;
      }

      // --- INFINITE LOOP LOGIC ---
      // Agar scroll karte hue upar nikal gaye
      if (data.y <= -data.trackHeight) {
        data.y += data.trackHeight;
      }
      // Agar scroll karte hue neeche nikal gaye
      else if (data.y >= 0) {
        data.y -= data.trackHeight;
      }

      // CSS transform apply karna smoothly
      data.trackEl.style.transform = `translateY(${data.y}px)`;
    });

    requestAnimationFrame(animateGallery);
  }

  // Animation start karein
  animateGallery();
  // --- NAYA SCROLL & HOVER LOGIC END ---

  // 2. Custom Smooth Cursor Logic
  const cursor = document.querySelector(".cursor");
  const galleryItems = document.querySelectorAll(".gallery-item");

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  // Easing factor (lower = smoother/slower following)
  const speed = 0.15;

  // Track mouse position
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor using requestAnimationFrame for 60fps smoothness
  function animateCursor() {
    // Interpolate current position towards target mouse position
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Add hover effect states to cursor when over images
  // Need to re-query items because we duplicated them in step 1
  const allItems = document.querySelectorAll(".gallery-item");

  allItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursor.classList.add("hovered");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovered");
    });
  });
});

// 3. Image Click Expansion Logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryWrapper = document.querySelector(".gallery-wrapper");

galleryWrapper.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (!item) return;

  const img = item.querySelector("img");
  if (img) {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
    // Cursor ab hide NAHI hoga
  }
});

// Close lightbox on click
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  // setTimeout ki zaroorat ab nahi hai
});
