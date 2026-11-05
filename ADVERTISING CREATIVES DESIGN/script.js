document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // SECTION DATA WITH SUB-CARDS & MULTIPLE SWIPEABLE IMAGES
  // ==========================================================================

// ==========================================================================
// 💡 HOW TO ADD YOUR OWN IMAGES (APNI IMAGE KAISE DALEIN):
// --------------------------------------------------------------------------
// 1. Agar local image dalni hai:
//    Apni photo ko "images" folder me rakhein (e.g. images/my-photo.jpg)
//    aur code me likhein:
//    src: "images/my-photo.jpg"
//
// 2. Agar multi-image slider me dalni hai:
//    images: [
//      "images/my-photo-1.jpg",
//      "images/my-photo-2.jpg",
//      "images/my-photo-3.jpg",
//      "images/my-photo-4.jpg"
//    ]
//
// 3. Agar online link dalna hai to pura URL likhein:
//    src: "https://your-domain.com/photo.jpg"
// ==========================================================================

  // 1. Data for Section 01: ADVERTISING
  const advertisingData = [
    {
      title: " SWEETS & SNACKS ADVERTISING ",
      subtitle: "5 CATEGORIES • 35 COLLECTIONS",
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      categories: [
        {
          id: "ice-cream-advertising",
          badge: "CATEGORY 01",
          title: "Ice Cream Cups Advertising Poster",
          cards: [
            {
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 10_48AM.jpg",
                },
              ],
            },
            {
              title: "ORGANIC BOTANICAL ESSENCE",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 10_51AM.jpg",
                },
              ],
            },
            {
              title: "DERMA NOURISHING MOISTURIZER",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 10_57AM.jpg",
                },
              ],
            },
            {
              title: "AESTHETIC SPA & FACE CARE",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 11_02AM.jpg",
                },
              ],
            },
            {
              title: "MINIMALIST FACIAL CLEANSER",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 11_12AM.jpg",
                },
              ],
            },
            {
              title: "PURE VITAMIN C ESSENTIALS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 11_18AM.jpg",
                },
              ],
            },
            {
              title: "HYDRATION MIST & BOTANICALS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 11_21AM.jpg",
                },
              ],
            },
            {
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 12_01PM.jpg",
                },
              ],
            },
            {
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 12_09PM.jpg",
                },
              ],
            },
            {
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 12_13PM.jpg",
                },
              ],
            },
            {
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Generated Image November 05, 2026 - 12_15PM.jpg",
                },
              ],
            },
            {
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                {
                  src: "Premium & Gourmet Ice Cream/Rio Grande Raspberry Sorbet Splash.png",
                },
              ],
            },
          ],
        },

        // END OF BEAUTY AND SKIN CARE

        {
          id: "ice-cream-advertising",
          badge: "CATEGORY 02",
          title: "Ice Cream Cones Advertising Poster",
          cards: [
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Cornetto Chocolate Swirl Bouquet.png",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Cornetto Mermaid_ Experience the Magic.png",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Gemini_Generated_Image_9e2se19e2se19e2s.png",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 01, 2026 - 7_53PM.jpg",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 01, 2026 - 8_35PM.jpg",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 02, 2026 - 12_01AM.jpg",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 05, 2026 - 1_23PM.jpg",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 05, 2026 - 1_30PM.jpg",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 05, 2026 - 1_43PM.jpg",
                },
              ],
            },
            {
              images: [
                {
                  src: "ICE CREAM Cons ADVERTISING POSTER/Generated Image November 05, 2026 - 1_57PM.jpg",
                },
              ],
            },
          ],
        },
        {
          // ==========================================================================
          // 🍰 CATEGORY 03: Food, Sweets & Snacks Poster
          // 💡 APNI IMAGES KAISE DALEIN:
          // 1. Single Image (No Arrows / Dots):
          //    images: [
          //      { src: "Food, Sweets & Snacks Poster/my-image.jpg" }
          //    ]
          // 2. Multi-image Slider:
          //    images: [
          //      "Food, Sweets & Snacks Poster/img-1.jpg",
          //      "Food, Sweets & Snacks Poster/img-2.jpg"
          //    ]
          // ==========================================================================
          id: "food-sweets-snacks-part2",
          badge: "CATEGORY 03",
          title: "Food, Sweets & Snacks Poster",
          cards: [
            {
              title: "ARTISANAL CAKES & PASTRIES",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "TRADITIONAL & LUXURY SWEETS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "CRUNCHY SAVORY SNACKS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1621996346565-e3d5d628169b?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "GOURMET STREET FOOD & TACOS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "HANDCRAFTED ICE CREAM & GELATO",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "CHOCOLATE & TRUFFLE DELIGHTS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "FRESH JUICES & BEVERAGE COMPANIONS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "SWEET BAKERY & COOKIES",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "DELUXE WAFFLES & PANCAKES",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1528198691077-709f609e6a70?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "PREMIUM SNACK PLATTERS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "Food, Sweets & Snacks Poster/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
              ],
            },
          ],
        },
        {
          id: "tech-gadgets",
          badge: "CATEGORY 04",
          title: "Tech, Gadgets & Audio Electronics Poster",
          cards: [
            {
              title: "AUDIO & SOUND EXPERIENCE",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "TRUE WIRELESS EARBUDS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "FLAGSHIP SMARTPHONE LAUNCH",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "MINIMALIST WORKSPACE ACCESSORIES",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "MECHANICAL KEYBOARD & SETUP",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "STUDIO MONITOR ACOUSTICS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "HIGH-PERFORMANCE TECH GADGETS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
              ],
            },
          ],
        },
        {
          id: "luxury-watches",
          badge: "CATEGORY 05",
          title: "Luxury Watches & Premium Accessories Poster",
          cards: [
            {
              title: "MINIMALIST WATCH SERIES",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "CHRONO BLACK AUTOMATIC",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "LUXURY LEATHER HERITAGE",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "PRECISION DIAL & JEWELRY",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "ELEGANT GOLD CHRONOMETER",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "SWISS TITANIUM DIVER WATCH",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
              ],
            },
            {
              title: "CLASSIC ARTISAN LEATHER STRAPS",
              subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
                "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "PROMO & OFFERS",
      subtitle: "09 CREATIVES",
      src: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "FLASH WEEKEND SALE",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "SEASONAL DISCOUNTS",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "BUNDLED VALUE PACKS",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507764983913-ae817c385072?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "SERVICE ADS",
      subtitle: "20 CREATIVES",
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "CREATIVE STRATEGY LAB",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "ENTERPRISE WORKSPACE",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "BUSINESS CONSULTING & TECH",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "PERFORMANCE",
      subtitle: "15 CREATIVES",
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "DATA & ANALYTICS DASHBOARDS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "GROWTH ACQUISITION ADS",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "CAMPAIGNS",
      subtitle: "08 CREATIVES",
      src: "https://images.unsplash.com/photo-1534353436294-08d4dc8c6ebc?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "GLOBAL URBAN LAUNCH",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "DIGITAL IDENTITY ROLLOUT",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
          src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
          images: [
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
  ];

  // 2. Data for Section 02: PROMOTIONAL & OFFER ADS
  const promotionalOffersData = [
    {
      title: "FLASH SALE ADS",
      subtitle: "14 CREATIVES",
      src: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "24-HOUR COUNTDOWN DROP",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "STOREWIDE CLEARANCE",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "DISCOUNT & DEALS",
      subtitle: "18 CREATIVES",
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "VIP MEMBER REWARDS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "SEASONAL OFFERS",
      subtitle: "10 CREATIVES",
      src: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "HOLIDAY COLLECTION SPECIALS",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "BUNDLE CAMPAIGNS",
      subtitle: "16 CREATIVES",
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "MULTI-PRODUCT COMBO",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507764983913-ae817c385072?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "SPECIAL PROMOTIONS",
      subtitle: "12 CREATIVES",
      src: "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "LIMITED EDITION LAUNCH",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
  ];

  // 3. Data for Section 03: SERVICE & BUSINESS ADS
  const serviceBusinessData = [
    {
      title: "CORPORATE BRANDING",
      subtitle: "16 CREATIVES",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "IDENTITY DESIGN SYSTEMS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "AGENCY & CONSULTING",
      subtitle: "22 CREATIVES",
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "GLOBAL TALENT & STRATEGY",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "TECH & SAAS SOLUTIONS",
      subtitle: "18 CREATIVES",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "CLOUD PLATFORM SUITE",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "FINANCE & GROWTH",
      subtitle: "14 CREATIVES",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "CAPITAL & INVESTMENT SOLUTIONS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "B2B MARKETING",
      subtitle: "20 CREATIVES",
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "LEAD GENERATION SYSTEM",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
  ];

  // 4. Data for Section 04: PERFORMANCE MARKETING CREATIVES
  const performanceMarketingData = [
    {
      title: "CONVERSION ADS",
      subtitle: "24 CREATIVES",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "HIGH-CONVERTING FUNNELS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "META & INSTAGRAM ADS",
      subtitle: "30 CREATIVES",
      src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "INSTAGRAM REELS & FEED ADS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "RETARGETING CAMPAIGNS",
      subtitle: "18 CREATIVES",
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "ABANDONED CART RECOVERY",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "UGC & TIKTOK ADS",
      subtitle: "25 CREATIVES",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "VIRAL UGC HOOKS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "GROWTH FUNNELS",
      subtitle: "15 CREATIVES",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "SCALING ARCHITECTURE",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
  ];

  // 5. Data for Section 05: AD FORMATS & CAMPAIGNS
  const adFormatsCampaignsData = [
    {
      title: "CAROUSEL ADS",
      subtitle: "18 CREATIVES",
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "MULTI-CARD NARRATIVE",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "VIDEO & REELS ADS",
      subtitle: "22 CREATIVES",
      src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "CINEMATIC VERTICAL ADS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "BANNER & DISPLAY",
      subtitle: "14 CREATIVES",
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "HIGH-IMPACT BILLBOARDS",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "STORY FORMATS",
      subtitle: "20 CREATIVES",
      src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "IMMERSIVE MOBILE STORIES",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555529771-835f59bfc50c?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
    {
      title: "OMNICHANNEL CAMPAIGNS",
      subtitle: "16 CREATIVES",
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "INTEGRATED 360 LAUNCH",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
              src: "images/product-ad-1.jpg", // <-- [SRC TAG]: Apni image ka path yahan dalein (e.g. "images/my-image.jpg" ya URL)
              images: [
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
          ],
        },
      ],
    },
  ];

  // Modal Elements
  const gridModal = document.getElementById("grid-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalGridContent = document.getElementById("modal-grid-content");

  // Lightbox Elements
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxTrack = document.getElementById("lightbox-track");
  const lightboxInfo = document.getElementById("lightbox-info");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  let lightboxCurrentIndex = 0;
  let lightboxImages = [];

  // ==========================================================================
  // SWIPE ENGINE FACTORY FOR SUB-CARDS (IMAGES ONLY - TEXT REMOVED)
  // ==========================================================================
  function createSwipeCard(cardData, categoryTitle) {
    // ------------------------------------------------------------------------
    // IMAGE SOURCE (SRC) RESOLVER
    // Supports:
    // 1. cardData.src: "path/to/image.jpg"
    // 2. cardData.images: ["path/1.jpg", "path/2.jpg"]
    // 3. cardData.images: [{ src: "path/1.jpg" }, { src: "path/2.jpg" }]
    // ------------------------------------------------------------------------
    let rawList = [];
    if (cardData.images && Array.isArray(cardData.images) && cardData.images.length > 0) {
      rawList = cardData.images;
    } else if (cardData.src) {
      rawList = [cardData.src];
    } else {
      rawList = ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"];
    }

    const images = rawList
      .map((item) => {
        if (!item) return "";
        if (typeof item === "string") {
          let s = item.trim();
          if (s.toLowerCase().startsWith("src:")) {
            s = s.substring(4).trim();
          }
          return s;
        }
        if (typeof item === "object" && item && item.src) {
          return item.src.trim();
        }
        return String(item).trim();
      })
      .filter((s) => s && s !== "img" && s !== "Beauty");

    if (images.length === 0) {
      images.push(cardData.src || "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=800&auto=format&fit=crop");
    }

    const card = document.createElement("div");
    card.className = "sub-card";

    // CHECK IF SINGLE IMAGE OR MULTIPLE IMAGES
    const hasMultipleImages = images.length > 1;
    if (hasMultipleImages) {
      card.classList.add("has-multiple-images");
    } else {
      card.classList.add("is-single-image");
    }

    const slider = document.createElement("div");
    slider.className = "sub-card-slider";
    if (hasMultipleImages) {
      slider.classList.add("has-multiple-images");
    } else {
      slider.classList.add("is-single-image");
    }

    // Track for sliding
    const track = document.createElement("div");
    track.className = "sub-card-track";

    images.forEach((imgSrc, idx) => {
      const slide = document.createElement("div");
      slide.className = "sub-card-slide";
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `${cardData.title || "Creative"} - Image ${idx + 1}`;
      img.loading = "lazy";
      img.draggable = false;
      slide.appendChild(img);
      track.appendChild(slide);
    });

    slider.appendChild(track);

    let currentSlide = 0;
    const totalSlides = images.length;
    let dragDistance = 0;

    // ------------------------------------------------------------------------
    // CAROUSEL NAVIGATION ARROWS & DOTS:
    // ONLY CREATED IF THERE ARE MULTIPLE IMAGES!
    // IF SINGLE IMAGE -> NO ARROWS, NO DOTS, NO SLIDER GESTURES!
    // ------------------------------------------------------------------------
    if (hasMultipleImages) {
      // Navigation Arrows
      const prevBtn = document.createElement("button");
      prevBtn.className = "sub-card-arrow prev";
      prevBtn.innerHTML = "&#10094;";
      prevBtn.setAttribute("aria-label", "Previous image");

      const nextBtn = document.createElement("button");
      nextBtn.className = "sub-card-arrow next";
      nextBtn.innerHTML = "&#10095;";
      nextBtn.setAttribute("aria-label", "Next image");

      slider.appendChild(prevBtn);
      slider.appendChild(nextBtn);

      // Dots Container
      const dotsContainer = document.createElement("div");
      dotsContainer.className = "sub-card-dots";
      const dots = [];

      images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = `sub-card-dot ${i === 0 ? "active" : ""}`;
        dot.setAttribute("data-slide", i);
        dotsContainer.appendChild(dot);
        dots.push(dot);

        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          goToSlide(i);
        });
      });

      slider.appendChild(dotsContainer);

      function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        currentSlide = index;

        track.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentSlide);
        });
      }

      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
      });

      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
      });

      // Touch Swipe Gestures
      let touchStartX = 0;
      let touchStartY = 0;
      let touchDeltaX = 0;
      let isHorizontalGesture = null;

      slider.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches.length !== 1) return;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchDeltaX = 0;
          isHorizontalGesture = null;
          track.style.transition = "none";
        },
        { passive: true },
      );

      slider.addEventListener(
        "touchmove",
        (e) => {
          if (e.touches.length !== 1) return;
          const currentX = e.touches[0].clientX;
          const currentY = e.touches[0].clientY;
          touchDeltaX = currentX - touchStartX;
          const deltaY = currentY - touchStartY;

          if (isHorizontalGesture === null) {
            if (Math.abs(touchDeltaX) > 8 || Math.abs(deltaY) > 8) {
              isHorizontalGesture = Math.abs(touchDeltaX) > Math.abs(deltaY);
            }
          }

          if (isHorizontalGesture) {
            if (e.cancelable) e.preventDefault();
            const baseOffset = -currentSlide * 100;
            const pxOffset = (touchDeltaX / slider.offsetWidth) * 100;
            track.style.transform = `translateX(${baseOffset + pxOffset}%)`;
          }
        },
        { passive: false },
      );

      slider.addEventListener("touchend", () => {
        if (isHorizontalGesture && Math.abs(touchDeltaX) > 35) {
          if (touchDeltaX < 0) {
            goToSlide(currentSlide + 1);
          } else {
            goToSlide(currentSlide - 1);
          }
        } else {
          goToSlide(currentSlide);
        }
        isHorizontalGesture = null;
        touchDeltaX = 0;
      });

      // Mouse Drag Gestures
      let isMouseDown = false;
      let mouseStartX = 0;
      let mouseDeltaX = 0;

      slider.addEventListener("mousedown", (e) => {
        if (
          e.target.closest(".sub-card-arrow") ||
          e.target.closest(".sub-card-dots")
        )
          return;
        isMouseDown = true;
        mouseStartX = e.clientX;
        mouseDeltaX = 0;
        dragDistance = 0;
        slider.classList.add("is-dragging");
        track.style.transition = "none";
      });

      window.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        mouseDeltaX = e.clientX - mouseStartX;
        dragDistance = Math.abs(mouseDeltaX);
        const baseOffset = -currentSlide * 100;
        const pxOffset = (mouseDeltaX / slider.offsetWidth) * 100;
        track.style.transform = `translateX(${baseOffset + pxOffset}%)`;
      });

      window.addEventListener("mouseup", () => {
        if (!isMouseDown) return;
        isMouseDown = false;
        slider.classList.remove("is-dragging");

        if (dragDistance > 40) {
          if (mouseDeltaX < 0) {
            goToSlide(currentSlide + 1);
          } else {
            goToSlide(currentSlide - 1);
          }
        } else {
          goToSlide(currentSlide);
        }
        dragDistance = 0;
        mouseDeltaX = 0;
      });
    }

    card.appendChild(slider);

    // CLICK TO EXPAND IN LIGHTBOX
    slider.addEventListener("click", (e) => {
      if (
        e.target.closest(".sub-card-arrow") ||
        e.target.closest(".sub-card-dots") ||
        dragDistance > 8
      ) {
        return;
      }
      openLightbox(
        images,
        currentSlide,
        `${categoryTitle}${cardData.title ? ` • ${cardData.title}` : ""}`,
      );
    });

    return card;
  }

  // ==========================================================================
  // LIGHTBOX MULTI-IMAGE FULLSCREEN SWIPER
  // ==========================================================================
  function openLightbox(images, startIndex, titleText) {
    lightboxImages = images;
    lightboxCurrentIndex = startIndex || 0;
    lightboxInfo.textContent = titleText || "CREATIVE PREVIEW";

    const hasMultiple = images.length > 1;
    if (lightboxPrev && lightboxNext) {
      lightboxPrev.style.display = hasMultiple ? "flex" : "none";
      lightboxNext.style.display = hasMultiple ? "flex" : "none";
    }
    if (lightboxCounter) {
      lightboxCounter.style.display = hasMultiple ? "block" : "none";
    }

    lightboxTrack.innerHTML = "";
    images.forEach((src, idx) => {
      const slide = document.createElement("div");
      slide.className = "lightbox-slide";
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Creative Image ${idx + 1}`;
      slide.appendChild(img);
      lightboxTrack.appendChild(slide);
    });

    updateLightboxSlide();
    lightboxModal.classList.add("active");
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
  }

  function updateLightboxSlide() {
    if (lightboxCurrentIndex < 0) lightboxCurrentIndex = 0;
    if (lightboxCurrentIndex >= lightboxImages.length)
      lightboxCurrentIndex = lightboxImages.length - 1;

    lightboxTrack.style.transition =
      "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    lightboxTrack.style.transform = `translateX(-${lightboxCurrentIndex * 100}%)`;
    lightboxCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxImages.length}`;
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightboxPrev.addEventListener("click", () => {
    if (lightboxCurrentIndex > 0) {
      lightboxCurrentIndex--;
      updateLightboxSlide();
    }
  });

  lightboxNext.addEventListener("click", () => {
    if (lightboxCurrentIndex < lightboxImages.length - 1) {
      lightboxCurrentIndex++;
      updateLightboxSlide();
    }
  });

  // Touch Swipe for Lightbox
  let lbTouchStartX = 0;
  let lbDeltaX = 0;

  lightboxTrack.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length !== 1) return;
      lbTouchStartX = e.touches[0].clientX;
      lbDeltaX = 0;
      lightboxTrack.style.transition = "none";
    },
    { passive: true },
  );

  lightboxTrack.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length !== 1) return;
      lbDeltaX = e.touches[0].clientX - lbTouchStartX;
      const baseOffset = -lightboxCurrentIndex * 100;
      const pxOffset = (lbDeltaX / lightboxTrack.offsetWidth) * 100;
      lightboxTrack.style.transform = `translateX(${baseOffset + pxOffset}%)`;
    },
    { passive: true },
  );

  lightboxTrack.addEventListener("touchend", () => {
    if (Math.abs(lbDeltaX) > 40) {
      if (lbDeltaX < 0 && lightboxCurrentIndex < lightboxImages.length - 1) {
        lightboxCurrentIndex++;
      } else if (lbDeltaX > 0 && lightboxCurrentIndex > 0) {
        lightboxCurrentIndex--;
      }
    }
    updateLightboxSlide();
    lbDeltaX = 0;
  });

  // ==========================================================================
  // OPEN MODAL WITH SUB-CARDS & CATEGORIES
  // ==========================================================================
  const modalCategoryNav = document.getElementById("modal-category-nav");
  let modalScrollHandler = null;

  function openModal(item) {
    modalTitle.textContent = item.title;
    if (modalSubtitle) {
      modalSubtitle.textContent = item.subtitle || "FEATURED CAMPAIGNS";
    }
    modalGridContent.innerHTML = "";
    gridModal.scrollTop = 0;

    // Clean up previous scroll handler if any
    if (modalScrollHandler) {
      gridModal.removeEventListener("scroll", modalScrollHandler);
      modalScrollHandler = null;
    }

    // CHECK IF ITEM HAS CATEGORIES (e.g. PRODUCT ADS with 5 sections)
    if (item.categories && item.categories.length > 0) {
      modalGridContent.classList.add("categorized-mode");

      if (modalCategoryNav) {
        modalCategoryNav.innerHTML = "";
        modalCategoryNav.style.display = "flex";

        // ALL POSTERS pill
        const allPill = document.createElement("button");
        allPill.className = "category-nav-pill active";
        allPill.textContent = "ALL POSTERS";
        allPill.addEventListener("click", () => {
          modalCategoryNav
            .querySelectorAll(".category-nav-pill")
            .forEach((p) => p.classList.remove("active"));
          allPill.classList.add("active");
          gridModal.scrollTo({ top: 0, behavior: "smooth" });
        });
        modalCategoryNav.appendChild(allPill);

        // Individual category pills
        item.categories.forEach((cat, idx) => {
          const pill = document.createElement("button");
          pill.className = "category-nav-pill";
          pill.setAttribute("data-target", `cat-section-${idx}`);
          pill.textContent = cat.title;
          pill.addEventListener("click", () => {
            modalCategoryNav
              .querySelectorAll(".category-nav-pill")
              .forEach((p) => p.classList.remove("active"));
            pill.classList.add("active");
            const targetSec = document.getElementById(`cat-section-${idx}`);
            if (targetSec) {
              targetSec.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });
          modalCategoryNav.appendChild(pill);
        });

        // Scroll spy to highlight active category pill
        modalScrollHandler = () => {
          const scrollPos = gridModal.scrollTop;
          const sections = modalGridContent.querySelectorAll(
            ".modal-category-section",
          );
          let currentActiveId = null;

          if (scrollPos < 120) {
            currentActiveId = "ALL";
          } else {
            sections.forEach((sec) => {
              const top = sec.offsetTop - 200;
              if (scrollPos >= top) {
                currentActiveId = sec.id;
              }
            });
          }

          modalCategoryNav
            .querySelectorAll(".category-nav-pill")
            .forEach((pill) => {
              if (currentActiveId === "ALL") {
                pill.classList.toggle("active", pill === allPill);
              } else {
                pill.classList.toggle(
                  "active",
                  pill.getAttribute("data-target") === currentActiveId,
                );
              }
            });
        };

        gridModal.addEventListener("scroll", modalScrollHandler, {
          passive: true,
        });
      }

      // Render each category section with Carousel Navigation Arrows!
      item.categories.forEach((cat, idx) => {
        const sectionEl = document.createElement("div");
        sectionEl.className = "modal-category-section";
        sectionEl.id = `cat-section-${idx}`;

        const headerEl = document.createElement("div");
        headerEl.className = "category-header";
        headerEl.innerHTML = `
          <div class="category-header-left">
            <div class="category-badge">${cat.badge || `CATEGORY 0${idx + 1}`}</div>
            <h2 class="category-title">${cat.title}</h2>
            ${cat.subtitle ? `<p class="category-subtitle">${cat.subtitle}</p>` : ""}
          </div>
          ${(cat.cards && cat.cards.length > 1) ? `<div class="category-carousel-controls">
            <button class="category-arrow-btn prev" id="cat-prev-${idx}" aria-label="Previous cards">&#10094;</button>
            <button class="category-arrow-btn next" id="cat-next-${idx}" aria-label="Next cards">&#10095;</button>
          </div>` : ''}
        `;
        sectionEl.appendChild(headerEl);

        const dividerEl = document.createElement("div");
        dividerEl.className = "category-divider";
        sectionEl.appendChild(dividerEl);

        // Horizontal Carousel Track for Category Cards
        const carouselTrack = document.createElement("div");
        carouselTrack.className = "category-carousel-track";
        carouselTrack.id = `cat-track-${idx}`;

        cat.cards.forEach((cardData) => {
          const cardEl = createSwipeCard(
            cardData,
            `${item.title} • ${cat.title}`,
          );
          carouselTrack.appendChild(cardEl);
        });

        sectionEl.appendChild(carouselTrack);

        // Hook up Carousel Navigation Arrows
        const prevBtn = headerEl.querySelector(`#cat-prev-${idx}`);
        const nextBtn = headerEl.querySelector(`#cat-next-${idx}`);

        if (prevBtn && nextBtn) {
          const getScrollDistance = () => {
            const card = carouselTrack.querySelector(".sub-card");
            const cardWidth = card ? card.offsetWidth + 24 : 350;
            return Math.max(cardWidth * 2, carouselTrack.clientWidth * 0.7);
          };

          nextBtn.addEventListener("click", () => {
            carouselTrack.scrollBy({
              left: getScrollDistance(),
              behavior: "smooth",
            });
          });

          prevBtn.addEventListener("click", () => {
            carouselTrack.scrollBy({
              left: -getScrollDistance(),
              behavior: "smooth",
            });
          });
        }

        modalGridContent.appendChild(sectionEl);
      });
    } else {
      // NON-CATEGORIZED FALLBACK (Flat sub-cards grid)
      modalGridContent.classList.remove("categorized-mode");
      if (modalCategoryNav) {
        modalCategoryNav.style.display = "none";
        modalCategoryNav.innerHTML = "";
      }

      let subCards = [];
      if (item.cards && item.cards.length > 0) {
        subCards = item.cards;
      } else if (item.innerImages && item.innerImages.length > 0) {
        subCards = [
          {
            title: `${item.title} - SET 01`,
            subtitle: `${item.innerImages.length} IMAGES • SWIPE TO VIEW`,
            images: item.innerImages,
          },
        ];
      } else {
        subCards = [
          {
            title: item.title,
            subtitle: "1 IMAGE",
            images: [item.src],
          },
        ];
      }

      subCards.forEach((cardData) => {
        const cardEl = createSwipeCard(cardData, item.title);
        modalGridContent.appendChild(cardEl);
      });
    }

    gridModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close Modal function
  function closeModal() {
    gridModal.classList.remove("active");
    document.body.style.overflow = "";
    if (modalScrollHandler) {
      gridModal.removeEventListener("scroll", modalScrollHandler);
      modalScrollHandler = null;
    }
    closeLightbox();
  }

  closeModalBtn.addEventListener("click", closeModal);

  // Close when clicking modal backdrop
  gridModal.addEventListener("click", (e) => {
    if (e.target === gridModal) {
      closeModal();
    }
  });

  // Keyboard navigation & escape handler
  document.addEventListener("keydown", (e) => {
    if (lightboxModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        if (lightboxCurrentIndex > 0) {
          lightboxCurrentIndex--;
          updateLightboxSlide();
        }
      } else if (e.key === "ArrowRight") {
        if (lightboxCurrentIndex < lightboxImages.length - 1) {
          lightboxCurrentIndex++;
          updateLightboxSlide();
        }
      }
      return;
    }

    if (e.key === "Escape" && gridModal.classList.contains("active")) {
      closeModal();
    }
  });

  // Render Carousel Cards Function for main page sections
  function renderCards(trackId, data) {
    const track = document.getElementById(trackId);
    if (!track) return;

    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "grid-item";
      card.innerHTML = `
        <div class="grid-image-wrap">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
        </div>
        <div class="grid-info">
            <h3 class="grid-title">${item.title}</h3>
            <p class="grid-subtitle">${item.subtitle}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        openModal(item);
      });

      track.appendChild(card);
    });
  }

  // Render all five sections
  renderCards("carousel-track", advertisingData);
  renderCards("carousel-track-2", promotionalOffersData);
  renderCards("carousel-track-3", serviceBusinessData);
  renderCards("carousel-track-4", performanceMarketingData);
  renderCards("carousel-track-5", adFormatsCampaignsData);

  // Arrow Scrolling Logic for all sections
  function setupArrowControls(prevBtnId, nextBtnId, trackId) {
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const track = document.getElementById(trackId);

    if (!prevBtn || !nextBtn || !track) return;

    const scrollAmount = 300;

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }

  setupArrowControls("prev-btn", "next-btn", "carousel-track");
  setupArrowControls("prev-btn-2", "next-btn-2", "carousel-track-2");
  setupArrowControls("prev-btn-3", "next-btn-3", "carousel-track-3");
  setupArrowControls("prev-btn-4", "next-btn-4", "carousel-track-4");
  setupArrowControls("prev-btn-5", "next-btn-5", "carousel-track-5");

  // ==========================================================================
  // ONE-SECTION-AT-A-TIME SCROLL CONTROLLER & SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  const sections = document.querySelectorAll(".gallery-section");
  const indicatorDots = document.querySelectorAll(".indicator-dot");
  let currentSectionIndex = 0;
  let isScrollLocked = false;
  let lockTimer = null;

  function updateActiveIndicator(index) {
    indicatorDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    currentSectionIndex = index;
    isScrollLocked = true;
    updateActiveIndicator(index);

    sections[index].scrollIntoView({ behavior: "smooth" });

    clearTimeout(lockTimer);
    lockTimer = setTimeout(() => {
      isScrollLocked = false;
    }, 750);
  }

  // Click on indicator dots
  indicatorDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIdx = parseInt(dot.getAttribute("data-index"), 10);
      scrollToSection(targetIdx);
    });
  });

  // IntersectionObserver for scroll-reveal animations & updating indicator
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          const idx = parseInt(entry.target.getAttribute("data-index"), 10);
          if (!isNaN(idx) && !isScrollLocked) {
            currentSectionIndex = idx;
            updateActiveIndicator(idx);
          }
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // Wheel listener: Advance exactly one section at a time
  window.addEventListener(
    "wheel",
    (e) => {
      if (
        (gridModal && gridModal.classList.contains("active")) ||
        (lightboxModal && lightboxModal.classList.contains("active"))
      ) {
        return;
      }

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (Math.abs(e.deltaY) < 20) return;

      e.preventDefault();

      if (isScrollLocked) return;

      if (e.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (e.deltaY < 0) {
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    },
    { passive: false },
  );

  // Keyboard navigation for sections
  window.addEventListener("keydown", (e) => {
    if (
      (gridModal && gridModal.classList.contains("active")) ||
      (lightboxModal && lightboxModal.classList.contains("active"))
    ) {
      return;
    }

    if (e.key === "ArrowDown" || e.key === "PageDown") {
      if (currentSectionIndex < sections.length - 1) {
        e.preventDefault();
        scrollToSection(currentSectionIndex + 1);
      }
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      if (currentSectionIndex > 0) {
        e.preventDefault();
        scrollToSection(currentSectionIndex - 1);
      }
    }
  });
});
