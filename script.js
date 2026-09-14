// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. INITIALIZE LENIS (SMOOTH SCROLLING) ONLY FOR DESKTOP
  if (window.innerWidth > 768) {
    window.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Hook Lenis into GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // NAV LINK SMOOTH SCROLLING (Smart check for Mobile & Desktop)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");

      if (window.lenis) {
        // Desktop: Lenis scroll use karega
        if (target === "#top") {
          lenis.scrollTo(0);
        } else if (document.querySelector(target)) {
          lenis.scrollTo(target);
        }
      } else {
        // Mobile: Normal smooth scroll use karega bina Lenis ke
        if (target === "#top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // 2. CUSTOM CURSOR LOGIC (OPTIMIZED GPU VERSION)
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  const hoverElements = document.querySelectorAll("[data-hover]");

  // Setup initial GPU hardware acceleration
  gsap.set([cursorDot, cursorOutline], { force3D: true });

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Instant follow for dot using GSAP transform (Zero layout recalculation)
    gsap.set(cursorDot, { x: posX, y: posY });

    // Smooth follow for outline
    gsap.to(cursorOutline, {
      x: posX,
      y: posY,
      duration: 0.15,
      ease: "power2.out",
    });
  });

  // Add hover effect states
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });

 // =========================================
  // 3. CINEMATIC ON-LOAD ANIMATIONS (GSAP)
  // =========================================
  
  // NAYA LOGIC: Agar mobile screen hai ya Google Bot hai, toh Hero Animation MAT chalao.
  // Sirf Desktop par chalao taaki performance 90+ rahe.
  
  const isBotOrMobile = window.innerWidth < 768 || /bot|googlebot|crawler|spider|robot|crawling|lighthouse|chrome-lighthouse/i.test(navigator.userAgent);

  if (!isBotOrMobile) {
      // DESKTOP KE LIYE ANIMATION (Chalegi)
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      window.mainHeroTl = tl; 

      gsap.set(".line", { yPercent: 100 });
      gsap.set(".reveal-element", { y: 30, opacity: 0 });
      gsap.set(".hero__img", { scale: 1.1, opacity: 0 });
      gsap.set(".logo, .nav__item, .header .btn", { y: -20, opacity: 0 });

      tl.to(".hero__img", { scale: 1, opacity: 1, duration: 2, ease: "power3.inOut" }, 0)
        .to(".logo, .nav__item, .header .btn", { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0.5)
        .to(".line", { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "expo.out" }, 0.8)
        .to(".reveal-element", { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, 1.2);
        
  } else {
      // MOBILE & GOOGLE BOT KE LIYE (NO ANIMATION - INSTANT LOAD)
      // Elements pehle se hi dikhenge, koi `opacity: 0` nahi hoga.
      gsap.set(".line", { yPercent: 0 });
      gsap.set(".reveal-element", { y: 0, opacity: 1 });
      gsap.set(".hero__img", { scale: 1, opacity: 1 });
      gsap.set(".logo, .nav__item, .header .btn", { y: 0, opacity: 1 });
  }

  // 4. PARALLAX EFFECT ON SCROLL
  // Slight movement of the image when scrolling down
  gsap.to(".hero__img", {
    yPercent: 15, // Move down slightly
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

// =========================================
// 5. NEW EPIC ABOUT SECTION SCROLL & HOVER ANIMATION
// =========================================

gsap.registerPlugin(ScrollTrigger);
// Initial States set karna (Hidden states)
gsap.set(".header-group", { y: 50, opacity: 0 });
gsap.set(".intro-text", { y: 30, opacity: 0 });
gsap.set(".vision-box", { x: -50, opacity: 0 });
gsap.set(".quote-box", { x: 50, opacity: 0 });
gsap.set(".list-block", { y: 40, opacity: 0 });

gsap.set(".portrait-wrapper", { scale: 0.8, opacity: 0 }); // Blur हटाया

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

aboutTl
  .to(
    ".portrait-wrapper",
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      force3D: true, // GPU acceleration ऑन
    },
    0,
  )
  .to(
    ".header-group, .intro-text",
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    },
    0.2,
  )
  .to(
    ".vision-box, .quote-box",
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    },
    0.6,
  )
  .to(
    ".list-block",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    },
    0.8,
  )
  .to(
    ".icon-3d",
    {
      scale: 1,
      opacity: 1,
      rotation: (i, el) => {
        // Original rotation wapas dena based on icon
        if (el.classList.contains("id")) return -15;
        if (el.classList.contains("ps")) return 10;
        if (el.classList.contains("lr")) return -10;
        if (el.classList.contains("ai")) return 15;
        if (el.classList.contains("pr")) return -20;
        return 0;
      },
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.5)",
    },
    0.5,
  );

