document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // POSTER IMAGES KA DATA
  // ==========================================
  // Aap yahan apni original Poster images ka path daal sakte hain
  const posterData = [
    {
      src: "",
      title: "Poster 1",
    },
    {
      src: "",
      title: "Poster 2",
    },
    {
      src: "",
      title: "Poster 3",
    },
    {
      src: "",
      title: "Poster 4",
    },
    {
      src: "",
      title: "Poster 5",
    },
    {
      src: "",
      title: "Poster 6",
    },
    {
      src: "",
      title: "Poster 7",
    },
    {
      src: "",
      title: "Poster 8",
    },
    {
      src: "",
      title: "Poster 9",
    },
    {
      src: "",
      title: "Poster 10",
    },
  ];

  // Agar images kam hain aur screen pura bharna hai toh duplicate kar sakte hain
  const fullGallery = [...posterData, ...posterData];

  const galleryGrid = document.getElementById("poster-grid");

  // Grid items generate karna
  fullGallery.forEach((itemData) => {
    // Container
    const item = document.createElement("div");
    item.className = "gallery-item";

    // Image
    const img = new Image();
    img.src = itemData.src;
    img.alt = itemData.title;
    img.loading = "lazy"; // Fast rendering
    img.decoding = "async"; // Smooth scrolling

    // Append image
    item.appendChild(img);
    galleryGrid.appendChild(item);
  });
});
