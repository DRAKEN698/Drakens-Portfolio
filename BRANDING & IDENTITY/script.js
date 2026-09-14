document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Setup Lenis Smooth Scroll ---
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0, 0);

  // Stop scroll initially while page is loading/animating
  lenis.stop();

  // --- 2. Data & Initialization ---
  const rawData = [
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
    {
      url: "images (1).jpg",
      framed: false,
    },
  ];

  const galleryData = [];
  for (let i = 0; i < 4; i++) {
    galleryData.push(...rawData);
  }

  const container = document.querySelector(".gallery-container");
  const cards = [];

  galleryData.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (data.framed) card.classList.add("framed");
    card.style.zIndex = index;

    const img = document.createElement("img");
    img.src = data.url;
    card.appendChild(img);

    container.appendChild(card);
    cards.push(card);
  });

  const progressContainer = document.getElementById("progress-bar");
  const totalLines = 48;
  for (let i = 0; i < totalLines; i++) {
    const line = document.createElement("div");
    line.classList.add("progress-line");
    progressContainer.appendChild(line);
  }
  const progressLines = document.querySelectorAll(".progress-line");

 // --- 3 & 4. Infinite Looping Mathematical Engine ---
    const totalCards = cards.length;
    let spreadX, curveFactor, tiltFactor;
    let virtualScroll = 0; // Tracks infinite scroll position

    function calculateLayoutParams() {
        const ww = window.innerWidth;
        const wh = window.innerHeight;
        
        spreadX = ww * 0.45;       
        curveFactor = wh * 0.20;   
        tiltFactor = wh * 0.35;    
        
        if (ww < 1024) {
            spreadX = ww * 0.6;
            curveFactor = wh * 0.15;
            tiltFactor = wh * 0.4;
        }
    }
    
    calculateLayoutParams();
    window.addEventListener('resize', calculateLayoutParams);

    function updateGallery(scrollOffset) {
        const cx = 0; 
        const cy = 0; 
        
        // Wrap Range controls the infinite loop distance
        const wrapRange = 12; 
        const halfRange = wrapRange / 2; 
        
        cards.forEach((card, i) => {
            // Space cards evenly in a circle (math space)
            const baseT = (i / totalCards) * wrapRange;
            
            // Apply scroll and WRAP it infinitely using Modulo (%)
            let t = (baseT - scrollOffset) % wrapRange;
            if (t < 0) t += wrapRange; // Fix for reverse scrolling
            t -= halfRange; // Center the curve

            const x = cx + (t * spreadX);
            // Adjusted curve multiplier (0.25) to match your original visual shape
            const y = cy - (Math.pow(t, 3) * (curveFactor * 0.25) + t * tiltFactor);
            const scale = Math.max(0.65, 1 - Math.abs(t) * 0.08);
            const opacity = Math.max(0, 1 - Math.pow(Math.abs(t) / 2.2, 4));

            card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.visibility = opacity === 0 ? 'hidden' : 'visible';
        });

        // Make the progress bar loop smoothly as well
        const progress = Math.abs(scrollOffset % 1); 
        const activeCount = Math.round(progress * totalLines);
        progressLines.forEach((line, i) => {
            if (i < activeCount) line.classList.add('active');
            else line.classList.remove('active');
        });
    }

    // Replace ScrollTrigger with GSAP Ticker for Infinite Auto-Play + Scroll
    gsap.ticker.add(() => {
        // If an image is clicked/zoomed (Lenis is stopped), pause the animation
        if (lenis.isStopped) return; 

        // 1. Auto-scroll speed (Premium slow movement)
        virtualScroll += 0.0015; 
        
        // 2. Add manual user scroll velocity
        if (lenis.velocity) {
            virtualScroll += lenis.velocity * 0.001; 
        }
        
        updateGallery(virtualScroll);
    });

  // --- 4. ScrollTrigger Connection ---
  ScrollTrigger.create({
    trigger: ".scroll-spacer",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => updateGallery(self.progress),
  });

  updateGallery(0);

  // --- 5. Click to Enlarge Animation (FLIP) ---
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");
  const modalImg = document.createElement("img");
  modalImg.classList.add("modal-image");
  overlay.appendChild(modalImg);
  document.body.appendChild(overlay);

  let activeCardRect = null;
  let isModalOpen = false;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (isModalOpen) return;
      isModalOpen = true;

      const img = card.querySelector("img");
      activeCardRect = card.getBoundingClientRect();

      modalImg.src = img.src;

      gsap.set(modalImg, {
        top: activeCardRect.top,
        left: activeCardRect.left,
        width: activeCardRect.width,
        height: activeCardRect.height,
        xPercent: 0,
        yPercent: 0,
        borderRadius: getComputedStyle(card).borderRadius,
      });

      lenis.stop();

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        pointerEvents: "auto",
        ease: "power2.out",
      });

      const bigWidth =
        window.innerWidth > 1440
          ? "800px"
          : window.innerWidth > 768
            ? "600px"
            : "85vw";
      const bigHeight =
        window.innerWidth > 1440
          ? "1000px"
          : window.innerWidth > 768
            ? "80vh"
            : "65vh";

      gsap.to(modalImg, {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: bigWidth,
        height: bigHeight,
        duration: 0.7,
        ease: "expo.out",
      });
    });
  });

  overlay.addEventListener("click", () => {
    if (!isModalOpen) return;

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      pointerEvents: "none",
      ease: "power2.in",
    });

    lenis.start();

    if (activeCardRect) {
      gsap.to(modalImg, {
        top: activeCardRect.top,
        left: activeCardRect.left,
        width: activeCardRect.width,
        height: activeCardRect.height,
        xPercent: 0,
        yPercent: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          isModalOpen = false;
        },
      });
    }
  });

  // --- 6. Page Load Reveal Animation (FIXED) ---
  // Hide items before animation starts
  gsap.set(".gallery-container", { opacity: 0, scale: 0.85 });
  gsap.set(".progress-wrapper", { opacity: 0, y: 40 });

  const tl = gsap.timeline({
    onComplete: () => {
      lenis.start(); // Allow scrolling once animation finishes
      // Remove loader from DOM so it doesn't block anything
      document.querySelector(".page-loader").style.display = "none";
    },
  });

  // Animate loader up
  tl.to(".page-loader", {
    yPercent: -100,
    duration: 1.2,
    ease: "expo.inOut",
    delay: 0.2,
  })
    // Pop in the gallery
    .to(
      ".gallery-container",
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      "-=0.6",
    )
    // Slide up the progress bar
    .to(
      ".progress-wrapper",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=1.2",
    );
});


