/**
 * Data Array: Aapki Images
 */
const imageData = [
  "Thumbnail image/1.webp",
  "Thumbnail image/2.webp",
  "Thumbnail image/3.webp",
  "Thumbnail image/4.webp",
  "Thumbnail image/5.webp",
  "Thumbnail image/6.webp",
  "Thumbnail image/7.webp",
  "Thumbnail image/8.webp",
  "Thumbnail image/9.webp",
  "Thumbnail image/10.webp",
  "Thumbnail image/11.webp",
  "Thumbnail image/12.webp",
  "Thumbnail image/13.webp",
  "Thumbnail image/14.webp",
  "Thumbnail image/15.webp",
  "Thumbnail image/16.webp",
  "Thumbnail image/17.webp",
  "Thumbnail image/18.webp",
  "Thumbnail image/19.webp",
  "Thumbnail image/20.webp",
  "Thumbnail image/21.webp",
  "Thumbnail image/22.webp",
];

const galleryGrid = document.getElementById("gallery-grid");

// Loop to render all images directly into the grid
imageData.forEach((src) => {
  // Container
  const item = document.createElement("div");
  item.className = "storyboard-item";

  // Image element
  const img = new Image();
  img.src = src;
  img.loading = "lazy";
  img.decoding = "async";

  // Append to container (No text, only image)
  item.appendChild(img);
  galleryGrid.appendChild(item);
});
