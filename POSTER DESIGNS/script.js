document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // POSTER IMAGES KA DATA
  // ==========================================
  // Aap yahan apni original Poster images ka path daal sakte hain
  const posterData = [
    {
      src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
      title: "Poster 1",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800",
      title: "Poster 2",
    },
    {
      src: "https://images.unsplash.com/photo-1544253303-34e819b16ea9?q=80&w=800",
      title: "Poster 3",
    },
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
      title: "Poster 4",
    },
    {
      src: "https://images.unsplash.com/photo-1530973428-5eb2cad62aaf?q=80&w=800",
      title: "Poster 5",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      title: "Poster 6",
    },
    {
      src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800",
      title: "Poster 7",
    },
    {
      src: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=800",
      title: "Poster 8",
    },
    {
      src: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?q=80&w=800",
      title: "Poster 9",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
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