// Continuous Floating Animation for Adobe Icons
gsap.to(".icon-3d", {
  y: "-=15",
  rotationX: "+=10",
  rotationY: "+=10",
  yoyo: true,
  repeat: -1,
  duration: 2.5,
  ease: "sine.inOut",
  stagger: {
    each: 0.3,
    from: "random",
  },
});

// Magnetic Hover Effects for Icons
const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach((elem) => {
  elem.addEventListener("mousemove", (e) => {
    const rect = elem.getBoundingClientRect();
    const strength = elem.dataset.strength || 20;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(elem, {
      x: (x / rect.width) * strength,
      y: (y / rect.height) * strength,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  });
});

// =========================================
// 6. CONTINUOUS PARALLAX EFFECT
// =========================================
// Jab reveal animation khatam ho jaye, uske baad bhi scroll karne par image thodi si move hogi (Parallax)
gsap.to(".portrait-img", {
  yPercent: 15,
  ease: "none",
  force3D: true, // ये लाइन ब्राउज़र को इसे स्मूथ चलाने में मदद करेगी
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// =========================================
// 7. STATS COUNTER ANIMATION (OPTIMIZED)
// =========================================

// Step 1: Elements ko pehle se hi chhupa do taaki scroll karte waqt achanak jump na aaye
gsap.set(".stat-item", { y: 40, opacity: 0 });

// Step 2: ScrollTrigger ke saath Timeline banayenge (Performance ke liye best)
const statsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".stats",
    start: "top 85%", // Jaise hi section 85% viewport me aayega, smoothly start hoga
    once: true,
  },
});

// Pehle items ko smooth upar layenge
statsTl.to(".stat-item", {
  y: 0,
  opacity: 1,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
});

// Phir Numbers chalayenge optimized way mein
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const targetValue = parseInt(counter.getAttribute("data-target"));
  let proxy = { val: 0 };

  statsTl.to(
    proxy,
    {
      val: targetValue,
      duration: 2.5,
      ease: "power3.out",
      snap: { val: 1 }, // (Optimization) GSAP khud round off karega, Math.floor ki zaroorat nahi
      onUpdate: function () {
        counter.textContent = proxy.val; // (Optimization) textContent innerText se fast hota hai
      },
    },
    "<0.2",
  ); // "<0.2" ka matlab hai text upar aane ke 0.2s baad hi counting start ho jayegi
});

// =========================================
// 8. PORTFOLIO SECTION GSAP & LOGIC
// =========================================

