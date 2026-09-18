document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // ADVERTISING IMAGES KA DATA
  // ==========================================
  // Aap yahan apni original Advertising images ka path daal sakte hain
  const adData = [
    {
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      title: "Ad Design 1",
    },
    {
      src: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
      title: "Ad Design 2",
    },
    {
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      title: "Ad Design 3",
    },
    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      title: "Ad Design 4",
    },
    {
      src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      title: "Ad Design 5",
    },
    {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      title: "Ad Design 6",
    },
    {
      src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      title: "Ad Design 7",
    },
    {
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
      title: "Ad Design 8",
    },
    {
      src: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&q=80",
      title: "Ad Design 9",
    },
    {
      src: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80",
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
