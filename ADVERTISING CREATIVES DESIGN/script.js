document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // SECTION DATA WITH SUB-CARDS & MULTIPLE SWIPEABLE IMAGES
  // ==========================================================================

  // 1. Data for Section 01: ADVERTISING
  const advertisingData = [
    {
      title: "PRODUCT ADS",
      subtitle: "12 CREATIVES",
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      cards: [
        {
          title: "MINIMALIST WATCH SERIES",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "AUDIO & SOUND EXPERIENCE",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "ATHLETIC FOOTWEAR LAUNCH",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "LUXURY COSMETICS & SKINCARE",
          subtitle: "04 SHOTS • SWIPE TO VIEW",
          images: [
            "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop",
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
          images: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "BUNDLED VALUE PACKS",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
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
          images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
          ],
        },
        {
          title: "BUSINESS CONSULTING & TECH",
          subtitle: "03 SHOTS • SWIPE TO VIEW",
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
  // SWIPE ENGINE FACTORY FOR SUB-CARDS
  // ==========================================================================
  function createSwipeCard(cardData, categoryTitle) {
    const images =
      cardData.images && cardData.images.length > 0
        ? cardData.images
        : [
            cardData.src ||
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
          ];

    const card = document.createElement("div");
    card.className = "sub-card";

    // Build Card HTML
    const slider = document.createElement("div");
    slider.className = "sub-card-slider";

    // Track for sliding
    const track = document.createElement("div");
    track.className = "sub-card-track";

    images.forEach((imgSrc, idx) => {
      const slide = document.createElement("div");
      slide.className = "sub-card-slide";
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `${cardData.title} - Image ${idx + 1}`;
      img.loading = "lazy";
      img.draggable = false;
      slide.appendChild(img);
      track.appendChild(slide);
    });

    slider.appendChild(track);

    // Counter Badge
    const badge = document.createElement("div");
    badge.className = "sub-card-badge";
    badge.textContent = `1 / ${images.length}`;
    slider.appendChild(badge);

    // Swipe Hint
    const swipeHint = document.createElement("div");
    swipeHint.className = "sub-card-swipe-hint";
    swipeHint.innerHTML = `<span>&larr; Swipe &rarr;</span>`;
    slider.appendChild(swipeHint);

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

    // Card Info Footer
    const info = document.createElement("div");
    info.className = "sub-card-info";
    info.innerHTML = `
      <h4 class="sub-card-title">${cardData.title}</h4>
      <div class="sub-card-desc">
        <span>${cardData.subtitle || `${images.length} CREATIVES`}</span>
        <button class="sub-card-zoom-btn" type="button">
          Zoom &#10530;
        </button>
      </div>
    `;

    card.appendChild(slider);
    card.appendChild(info);

    // ========================================================================
    // SLIDER STATE & TRANSITION LOGIC
    // ========================================================================
    let currentSlide = 0;
    const totalSlides = images.length;

    function goToSlide(index) {
      if (index < 0) index = 0;
      if (index >= totalSlides) index = totalSlides - 1;
      currentSlide = index;

      track.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      track.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update Dots
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentSlide);
      });

      // Update Badge
      badge.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }

    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
    });

    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
    });

    // ========================================================================
    // TOUCH SWIPE GESTURES (Mobile & Tablet)
    // ========================================================================
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

        // Determine if horizontal swipe or vertical page scroll
        if (isHorizontalGesture === null) {
          if (Math.abs(touchDeltaX) > 8 || Math.abs(deltaY) > 8) {
            isHorizontalGesture = Math.abs(touchDeltaX) > Math.abs(deltaY);
          }
        }

        if (isHorizontalGesture) {
          // Prevent page scroll during horizontal swipe
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
          // Swiped Left -> Next
          goToSlide(currentSlide + 1);
        } else {
          // Swiped Right -> Prev
          goToSlide(currentSlide - 1);
        }
      } else {
        // Return to current slide
        goToSlide(currentSlide);
      }
      isHorizontalGesture = null;
      touchDeltaX = 0;
    });

    // ========================================================================
    // MOUSE DRAG SWIPE GESTURES (Desktop)
    // ========================================================================
    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseDeltaX = 0;
    let dragDistance = 0;

    slider.addEventListener("mousedown", (e) => {
      // Don't drag if clicking buttons or dots
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

    // ========================================================================
    // CLICK TO EXPAND IN LIGHTBOX
    // ========================================================================
    const zoomBtn = info.querySelector(".sub-card-zoom-btn");
    if (zoomBtn) {
      zoomBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openLightbox(
          images,
          currentSlide,
          `${categoryTitle} • ${cardData.title}`,
        );
      });
    }

    slider.addEventListener("click", (e) => {
      // Don't open if clicked arrows/dots or if user dragged
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
        `${categoryTitle} • ${cardData.title}`,
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
  // OPEN MODAL WITH SUB-CARDS & MULTI-IMAGE CARDS
  // ==========================================================================
  function openModal(item) {
    modalTitle.textContent = item.title;
    if (modalSubtitle) {
      modalSubtitle.textContent = item.subtitle || "FEATURED CAMPAIGNS";
    }
    modalGridContent.innerHTML = "";

    // Determine sub-cards
    let subCards = [];
    if (item.cards && item.cards.length > 0) {
      subCards = item.cards;
    } else if (item.innerImages && item.innerImages.length > 0) {
      // Split into sub-cards with multiple images
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

    // Render each sub-card with multi-image swipe capability
    subCards.forEach((cardData) => {
      const cardEl = createSwipeCard(cardData, item.title);
      modalGridContent.appendChild(cardEl);
    });

    gridModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close Modal function
  function closeModal() {
    gridModal.classList.remove("active");
    document.body.style.overflow = "";
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
      // Don't intercept if modal or lightbox is open
      if (
        (gridModal && gridModal.classList.contains("active")) ||
        (lightboxModal && lightboxModal.classList.contains("active"))
      ) {
        return;
      }

      // Ignore predominantly horizontal scrolls (touchpad / horizontal track scroll)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Require meaningful delta to avoid accidental hair-trigger ticks
      if (Math.abs(e.deltaY) < 20) return;

      e.preventDefault();

      if (isScrollLocked) return;

      if (e.deltaY > 0) {
        // Scroll down to next section
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (e.deltaY < 0) {
        // Scroll up to previous section
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    },
    { passive: false },
  );

  // Keyboard navigation for sections (ArrowDown / ArrowUp / PageDown / PageUp)
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
