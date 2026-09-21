// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // WELCOME POPUP (NEW PROJECTS) LOGIC
  // =========================================
  const popupOverlay = document.getElementById("welcomePopup");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const explorePopupBtn = document.getElementById("explorePopupBtn");

  if (!sessionStorage.getItem("welcomePopupShown") && popupOverlay) {
    setTimeout(() => {
      if (window.lenis) window.lenis.stop();
      document.body.style.overflow = "hidden";

      gsap.to(popupOverlay, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(".welcome-popup-box", {
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        delay: 0.1,
      });
    }, 2500);
  }

  const closeWelcomePopup = () => {
    gsap.to(".welcome-popup-box", {
      scale: 0.9,
      y: 30,
      duration: 0.4,
      ease: "power2.in",
    });
    gsap.to(popupOverlay, {
      autoAlpha: 0,
      duration: 0.4,
      delay: 0.2,
      onComplete: () => {
        if (window.lenis) window.lenis.start();
        document.body.style.overflow = "";
        sessionStorage.setItem("welcomePopupShown", "true");
      },
    });
  };

  if (closePopupBtn) closePopupBtn.addEventListener("click", closeWelcomePopup);
  if (explorePopupBtn) {
    explorePopupBtn.addEventListener("click", () => {
      closeWelcomePopup();
      setTimeout(() => {
        if (window.lenis) {
          lenis.scrollTo("#portfolio");
        } else {
          document
            .querySelector("#portfolio")
            .scrollIntoView({ behavior: "smooth" });
        }
      }, 600);
    });
  }

  // 1. INITIALIZE LENIS (SMOOTH SCROLLING)
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // NAV LINK SMOOTH SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");

      if (window.lenis) {
        if (target === "#top") {
          lenis.scrollTo(0);
        } else if (document.querySelector(target)) {
          lenis.scrollTo(target);
        }
      } else {
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

  gsap.set([cursorDot, cursorOutline], { force3D: true });

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    gsap.set(cursorDot, { x: posX, y: posY });
    gsap.to(cursorOutline, {
      x: posX,
      y: posY,
      duration: 0.15,
      ease: "power2.out",
    });
  });

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });

  // 3. CINEMATIC ON-LOAD ANIMATIONS (GSAP) - Only on Desktop load
  const isBotOrMobile =
    window.innerWidth < 768 ||
    /bot|googlebot|crawler|spider|robot|crawling|lighthouse|chrome-lighthouse/i.test(
      navigator.userAgent,
    );

  if (!isBotOrMobile) {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    window.mainHeroTl = tl;

    gsap.set(".line", { yPercent: 100 });
    gsap.set(".reveal-element", { y: 30, opacity: 0 });
    gsap.set(".hero__img", { scale: 1.1, opacity: 0 });
    gsap.set(".logo, .nav__item, .header .btn", { y: -20, opacity: 0 });

    tl.to(
      ".hero__img",
      { scale: 1, opacity: 1, duration: 2, ease: "power3.inOut" },
      0,
    )
      .to(
        ".logo, .nav__item, .header .btn",
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        0.5,
      )
      .to(
        ".line",
        { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "expo.out" },
        0.8,
      )
      .to(
        ".reveal-element",
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        1.2,
      );
  } else {
    gsap.set(".line", { yPercent: 0 });
    gsap.set(".reveal-element", { y: 0, opacity: 1 });
    gsap.set(".hero__img", { scale: 1, opacity: 1 });
    gsap.set(".logo, .nav__item, .header .btn", { y: 0, opacity: 1 });
  }
});

// =========================================
// 5. CONTINUOUS HOVER & FLOATING EFFECTS (ABOUT SECTION)
// =========================================

// Continuous Floating Animation for Adobe Icons
gsap.to(".icon-3d", {
  y: "-=15",
  rotationX: "+=10",
  rotationY: "+=10",
  yoyo: true,
  repeat: -1,
  duration: 2.5,
  ease: "sine.inOut",
  stagger: { each: 0.3, from: "random" },
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
    gsap.to(elem, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
  });
});

// =========================================
// 6. STATS COUNTER (Lightweight Vanilla JS)
// =========================================
const counters = document.querySelectorAll(".counter");
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const targetValue = parseInt(counter.getAttribute("data-target"));
      let count = 0;
      const duration = 2000; // 2 seconds animation
      const increment = targetValue / (duration / 16); // 60 FPS

      const updateCounter = () => {
        count += increment;
        if (count < targetValue) {
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = targetValue;
        }
      };
      updateCounter();
      observer.unobserve(counter); // Only run once
    }
  });
}, observerOptions);

counters.forEach((counter) => observer.observe(counter));

// =========================================
// 8. PORTFOLIO FILTERING LOGIC (Click based)
// =========================================
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio__card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) return;

    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");
    const filterTl = gsap.timeline();
    const visibleCards = Array.from(portfolioCards).filter(
      (card) => card.style.display !== "none",
    );

    if (visibleCards.length > 0) {
      filterTl.to(visibleCards, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          visibleCards.forEach((c) => (c.style.display = "none"));
        },
      });
    }

    const cardsToShow = Array.from(portfolioCards).filter((card) => {
      const category = card.getAttribute("data-category");
      return filterValue === "all" || filterValue === category;
    });

    filterTl.add(() => {
      cardsToShow.forEach((c) => {
        c.style.display = "block";
        gsap.set(c, { scale: 0.8, opacity: 0, y: 30 });
      });
    });

    filterTl.to(cardsToShow, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.2)",
      force3D: true,
    });
  });
});

// =========================================
// 21. PAGE TRANSITION (BRANDING PROJECTS)
// =========================================
const brandingBtn = document.getElementById("branding-transition-btn");

if (brandingBtn) {
  brandingBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const targetUrl = this.getAttribute("href");
    gsap.to(".page-transition-overlay", {
      y: "0%",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        window.location.href = targetUrl;
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const transitionOverlay = document.querySelector(".page-transition");
  setTimeout(() => {
    transitionOverlay.classList.add("loaded");
  }, 100);

  const transitionLinks = document.querySelectorAll(".transition-link");
  transitionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetUrl = this.href;
      transitionOverlay.classList.add("bottom-origin");
      transitionOverlay.classList.remove("loaded");
      transitionOverlay.classList.add("active");
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
  const container = document.getElementById("reveal-box");
  if (container) {
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
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
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      nav.classList.toggle("nav--open");
      if (nav.classList.contains("nav--open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

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
// 25. FIX: BACK BUTTON SCROLL RESTORATION & BLACK SCREEN
// =========================================
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("savedScrollPosition", window.scrollY);
});

window.addEventListener("pageshow", (event) => {
  const isBackNavigation =
    event.persisted ||
    (performance.getEntriesByType("navigation").length &&
      performance.getEntriesByType("navigation")[0].type === "back_forward");

  if (isBackNavigation) {
    const transitionOverlay = document.querySelector(".page-transition");
    if (transitionOverlay) {
      transitionOverlay.classList.remove("active", "bottom-origin");
      transitionOverlay.classList.add("loaded");
    }
    const gsapOverlay = document.querySelector(".page-transition-overlay");
    if (gsapOverlay) {
      gsap.set(gsapOverlay, { y: "100%", clearProps: "all" });
    }
  }

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
