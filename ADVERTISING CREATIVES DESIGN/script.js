document.addEventListener("DOMContentLoaded", () => {
  // 1. Data (Main Card Image + Andar ka Grid Images)
  const galleryData = [
    {
      title: "PRODUCT ADS",
      subtitle: "12 CREATIVES",
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      // Ye images us grid mein dikhengi jab user is section par click karega
      innerImages: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=600&auto=format&fit=crop",
      ],
    },
    {
      title: "PROMO & OFFERS",
      subtitle: "09 CREATIVES",
      src: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
      innerImages: [
        "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555529771-835f59bfc50c?q=80&w=600&auto=format&fit=crop",
      ],
    },
    {
      title: "SERVICE ADS",
      subtitle: "20 CREATIVES",
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      innerImages: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600&auto=format&fit=crop",
      ],
    },
    {
      title: "PERFORMANCE",
      subtitle: "15 CREATIVES",
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
      innerImages: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
      ],
    },
    {
      title: "CAMPAIGNS",
      subtitle: "08 CREATIVES",
      src: "https://images.unsplash.com/photo-1534353436294-08d4dc8c6ebc?q=80&w=800&auto=format&fit=crop",
      innerImages: [
        "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop",
      ],
    },
  ];

  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const gridModal = document.getElementById("grid-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalGridContent = document.getElementById("modal-grid-content");

  // 2. Main Page mein Horizontal Cards Render karna
  galleryData.forEach((item, index) => {
    const cardHTML = `
              <div class="grid-item" data-index="${index}">
                  <div class="grid-image-wrap">
                      <img src="${item.src}" alt="${item.title}">
                  </div>
                  <div class="grid-info">
                      <h3 class="grid-title">${item.title}</h3>
                      <p class="grid-subtitle">${item.subtitle}</p>
                  </div>
              </div>
          `;
    track.insertAdjacentHTML("beforeend", cardHTML);
  });

  // 3. Arrow Buttons Scrolling Logic
  const scrollAmount = 300;

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // 4. Modal (Grid Popup) Open aur Close Logic
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("click", function () {
      const idx = this.getAttribute("data-index");
      const selectedData = galleryData[idx];

      // Set Title
      modalTitle.textContent = selectedData.title;

      // Generate Grid Images
      modalGridContent.innerHTML = ""; // Pehle ki images clear karo
      selectedData.innerImages.forEach((imgSrc) => {
        modalGridContent.innerHTML += `<img src="${imgSrc}" loading="lazy" alt="Grid Image">`;
      });

      // Show Modal
      gridModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Main page ka scroll band kardo
    });
  });

  // Close Modal by clicking 'X'
  closeModalBtn.addEventListener("click", () => {
    gridModal.classList.remove("active");
    document.body.style.overflow = ""; // Main page ka scroll wapas chalu karo
  });
});
