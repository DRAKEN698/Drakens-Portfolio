document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // SOCIAL MEDIA IMAGES KA DATA
  // ==========================================
  // Aap yahan apni original local images ka path daal sakte hain
  const socialData = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 1",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 2",
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 3",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 4",
    },
    {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 5",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 6",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 7",
    },
    {
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 8",
    },
    {
      src: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=800&q=80",
      title: "Social Design 9",
    },
    {
      src: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80",
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
