// ==========================================================================
// ADVERTISING CREATIVES DESIGN - SECTION-BY-SECTION EDITORIAL SHOWCASE
// - 1 Mouse Scroll = 1 Section Snap (Snappy Section Locking)
// - Horizontal Cards Carousel with Circular Navigation Arrows
// - Clean Multi-Image Modal Carousel Viewer
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------------------------
    // 1. Projects Data (5 Distinct Sections)
    // ----------------------------------------------------------------------
    const adProjects = [
        // ==========================================
        // SECTION 01: PRODUCT ADVERTISING
        // ==========================================
        {
            id: "a1",
            trackId: "track-01",
            title: "AURA - SIGNATURE FRAGRANCE",
            images: [
                {
                    src: "images/product-ad-1.jpg",
                    caption: "Slide 01: Eau De Parfum full bottle visual with golden mist aura"
                },
                {
                    src: "images/product-ad-1-slide2.jpg",
                    caption: "Slide 02: Macro close-up of gold spray atomizer & vapor stream"
                },
                {
                    src: "images/product-ad-1.jpg",
                    caption: "Slide 03: Noir Edition – Dark marble luxury studio lighting"
                }
            ]
        },
        {
            id: "a2",
            trackId: "track-01",
            title: "SONIC X - SILENCE THE WORLD",
            images: [
                {
                    src: "images/product-ad-2.jpg",
                    caption: "Slide 01: Hero ad – Matte black headphones with cyan rim glow"
                },
                {
                    src: "images/product-ad-2-slide2.jpg",
                    caption: "Slide 02: Foldable travel companion with smart hardshell case"
                },
                {
                    src: "images/product-ad-2.jpg",
                    caption: "Slide 03: Studio Master – 40+ Hr battery life & touch sensors"
                }
            ]
        },
        {
            id: "a3",
            trackId: "track-01",
            title: "AURA GOLD - ATOMIZER EDITION",
            images: [
                {
                    src: "images/product-ad-1-slide2.jpg",
                    caption: "Slide 01: Precision gold atomization & luxury craftsmanship details"
                },
                {
                    src: "images/product-ad-1.jpg",
                    caption: "Slide 02: Prestige packaging visual with gold particle glow"
                }
            ]
        },
        {
            id: "a4",
            trackId: "track-01",
            title: "SONIC X PRO - STUDIO MASTER",
            images: [
                {
                    src: "images/product-ad-2-slide2.jpg",
                    caption: "Slide 01: Compact protective charging case & battery LED"
                },
                {
                    src: "images/product-ad-2.jpg",
                    caption: "Slide 02: Adaptive noise cancelling & acoustic driver architecture"
                }
            ]
        },
        {
            id: "a5",
            trackId: "track-01",
            title: "CYBER KICKS - ILLUMINATED RUNNER",
            images: [
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 01: Futuristic glowing neon sneaker with phone launch mockup"
                },
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 02: Integrated 360-degree commercial campaign board"
                },
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 03: Direct-response consumer commercial creative"
                }
            ]
        },

        // ==========================================
        // SECTION 02: PROMOTIONAL & OFFER ADS
        // ==========================================
        {
            id: "b1",
            trackId: "track-02",
            title: "MEGA SALE - UP TO 50% OFF",
            images: [
                {
                    src: "images/promo-ad-1.jpg",
                    caption: "Slide 01: 3D gold typography, confetti accents & Shop Now CTA"
                },
                {
                    src: "images/promo-ad-1-slide2.jpg",
                    caption: "Slide 02: Flash countdown – 'Deal Ends In 04:59:00' with FLASH20"
                },
                {
                    src: "images/promo-ad-2.jpg",
                    caption: "Slide 03: Doorbuster specials – Category discounts & gift tags"
                }
            ]
        },
        {
            id: "b2",
            trackId: "track-02",
            title: "BLACK FRIDAY - 70% OFF SPECIAL",
            images: [
                {
                    src: "images/promo-ad-2.jpg",
                    caption: "Slide 01: Luxury dark marble aesthetic with golden ribbon typography"
                },
                {
                    src: "images/promo-ad-1-slide2.jpg",
                    caption: "Slide 02: Doorbuster timer & flash voucher code"
                },
                {
                    src: "images/promo-ad-2.jpg",
                    caption: "Slide 03: Exclusive deals crest & private midnight access"
                }
            ]
        },
        {
            id: "b3",
            trackId: "track-02",
            title: "SUPER WEEKEND - 48H DEAL",
            images: [
                {
                    src: "images/promo-ad-1-slide2.jpg",
                    caption: "Slide 01: Floating 3D gift boxes with urgency countdown"
                },
                {
                    src: "images/promo-ad-1.jpg",
                    caption: "Slide 02: Retail promotion banner with instant coupon code"
                }
            ]
        },
        {
            id: "b4",
            trackId: "track-02",
            title: "CYBER WEEK - MIDNIGHT VIP",
            images: [
                {
                    src: "images/promo-ad-2.jpg",
                    caption: "Slide 01: Gold crest insignia with midnight exclusive release badge"
                },
                {
                    src: "images/promo-ad-1-slide2.jpg",
                    caption: "Slide 02: Limited-quantity doorbuster countdown"
                }
            ]
        },
        {
            id: "b5",
            trackId: "track-02",
            title: "FLASH VOUCHER - 40% OFF CODE",
            images: [
                {
                    src: "images/promo-ad-1.jpg",
                    caption: "Slide 01: Limited flash promotional banner with redeem code"
                },
                {
                    src: "images/promo-ad-2.jpg",
                    caption: "Slide 02: Midnight special offer luxury black & gold campaign"
                }
            ]
        },

        // ==========================================
        // SECTION 03: SERVICE & BUSINESS ADS
        // ==========================================
        {
            id: "c1",
            trackId: "track-03",
            title: "SCALE YOUR BUSINESS - AI & DATA",
            images: [
                {
                    src: "images/service-ad-1.jpg",
                    caption: "Slide 01: Holographic analytics charts, +45% ROI metric & strategy CTA"
                },
                {
                    src: "images/service-ad-2.jpg",
                    caption: "Slide 02: Commercial client case study – High-value asset advisory"
                },
                {
                    src: "images/service-ad-1.jpg",
                    caption: "Slide 03: Cloud architecture & enterprise predictive modeling"
                }
            ]
        },
        {
            id: "c2",
            trackId: "track-03",
            title: "INVEST IN LUXURY - RESIDENCES",
            images: [
                {
                    src: "images/service-ad-2.jpg",
                    caption: "Slide 01: Modern glass villa with infinity pool at dusk"
                },
                {
                    src: "images/service-ad-1.jpg",
                    caption: "Slide 02: Real estate yield analysis & capital growth performance"
                },
                {
                    src: "images/service-ad-2.jpg",
                    caption: "Slide 03: Private tour booking with prime skyline advisors"
                }
            ]
        },
        {
            id: "c3",
            trackId: "track-03",
            title: "ENTERPRISE CLOUD AUTOMATION",
            images: [
                {
                    src: "images/service-ad-1.jpg",
                    caption: "Slide 01: Enterprise data dashboard & automated workflows"
                },
                {
                    src: "images/service-ad-2.jpg",
                    caption: "Slide 02: High-net-worth institutional portfolio management"
                }
            ]
        },
        {
            id: "c4",
            trackId: "track-03",
            title: "HORIZON PENTHOUSE COLLECTION",
            images: [
                {
                    src: "images/service-ad-2.jpg",
                    caption: "Slide 01: Panoramic floor-to-ceiling skyline architecture"
                },
                {
                    src: "images/service-ad-1.jpg",
                    caption: "Slide 02: Luxury asset valuation metrics & market forecasts"
                }
            ]
        },
        {
            id: "c5",
            trackId: "track-03",
            title: "SKYLINE ADVISORY - PRIVATE TOUR",
            images: [
                {
                    src: "images/service-ad-2.jpg",
                    caption: "Slide 01: Private architecture & luxury residence investment"
                },
                {
                    src: "images/service-ad-1.jpg",
                    caption: "Slide 02: Capital growth metrics & ROI performance analytics"
                }
            ]
        },

        // ==========================================
        // SECTION 04: PERFORMANCE MARKETING
        // ==========================================
        {
            id: "d1",
            trackId: "track-04",
            title: "VOLT RUSH - FEEL THE RUSH",
            images: [
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 01: Direct-response hook – 'Tired of Low Energy?' 5-star social proof"
                },
                {
                    src: "images/performance-ad-2.jpg",
                    caption: "Slide 02: Problem vs. Solution – Desk clutter comparison angle"
                },
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 03: Action CTA – Claim 40% Off Today Guaranteed"
                }
            ]
        },
        {
            id: "d2",
            trackId: "track-04",
            title: "POWERLINK - DESK SETUP",
            images: [
                {
                    src: "images/performance-ad-2.jpg",
                    caption: "Slide 01: Split test visual – Tangled cables vs. 3-in-1 wireless hub"
                },
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 02: Social proof boost – Customer ratings & trust badges"
                },
                {
                    src: "images/performance-ad-2.jpg",
                    caption: "Slide 03: Conversion offer – 'Get 30% Off' with free shipping"
                }
            ]
        },
        {
            id: "d3",
            trackId: "track-04",
            title: "VOLT RUSH - FOCUS FORMULA",
            images: [
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 01: UGC-style gym athlete testimonial hook"
                },
                {
                    src: "images/performance-ad-2.jpg",
                    caption: "Slide 02: Wireless charging station product comparison"
                }
            ]
        },
        {
            id: "d4",
            trackId: "track-04",
            title: "POWERLINK - WIRELESS FREEDOM",
            images: [
                {
                    src: "images/performance-ad-2.jpg",
                    caption: "Slide 01: Multi-device dock for iPhone, Apple Watch & AirPods"
                },
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 02: 10,000+ satisfied customers guarantee"
                }
            ]
        },
        {
            id: "d5",
            trackId: "track-04",
            title: "VOLT RUSH - INSTANT POWER",
            images: [
                {
                    src: "images/performance-ad-1.jpg",
                    caption: "Slide 01: High-converting direct response energy creative"
                },
                {
                    src: "images/performance-ad-2.jpg",
                    caption: "Slide 02: Problem vs. Solution split-test visual"
                }
            ]
        },

        // ==========================================
        // SECTION 05: AD FORMATS & CAMPAIGNS
        // ==========================================
        {
            id: "e1",
            trackId: "track-05",
            title: "VOLT BLAST - 360 CAMPAIGN",
            images: [
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 01: Integrated campaign board – Billboard, desktop banner & story ad"
                },
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 02: Mobile 9:16 vertical story ad mockup with swipe-up link"
                },
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 03: Times Square dynamic outdoor LED billboard display"
                }
            ]
        },
        {
            id: "e2",
            trackId: "track-05",
            title: "CYBER SNEAKERS - DROP IS LIVE",
            images: [
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 01: Vertical story layout – Glowing neon sneaker with swipe up CTA"
                },
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 02: Full 360-degree digital and physical campaign kit"
                },
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 03: High engagement metrics – 25.3k shares and tag a friend"
                }
            ]
        },
        {
            id: "e3",
            trackId: "track-05",
            title: "VOLT BLAST - MULTI-DEVICE",
            images: [
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 01: Multi-screen deployment across mobile, desktop & OOH"
                },
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 02: High-converting smartphone vertical creative format"
                }
            ]
        },
        {
            id: "e4",
            trackId: "track-05",
            title: "CYBER SNEAKERS - MIDNIGHT",
            images: [
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 01: Limited-edition streetwear night visual"
                },
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 02: Omnichannel campaign rollout & packaging"
                }
            ]
        },
        {
            id: "e5",
            trackId: "track-05",
            title: "OMNICHANNEL - TIMES SQUARE LED",
            images: [
                {
                    src: "images/campaign-ad-1.jpg",
                    caption: "Slide 01: Dynamic outdoor LED billboard & retail display"
                },
                {
                    src: "images/campaign-ad-2.jpg",
                    caption: "Slide 02: Mobile swipe-up story creative asset"
                }
            ]
        }
    ];

    // ----------------------------------------------------------------------
    // 2. Render Editorial Cards Matching Reference Screenshot
    // ----------------------------------------------------------------------
    adProjects.forEach((proj) => {
        const track = document.getElementById(proj.trackId);
        if (!track) return;

        const card = document.createElement("div");
        card.className = "editorial-card";
        card.setAttribute("data-project-id", proj.id);

        const imgCountStr = (proj.images.length < 10 ? "0" : "") + proj.images.length + " IMAGES";

        card.innerHTML = `
            <div class="editorial-img-box">
                <img src="${proj.images[0].src}" alt="${proj.title}" loading="lazy">
            </div>
            <div class="editorial-card-info">
                <h4 class="editorial-card-title">${proj.title}</h4>
                <p class="editorial-card-count">${imgCountStr}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            openIgModal(proj, 0);
        });

        track.appendChild(card);
    });

    // ----------------------------------------------------------------------
    // 3. Horizontal Circular Arrows (Scroll Card Tracks)
    // ----------------------------------------------------------------------
    document.querySelectorAll(".circle-nav-arrow").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const targetTrackId = btn.getAttribute("data-target");
            const track = document.getElementById(targetTrackId);
            if (!track) return;

            const scrollAmount = track.offsetWidth * 0.75;
            if (btn.classList.contains("track-prev")) {
                track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                track.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 4. Section-by-Section Vertical Scroll Snap ("Ek Ek Section Dikhna Chahiye")
    // ----------------------------------------------------------------------
    const snapContainer = document.getElementById("snap-container");
    const sections = Array.from(document.querySelectorAll(".snap-section"));
    const progressDots = document.querySelectorAll(".progress-dot");
    const navIndicator = document.getElementById("nav-section-indicator");

    let currentSectionIndex = 0;
    let isScrollLocked = false;

    function goToSection(index) {
        if (index < 0 || index >= sections.length) return;
        isScrollLocked = true;
        currentSectionIndex = index;

        // Smoothly lock into target section
        sections[index].scrollIntoView({ behavior: "smooth" });
        updateActiveIndicators(index);

        // Debounce to ensure exact 1-step snap per mouse flick
        setTimeout(() => {
            isScrollLocked = false;
        }, 550);
    }

    function updateActiveIndicators(index) {
        progressDots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });

        if (navIndicator) {
            navIndicator.textContent = `0${index + 1} / 0${sections.length}`;
        }
    }

    // Precise Mouse Wheel Handling (Locks exactly 1 section per wheel flick)
    window.addEventListener("wheel", (e) => {
        // Do not intercept if modal is open
        if (modal && modal.classList.contains("active")) return;

        // Check if delta is vertical
        if (Math.abs(e.deltaY) > 10) {
            e.preventDefault();
            if (isScrollLocked) return;

            if (e.deltaY > 0) {
                // Wheel Down -> Next Section
                if (currentSectionIndex < sections.length - 1) {
                    goToSection(currentSectionIndex + 1);
                }
            } else {
                // Wheel Up -> Previous Section
                if (currentSectionIndex > 0) {
                    goToSection(currentSectionIndex - 1);
                }
            }
        }
    }, { passive: false });

    // Keyboard Arrow navigation (Up/Down)
    document.addEventListener("keydown", (e) => {
        if (modal && modal.classList.contains("active")) return;

        if (e.key === "ArrowDown" || e.key === "PageDown") {
            e.preventDefault();
            goToSection(currentSectionIndex + 1);
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
            e.preventDefault();
            goToSection(currentSectionIndex - 1);
        }
    });

    // Side Progress Dot Click
    progressDots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const idx = parseInt(dot.getAttribute("data-index"), 10);
            goToSection(idx);
        });
    });

    // IntersectionObserver to keep state synced if user touches/swipes on mobile
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const idx = parseInt(entry.target.getAttribute("data-index"), 10);
                if (!isNaN(idx) && !isScrollLocked) {
                    currentSectionIndex = idx;
                    updateActiveIndicators(idx);
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach((sec) => observer.observe(sec));

    // ----------------------------------------------------------------------
    // 5. Clean Multi-Image Modal Carousel (Zero Profile Header)
    // ----------------------------------------------------------------------
    const modal = document.getElementById("ig-modal");
    const backdrop = document.getElementById("ig-modal-backdrop");
    const closeBtn = document.getElementById("modal-close-btn");
    const modalCounter = document.getElementById("modal-counter");
    const modalSlideImg = document.getElementById("modal-slide-img");
    const modalPrevBtn = document.getElementById("modal-prev-btn");
    const modalNextBtn = document.getElementById("modal-next-btn");
    const modalDotsContainer = document.getElementById("modal-dots-container");
    const modalTitle = document.getElementById("modal-title");
    const modalCaption = document.getElementById("modal-caption");
    const modalThumbTray = document.getElementById("modal-thumb-tray");

    let currentProject = null;
    let currentSlide = 0;

    function openIgModal(project, initialSlide = 0) {
        currentProject = project;
        currentSlide = initialSlide;

        modalTitle.textContent = project.title;

        // Render Dots
        modalDotsContainer.innerHTML = "";
        project.images.forEach((_, idx) => {
            const dot = document.createElement("button");
            dot.className = "ig-dot" + (idx === currentSlide ? " active" : "");
            dot.setAttribute("aria-label", `Slide ${idx + 1}`);
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                goToSlide(idx);
            });
            modalDotsContainer.appendChild(dot);
        });

        // Render Thumbnails
        modalThumbTray.innerHTML = "";
        project.images.forEach((imgObj, idx) => {
            const thumb = document.createElement("div");
            thumb.className = "ig-thumb-item" + (idx === currentSlide ? " active" : "");
            thumb.innerHTML = `<img src="${imgObj.src}" alt="Thumb ${idx + 1}">`;
            thumb.addEventListener("click", (e) => {
                e.stopPropagation();
                goToSlide(idx);
            });
            modalThumbTray.appendChild(thumb);
        });

        updateModalView();

        // Open modal
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
    }

    function updateModalView() {
        if (!currentProject) return;

        const total = currentProject.images.length;
        const currentImgData = currentProject.images[currentSlide];

        modalSlideImg.src = currentImgData.src;
        modalSlideImg.alt = `${currentProject.title} - Slide ${currentSlide + 1}`;
        modalCounter.textContent = `${currentSlide + 1} / ${total}`;
        modalCaption.textContent = currentImgData.caption || `Slide ${currentSlide + 1} of ${total}`;

        // Hide prev on slide 0, hide next on last slide
        if (currentSlide === 0) {
            modalPrevBtn.classList.add("hidden");
        } else {
            modalPrevBtn.classList.remove("hidden");
        }

        if (currentSlide === total - 1) {
            modalNextBtn.classList.add("hidden");
        } else {
            modalNextBtn.classList.remove("hidden");
        }

        // Update Dots
        const dots = modalDotsContainer.querySelectorAll(".ig-dot");
        dots.forEach((d, idx) => {
            if (idx === currentSlide) {
                d.classList.add("active");
            } else {
                d.classList.remove("active");
            }
        });

        // Update Thumbnails
        const thumbs = modalThumbTray.querySelectorAll(".ig-thumb-item");
        thumbs.forEach((t, idx) => {
            if (idx === currentSlide) {
                t.classList.add("active");
            } else {
                t.classList.remove("active");
            }
        });
    }

    function goToSlide(index) {
        if (!currentProject) return;
        const total = currentProject.images.length;
        if (index < 0 || index >= total) return;
        currentSlide = index;
        updateModalView();
    }

    function closeIgModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        modalSlideImg.src = "";
        currentProject = null;
    }

    modalPrevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(currentSlide - 1);
    });

    modalNextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(currentSlide + 1);
    });

    closeBtn.addEventListener("click", closeIgModal);
    backdrop.addEventListener("click", closeIgModal);

    // Keyboard Navigation within modal
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;

        if (e.key === "ArrowLeft") {
            goToSlide(currentSlide - 1);
        } else if (e.key === "ArrowRight") {
            goToSlide(currentSlide + 1);
        } else if (e.key === "Escape") {
            closeIgModal();
        }
    });

    // Touch Swipe in Modal
    let touchStartX = 0;
    let touchEndX = 0;
    const sliderArea = document.getElementById("ig-slider-area");

    sliderArea.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderArea.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 40) {
            goToSlide(currentSlide + 1);
        } else if (touchEndX - touchStartX > 40) {
            goToSlide(currentSlide - 1);
        }
    }, { passive: true });
});
