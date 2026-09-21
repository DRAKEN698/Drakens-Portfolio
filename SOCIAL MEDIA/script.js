document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // SOCIAL MEDIA IMAGES KA DATA
  // ==========================================
  // Aap yahan apni original local images ka path daal sakte hain
  const socialData = [
    {
      src: "",
      title: "Social Design 1",
    },
    {
      src: "",
      title: "Social Design 2",
    },
    {
      src: "",
      title: "Social Design 3",
    },
    {
      src: "",
      title: "Social Design 4",
    },
    {
      src: "",
      title: "Social Design 5",
    },
    {
      src: "",
      title: "Social Design 6",
    },
    {
      src: "",
      title: "Social Design 7",
    },
    {
      src: "",
      title: "Social Design 8",
    },
    {
      src: "",
      title: "Social Design 9",
    },
    {
      src: "",
      title: "Social Design 10",
    },
  ];

  // Agar images kam hain aur pura screen cover karna hai toh duplicate kar sakte hain
  const fullGallery = [...socialData, ...socialData];

  const galleryGrid = document.getElementById("social-grid");

  // Grid item banana aur append karna
  fullGallery.forEach((itemData) => {
    // Container
    const item = document.createElement("div");
    item.className = "gallery-item";

    // Image
    const img = new Image();
    img.src = itemData.src;
    img.alt = itemData.title;
    img.loading = "lazy"; // Fast loading
    img.decoding = "async"; // Prevent lag

    // Append image
    item.appendChild(img);
    galleryGrid.appendChild(item);
  });
});