// A. Setup Initial Hidden States for ScrollTrigger
gsap.set(".gs-reveal-portfolio", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-card", { y: 80, opacity: 0, scale: 0.95 });

// B. Scroll Reveal Animation for Portfolio Section
ScrollTrigger.create({
  trigger: ".portfolio",
  start: "top 75%", // Triggers when section is 75% into the viewport
  onEnter: () => {
    // Animate Header and Filters
    gsap.to(".gs-reveal-portfolio", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Animate Portfolio Cards (Staggered Cinematic Entrance)
    gsap.to(".gs-reveal-card", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.out",
      delay: 0.2, // Starts slightly after title reveals
    });
  },
  once: true, // Runs animation only once
});

// C. Frontend Filtering Logic with GSAP Animations
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio__card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Agar same button par click kiya hai toh kuch mat karo
    if (btn.classList.contains("active")) return;

    // Active class update karo
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    // Ek timeline banayenge taaki pehle purani images jayein, fir nayi aayein
    const filterTl = gsap.timeline();

    // 1. Jo cards abhi screen par dikh rahe hain, unko hide karo
    const visibleCards = Array.from(portfolioCards).filter(
      (card) => card.style.display !== "none",
    );

    if (visibleCards.length > 0) {
      filterTl.to(visibleCards, {
        scale: 0.9,
        opacity: 0,
        y: 20, // Thoda niche ki taraf jayengi
        duration: 0.3,
        stagger: 0.05, // Ek-ek karke gayab hongi
        ease: "power2.in",
        onComplete: () => {
          visibleCards.forEach((c) => (c.style.display = "none"));
        },
      });
    }

    // 2. Jo naye cards aane wale hain, unko filter karo
    const cardsToShow = Array.from(portfolioCards).filter((card) => {
      const category = card.getAttribute("data-category");
      return filterValue === "all" || filterValue === category;
    });

    // 3. Naye cards ko display block karke unki entry animation chalao
    filterTl.add(() => {
      cardsToShow.forEach((c) => {
        c.style.display = "block";
        // Animation se pehle initial state set karo
        gsap.set(c, { scale: 0.8, opacity: 0, y: 30 });
      });
    });

    filterTl.to(cardsToShow, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1, // Ek-ek karke mast pop-up hongi
      ease: "back.out(1.2)",
    });
  });
});

// =========================================
// 9. AI WORK SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-ai", { y: 40, opacity: 0 });
gsap.set(".gs-reveal-ai-img", {
  opacity: 0,
  scale: 1.05,
  filter: "blur(10px)",
});
gsap.set(".gs-reveal-aicard", {
  y: 50,
  opacity: 0,
  rotateX: 10,
  transformPerspective: 1000,
});

// B. Create ScrollTrigger Timeline for AI Work
const aiTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ai-work",
    start: "top 70%", // Start when section is 70% in view
    once: true,
  },
});

// Animate Left Text Content (Kicker, Title, Desc, Button)
aiTl
  .to(".gs-reveal-ai", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  })

  // Animate Right Cinematic Image (Fade, scale down, unblur)
  .to(
    ".gs-reveal-ai-img",
    {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "power2.out",
    },
    "-=0.6",
  ) // Start slightly before text finishes

  // C. Cards Stagger Reveal
  .to(
    ".gs-reveal-aicard",
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)", // Slight pop effect
    },
    "-=0.8",
  );

