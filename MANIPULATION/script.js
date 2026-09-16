document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // APKI IMAGES KA DATA
  // ==========================================
  const myGalleryData = [
    { src: "MANIPULATION image/Toxic.webp", title: "Toxic" },
    { src: "MANIPULATION image/Devil.webp", title: "Devil" },
    {
      src: "MANIPULATION image/attack on titan.webp",
      title: "Attack on Titan",
    },
    { src: "MANIPULATION image/DOOM.webp", title: "DooM" },
    { src: "MANIPULATION image/HOF.webp", title: "HoF" },
    { src: "MANIPULATION image/Resident evil.webp", title: "Resident Evil" },
    { src: "MANIPULATION image/Ghost Rider.webp", title: "Ghost Rider" },
    { src: "MANIPULATION image/Naruto.webp", title: "Naruto" },
    { src: "MANIPULATION image/Mario.webp", title: "Mario" },
    { src: "MANIPULATION image/Untitled-3.webp", title: "Unownable" },
    { src: "MANIPULATION image/Space.webp", title: "Space" },
    { src: "MANIPULATION image/smile.webp", title: "Smile" },
    { src: "MANIPULATION image/Robin.webp", title: "Robin" },
    { src: "MANIPULATION image/GAMBIT.webp", title: "GAMBIT" },
    { src: "MANIPULATION image/CAPTAIN.webp", title: "CAPTAIN" },
    { src: "MANIPULATION image/Sang Chi.webp", title: "Sang Chi" },
    { src: "MANIPULATION image/Iceman.webp", title: "Iceman" },
    { src: "MANIPULATION image/Akuma.webp", title: "Akuma" },
    { src: "MANIPULATION image/Kraven.webp", title: "Kraven" },
    { src: "MANIPULATION image/AQ Man.webp", title: "AQ Man" },
    { src: "MANIPULATION image/Magneto.webp", title: "Magneto" },
    
  ];

  const galleryGrid = document.getElementById("gallery-grid");

  // Har image ke liye Grid item banana
  myGalleryData.forEach((itemData) => {
    // Container
    const item = document.createElement("div");
    item.className = "gallery-item";

    // Image
    const img = new Image();
    img.src = itemData.src;
    img.alt = itemData.title;
    img.loading = "lazy"; // Fast loading
    img.decoding = "async"; // Prevent scroll lag

    // Append image to item, then item to grid
    item.appendChild(img);
    galleryGrid.appendChild(item);
  });
});
