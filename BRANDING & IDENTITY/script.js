document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Data Setup ---
  // Yahan aap apni Branding images daal sakte hain
  const rawData = [
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
    { url: "images (1).jpg" },
  ];

  // Grid bharne ke liye data repeat kar rahe hain
  const galleryData = [...rawData, ...rawData, ...rawData];

  const container = document.querySelector(".gallery-container");

  // --- 2. Injecting Cards into the Grid ---
  galleryData.forEach((data) => {
    // Card Container
    const card = document.createElement("div");
    card.classList.add("card");

    // Image
    const img = new Image();
    img.src = data.url;
    img.alt = "Brand Image";
    img.loading = "lazy"; // Fast loading for performance
    img.decoding = "async";

    card.appendChild(img);
    container.appendChild(card);
  });
});
