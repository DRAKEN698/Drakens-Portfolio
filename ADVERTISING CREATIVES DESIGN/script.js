document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // ADVERTISING IMAGES KA DATA
  // ==========================================
  // Aap yahan apni original Advertising images ka path daal sakte hain
  const adData = [
    {
      src: "",
      title: "Ad Design 1",
    },
    {
      src: "",
      title: "Ad Design 2",
    },
    {
      src: "",
      title: "Ad Design 3",
    },
    {
      src: "",
      title: "Ad Design 4",
    },
    {
      src: "",
      title: "Ad Design 5",
    },
    {
      src: "",
      title: "Ad Design 6",
    },
    {
      src: "",
      title: "Ad Design 7",
    },
    {
      src: "",
      title: "Ad Design 8",
    },
    {
      src: "",
      title: "Ad Design 9",
    },
    {
      src: "",
      title: "Ad Design 10",
    },
  ];

  // Agar images kam hain aur screen pura bharna hai toh array ko 2-3 baar duplicate kar lijiye
  const fullGallery = [...adData, ...adData, ...adData];

  const galleryGrid = document.getElementById("advertising-grid");

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