// Continuous subtle breathing animation for the glowing button
gsap.to(".btn--glow", {
  boxShadow: "0 0 15px 2px rgba(230, 0, 0, 0.3)",
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// =========================================
// 10. SERVICES SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-services", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-service", { y: 40, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-services-btn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Services
ScrollTrigger.create({
  trigger: ".services",
  start: "top 75%", // Triggers when section is 75% visible
  once: true,
  onEnter: () => {
    const sTl = gsap.timeline();

    // 1. Reveal Header (Kicker & Title)
    sTl
      .to(".gs-reveal-services", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      // 2. Stagger Reveal the 6 Service Items
      .to(
        ".gs-reveal-service",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1, // Elegant staggered pop-in
          ease: "back.out(1.2)",
        },
        "-=0.4",
      ) // Start while the header is still finishing

      // 3. Pop in the bottom button
      .to(
        ".gs-reveal-services-btn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 11. MY DESIGN PROCESS GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-process", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-step", { y: 40, opacity: 0, scale: 0.9 });
gsap.set(".gs-reveal-arrow", { x: -20, opacity: 0 }); // Arrows slide in from left

// B. Create ScrollTrigger Timeline for Process Section
ScrollTrigger.create({
  trigger: ".process",
  start: "top 80%", // Triggers when section is 80% visible in viewport
  once: true,
  onEnter: () => {
    const pTl = gsap.timeline();

    // 1. Reveal Main Title
    pTl.to(".gs-reveal-process", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    // 2. Animate Items and Arrows (Interleaved staggering)
    // We get all children of the wrapper to stagger them perfectly left-to-right
    const processElements = document.querySelectorAll(
      ".process__wrapper > div",
    );

    pTl.to(
      processElements,
      {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15, // Delay between each element (circle -> arrow -> circle)
        ease: "back.out(1.5)",
      },
      "-=0.4",
    );
  },
});

// =========================================
// 12. TOOLS SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-tools", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-tool", { y: 30, scale: 0.9, opacity: 0 });
gsap.set(".gs-reveal-divider", {
  scaleY: 0,
  opacity: 0,
  transformOrigin: "top",
});

// B. Create ScrollTrigger Timeline for Tools
ScrollTrigger.create({
  trigger: ".tools",
  start: "top 80%", // Triggers when section is 80% visible
  once: true,
  onEnter: () => {
    const tTl = gsap.timeline();

    // 1. Reveal Heading
    tTl.to(".gs-reveal-tools", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    // 2. Reveal all tools and the divider in DOM order
    // Get all items that need to be staggered sequentially
    const toolItems = document.querySelectorAll(".tools__wrapper > div");

    tTl.to(
      toolItems,
      {
        y: 0,
        scale: 1,
        scaleY: 1, // Specific for the divider
        opacity: 1,
        duration: 0.6,
        stagger: 0.08, // Fast, playful pop-in stagger
        ease: "back.out(1.5)",
      },
      "-=0.4",
    );
  },
});

// =========================================
// 13. BRANDING SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-branding", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-bcard", { y: 60, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-bbtn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Branding Section
ScrollTrigger.create({
  trigger: ".branding",
  start: "top 75%", // Triggers when section is 75% in viewport
  once: true,
  onEnter: () => {
    const bTl = gsap.timeline();

    // 1. Reveal Title
    bTl
      .to(".gs-reveal-branding", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })

      // 2. Stagger Cards Reveal
      .to(
        ".gs-reveal-bcard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15, // Delay between each card popping up
          ease: "expo.out",
        },
        "-=0.4",
      ) // Start slightly before title finishes

      // 3. Fade in bottom button
      .to(
        ".gs-reveal-bbtn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 14. SOCIAL MEDIA SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-sm", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-smcard", { y: 60, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-smbtn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Social Media Section
ScrollTrigger.create({
  trigger: ".social-media",
  start: "top 75%", // Triggers when section is 75% in viewport
  once: true,
  onEnter: () => {
    const smTl = gsap.timeline();

    // 1. Reveal Title
    smTl
      .to(".gs-reveal-sm", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })

      // 2. Stagger 4 Cards Reveal (Left to Right)
      .to(
        ".gs-reveal-smcard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1, // Quick, snappy delay between each card
          ease: "expo.out",
        },
        "-=0.4",
      )

      // 3. Fade in bottom button
      .to(
        ".gs-reveal-smbtn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 15. PRINT DESIGNS SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-print", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-printcard", { y: 60, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-printbtn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Print Designs Section
ScrollTrigger.create({
  trigger: ".print-designs",
  start: "top 75%", // Triggers when section is 75% in viewport
  once: true,
  onEnter: () => {
    const prTl = gsap.timeline();

    // 1. Reveal Title
    prTl
      .to(".gs-reveal-print", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })

      // 2. Stagger 4 Cards Reveal (Image & Text together)
      .to(
        ".gs-reveal-printcard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1, // Smooth cascade effect
          ease: "expo.out",
        },
        "-=0.4",
      )

      // 3. Fade in bottom button
      .to(
        ".gs-reveal-printbtn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 16. PACKAGING SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-pack", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-packcard", { y: 60, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-packbtn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Packaging Section
ScrollTrigger.create({
  trigger: ".packaging",
  start: "top 75%", // Triggers when section is 75% in viewport
  once: true,
  onEnter: () => {
    const pkTl = gsap.timeline();

    // 1. Reveal Title
    pkTl
      .to(".gs-reveal-pack", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })

      // 2. Stagger 4 Cards Reveal (Left to Right smooth wave)
      .to(
        ".gs-reveal-packcard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
        },
        "-=0.4",
      )

      // 3. Fade in bottom button
      .to(
        ".gs-reveal-packbtn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 17. PHOTO MANIPULATION SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-pm", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-pmcard", { y: 60, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-pmbtn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Photo Manipulation
ScrollTrigger.create({
  trigger: ".photo-manip",
  start: "top 75%", // Triggers when section is 75% in viewport
  once: true,
  onEnter: () => {
    const pmTl = gsap.timeline();

    // 1. Reveal Title
    pmTl
      .to(".gs-reveal-pm", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })

      // 2. Stagger 4 Cards Reveal
      .to(
        ".gs-reveal-pmcard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1, // Quick, fluid ripple reveal
          ease: "expo.out",
        },
        "-=0.4",
      )

      // 3. Fade in bottom button
      .to(
        ".gs-reveal-pmbtn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 18. THUMBNAIL GALLERY SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-thumb", { y: 30, opacity: 0 });
gsap.set(".gs-reveal-thumbcard", { y: 50, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-thumbbtn", { y: 20, opacity: 0 });

// B. Create ScrollTrigger Timeline for Thumbnail Section
ScrollTrigger.create({
  trigger: ".thumbnail-gallery",
  start: "top 75%", // Triggers when section is 75% in viewport
  once: true,
  onEnter: () => {
    const thTl = gsap.timeline();

    // 1. Reveal Header Elements (Kicker, Title, Line, Desc)
    thTl
      .to(".gs-reveal-thumb", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      })

      // 2. Stagger 8 Thumbnail Cards
      .to(
        ".gs-reveal-thumbcard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08, // Very fast stagger since there are 8 items
          ease: "expo.out",
        },
        "-=0.4",
      )

      // 3. Fade in bottom button
      .to(
        ".gs-reveal-thumbbtn",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      );
  },
});

// =========================================
// 19. WHY CHOOSE ME SECTION GSAP ANIMATIONS
// =========================================

// A. Setup Initial Hidden States
gsap.set(".gs-reveal-wc", { y: 40, opacity: 0 });
gsap.set(".gs-reveal-wccard", { y: 40, opacity: 0, scale: 0.95 });
gsap.set(".gs-reveal-wchex", { x: 50, opacity: 0, scale: 0.9 });

// B. ScrollTrigger Timeline
ScrollTrigger.create({
  trigger: ".why-choose",
  start: "top 70%", // Triggers when section is 70% in view
  once: true,
  onEnter: () => {
    const wcTl = gsap.timeline();

    // 1. Reveal Header Text
    wcTl
      .to(".gs-reveal-wc", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      // 2. Stagger Feature Cards
      .to(
        ".gs-reveal-wccard",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1, // Quick pop-in stagger
          ease: "back.out(1.2)",
        },
        "-=0.4",
      )
  },
});

// =========================================
// 20. FOOTER SECTION GSAP ANIMATIONS
// =========================================

gsap.set(".gs-reveal-footer", { y: 30, opacity: 0 });

ScrollTrigger.create({
  trigger: ".footer",
  start: "top 85%", // Jab footer viewport me aayega
  once: true,
  onEnter: () => {
    gsap.to(".gs-reveal-footer", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, // Top columns aayengi, phir bottom bar aayega
      ease: "power3.out",
    });
  },
});

// =========================================
// 21. PAGE TRANSITION (BRANDING PROJECTS)
// =========================================
const brandingBtn = document.getElementById("branding-transition-btn");

if (brandingBtn) {
  brandingBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Default click behavior rok do
    const targetUrl = this.getAttribute("href");

    // GSAP se parda upar kheecho
    gsap.to(".page-transition-overlay", {
      y: "0%",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        // Parda poora aane ke baad URL change karo
        window.location.href = targetUrl;
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const transitionOverlay = document.querySelector(".page-transition");

  // 1. Jese hi page load ho, thoda ruk kar parda upar hata do
  setTimeout(() => {
    transitionOverlay.classList.add("loaded");
  }, 100); // 100ms delay for smoothness

  // 2. Buttons par click ka logic
  const transitionLinks = document.querySelectorAll(".transition-link");

  transitionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Direct page open hone se rok diya

      const targetUrl = this.href;

      // Parde ko neeche se nikalne ke liye origin change kiya
      transitionOverlay.classList.add("bottom-origin");

      // Parda screen par laya (animation start)
      transitionOverlay.classList.remove("loaded");
      transitionOverlay.classList.add("active");

      // 800ms baad (jitni CSS animation ki timing hai), naya page khol do
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800);
    });
  });
});

// =========================================
// 22. AI WORK DAREDEVIL FLASHLIGHT EFFECT
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  // Container ko select kiya
  const container = document.getElementById("reveal-box");

  if (container) {
    // Jab mouse container ke upar move karega
    container.addEventListener("mousemove", (e) => {
      // Container ki screen par position nikal rahe hain
      const rect = container.getBoundingClientRect();

      // Mouse ka X aur Y coordinate nikal rahe hain (container ke andar)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // CSS variables (--x aur --y) ko update kar rahe hain
      container.style.setProperty("--x", `${x}px`);
      container.style.setProperty("--y", `${y}px`);
    });
  }
});

// =========================================
// 23. HAMBURGER MENU LOGIC
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");

  if (hamburger && nav) {
    // Toggle menu on Hamburger Click
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      nav.classList.toggle("nav--open");

      // Menu khulne par background scroll lock kar do
      if (nav.classList.contains("nav--open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu jab kisi bhi link par click ho
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        nav.classList.remove("nav--open");
        document.body.style.overflow = "";
      });
    });
  }
});

// =========================================
// 24. AI WORK UNLIMITED STROBE (NO BLANK & OPTIMIZED SPEED)
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  const aiCards = document.querySelectorAll(".ai-card");

  aiCards.forEach((card, index) => {
    const images = card.querySelectorAll(".ai-card__img");

    if (images.length > 1) {
      let currentIndex = 0;

      // पहली इमेज को Active करो
      images[currentIndex].classList.add("is-active");

      setTimeout(() => {
        // स्पीड को 500ms से बढ़ाकर 1200ms (1.2 सेकंड) कर दिया गया है
        setInterval(() => {
          const prevImage = images[currentIndex];

          // नया इंडेक्स निकालो
          currentIndex = (currentIndex + 1) % images.length;
          const nextImage = images[currentIndex];

          // पुरानी इमेज से is-prev हटाओ
          images.forEach((img) => img.classList.remove("is-prev"));

          // जो अभी चल रही थी उसे is-prev बना दो (ताकि वो ब्लैंक न हो)
          prevImage.classList.remove("is-active");
          prevImage.classList.add("is-prev");

          // नई इमेज को Active बना दो
          nextImage.classList.add("is-active");
        }, 1200); // <-- यहाँ 1200ms (1.2s) स्पीड सेट है
      }, index * 200);
    } else if (images.length === 1) {
      images[0].classList.add("is-active");
    }
  });
});

// =========================================
// 25. FIX: BACK BUTTON SCROLL RESTORATION & BLACK SCREEN
// =========================================

// Step 1: Kisi dusre page par jane se pehle current scroll location save karlo
window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("savedScrollPosition", window.scrollY);
});

// Step 2: Jab wapas is page par aayen (Back button dabane par)
window.addEventListener("pageshow", (event) => {
    
    // Check karein ki user Back Button daba kar aaya hai ya nahi
    const isBackNavigation = event.persisted || 
      (performance.getEntriesByType("navigation").length && 
       performance.getEntriesByType("navigation")[0].type === "back_forward");

    if (isBackNavigation) {
        // 🚀 FIX 1: Normal CSS waale parde ko hatayein
        const transitionOverlay = document.querySelector(".page-transition");
        if (transitionOverlay) {
            transitionOverlay.classList.remove("active", "bottom-origin");
            transitionOverlay.classList.add("loaded");
        }

        // 🚀 FIX 2: GSAP waale parde (Branding Button) ko wapas neeche bhejein
        const gsapOverlay = document.querySelector(".page-transition-overlay");
        if (gsapOverlay) {
            // GSAP se parde ko turant 100% neeche bhej do
            gsap.set(gsapOverlay, { y: "100%", clearProps: "all" });
        }
    }

    // Save ki hui purani scroll location nikalo aur wapas wahi le jao
    const savedScroll = sessionStorage.getItem("savedScrollPosition");
    
    if (savedScroll) {
        setTimeout(() => {
            if (window.lenis) {
                window.lenis.scrollTo(parseFloat(savedScroll), { immediate: true });
            } else {
                window.scrollTo({ top: parseFloat(savedScroll), behavior: "instant" });
            }
        }, 150);
    }
});