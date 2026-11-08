/* Anvesha Jewels: catalogue data. Shared by the listing pages and the product page. */
window.AJ = {
  whatsapp: "919898618327",            /* client WhatsApp: 098986 18327 */
  shipDays: [10, 15],                  /* made to order: "Delivered in 10–15 days" under product photos */
  instagram: "https://www.instagram.com/anveshajewels?xtok=MWZjcnkwazFuOHE3OA==",
  facebook: "https://www.facebook.com/share/1MjLyjDmBE/",
  linkedin: "https://www.linkedin.com/company/anvesha-jewels/",
  google: "https://share.google/W20GPQ1LgxwlsJTgo",
  catalogue: "#",
  /* Sign-up pop-up: where email + mobile are sent (e.g. a Google Apps Script web-app URL or a Brevo form URL).
     Leave empty to send the sign-up to WhatsApp instead. */
  signupEndpoint: "",
  /* Home page reels row: the public URL of reels.json in Cloudflare R2, kept up to date by
     scripts/instagram-sync.mjs (docs/instagram-reels.md). Empty: the photo cards in index.html show instead.
     The row holds every reel; add show: 20 (say) to keep only the newest. */
  reels: { feed: "https://pub-f9ec3c35742243adb91804e153531c79.r2.dev/reels.json" },

  categories: {
    rings: {
      name: "Rings", slug: "rings",
      script: "A gesture, held close.",
      intro: "Solitaire silhouettes, luminous bands and considered details. Discover a ring that feels like a little part of you.",
      hero: "/assets/Ring/AJ-R001.webp"
    },
    bracelets: {
      name: "Bracelets", slug: "bracelets",
      script: "A rhythm all your own.",
      intro: "Delicate lines and graceful curves, made to follow your every gesture. Find your own expression in gold and diamonds.",
      hero: "/assets/Bracelet/AJ-B001.webp"
    },
    necklaces: {
      name: "Necklaces", slug: "necklaces",
      script: "Keep a little light close.",
      intro: "An intimate detail, a luminous finishing touch. Explore pendants and necklaces to wear close to your story.",
      hero: "/assets/necklace/AJ-N001.webp"
    },
    earrings: {
      name: "Earrings", slug: "earrings",
      script: "The finishing expression.",
      intro: "From a quiet sparkle to a graceful drop, explore earrings that bring a little light to the way you move.",
      hero: "/assets/earring/AJ-E001.webp"
    },
    /* all: true shows every piece until the client tags products for this page */
    collection: {
      name: "Collection", slug: "collection", all: true,
      script: "Pieces for every moment.",
      intro: "From festive evenings to the everyday, discover pieces chosen for the moments you make your own.",
      hero: "/assets/hero/heroimage1-5.webp"
    },
    "mens-jewellery": {
      name: "Men's Jewellery", slug: "mens-jewellery",
      script: "Quiet strength, finely made.",
      intro: "Studs, bracelets, rings and chain & lockets, crafted in gold and diamonds for him.",
      hero: "/assets/Men's jewellery/AJ-M001.webp"
    },
    gifting: {
      name: "Gifting", slug: "gifting", all: true,
      script: "A little light, given.",
      intro: "Thoughtful pieces for birthdays, engagements and anniversaries, made to be remembered.",
      hero: "/assets/hero/heroimage1-5.webp"
    }
  },

  /* Navigation bar: the client's categories and sub-categories, in her order.
     Each sub-category opens its category page with ?sub=<id>. img = the picture in the hover menu:
     swap each one for the client's photo when it arrives (e.g. /assets/nav/ear-studs.webp).
     To place a product in a sub-category, add subs:["ear-studs"] to it below; until a category has
     tagged products, its sub-category pages show every piece of that category. */
  nav: [
    { key:"earrings", label:"Earrings", href:"/earrings", subs:[
      { id:"ear-studs", name:"Ear Studs", img:"/assets/earring/AJ-E001.webp" },
      { id:"drop-danglers", name:"Drop & Danglers", img:"/assets/earring/AJ-E004.webp" },
      { id:"hoops", name:"Hoops (Bali)", img:"/assets/earring/AJ-E006.webp" },
      { id:"everyday-earrings", name:"Everyday Earrings", img:"/assets/earring/AJ-E003.webp" } ] },
    { key:"rings", label:"Rings", href:"/rings", subs:[
      { id:"light-weight-rings", name:"Light-weight Rings", img:"/assets/Ring/AJ-R006.webp" },
      { id:"cocktail-rings", name:"Cocktail Rings", img:"/assets/Ring/AJ-R002.webp" },
      { id:"engagement-rings", name:"Engagement Rings", img:"/assets/Ring/AJ-R001.webp" },
      { id:"everyday-rings", name:"Everyday Rings", img:"/assets/Ring/AJ-R004.webp" } ] },
    { key:"necklaces", label:"Necklace", href:"/necklaces", subs:[
      { id:"pendant-necklaces", name:"Pendant Necklaces", img:"/assets/necklace/AJ-N001.webp" },
      { id:"chokers", name:"Chokers", img:"/assets/necklace/AJ-N004.webp" },
      { id:"statement-necklaces", name:"Statement Necklaces", img:"/assets/necklace/AJ-N003.webp" },
      { id:"festive-necklaces", name:"Festive Necklaces", img:"/assets/necklace/AJ-N006.webp" } ] },
    { key:"bracelets", label:"Bracelet", href:"/bracelets", subs:[
      { id:"tennis-bracelet", name:"Tennis Bracelet", img:"/assets/Bracelet/AJ-B001.webp" },
      { id:"bangles", name:"Bangles", img:"/assets/Bracelet/AJ-B004.webp" },
      { id:"everyday-bangles", name:"Everyday Bangles", img:"/assets/Bracelet/AJ-B002.webp" },
      { id:"everyday-bracelet", name:"Everyday Bracelet", img:"/assets/Bracelet/AJ-B003.webp" } ] },
    { key:"collection", label:"Collection", href:"/collections", subs:[
      { id:"india-festive", name:"India Festive", img:"/assets/necklace/AJ-N003.webp" },
      { id:"everyday-essentials", name:"Everyday Essentials", img:"/assets/earring/AJ-E002.webp" },
      { id:"life-of-the-party", name:"Life of the Party", img:"/assets/Ring/AJ-R002.webp" },
      { id:"the-office-wear", name:"The Office Wear", img:"/assets/necklace/AJ-N002.webp" } ] },
    { key:"mens-jewellery", label:"Men's Jewellery", href:"/mens-jewellery", subs:[
      { id:"stud-earrings", name:"Stud Earrings", img:"/assets/Men's jewellery/AJ-M025.webp" },
      { id:"bracelet", name:"Bracelet", img:"/assets/Men's jewellery/AJ-M009.webp" },
      { id:"rings", name:"Rings", img:"/assets/Men's jewellery/AJ-M001.webp" },
      { id:"chain-lockets", name:"Chain & Lockets", img:"/assets/Men's jewellery/AJ-M017.webp" } ] },
    { key:"gifting", label:"Gifting", href:"/gifting", subs:[
      { id:"top-picks", name:"Top Picks", img:"/assets/Ring/AJ-R003.webp" },
      { id:"birthday-gifts", name:"Birthday Gifts", img:"/assets/necklace/AJ-N002.webp" },
      { id:"engagement-gifts", name:"Engagement Gifts", img:"/assets/Ring/AJ-R001.webp" },
      { id:"anniversary-gifts", name:"Anniversary Gifts", img:"/assets/Bracelet/AJ-B001.webp" } ] }
  ],

  /* metal / diamond / style drive the filter bar. */
  products: [
  {
    "code": "AJ-R001",
    "cat": "rings",
    "name": "Solene Solitaire Ring",
    "line": "Solene",
    "meta": "Round diamond · Solitaire",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "subs": [
      "engagement-rings"
    ],
    "desc": "A single point of light, held in a delicate setting. An understated solitaire to mark a moment, or simply to make every day your own.",
    "detail": "Round solitaire diamond, four-prong setting and a slender polished band. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Ring/AJ-R001.webp"
  },
  {
    "code": "AJ-R002",
    "festive": true,
    "cat": "rings",
    "name": "Lumiere Halo Ring",
    "line": "Lumiere",
    "meta": "Round diamond · Halo",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "halo",
    "subs": [
      "cocktail-rings"
    ],
    "desc": "A centre stone encircled by a quiet ring of brilliance, for a little more light in every gesture.",
    "detail": "Round centre diamond framed by a pavé halo on a fine polished band. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Ring/AJ-R002.webp"
  },
  {
    "code": "AJ-R003",
    "cat": "rings",
    "name": "Aurelia Band",
    "line": "Aurelia",
    "meta": "Diamond-set · Band",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "subs": [
      "everyday-rings"
    ],
    "desc": "A continuous line of diamonds, made to be worn on its own or alongside the pieces you already love.",
    "detail": "Claw-set round diamonds along a half band. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Ring/AJ-R003.webp"
  },
  {
    "code": "AJ-R004",
    "cat": "rings",
    "name": "Elara Oval Ring",
    "line": "Elara",
    "meta": "Oval diamond · Solitaire",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "oval",
    "style": "solitaire",
    "subs": [
      "engagement-rings"
    ],
    "desc": "An elongated oval, lifted on a fine band, a softer, more elegant take on the classic solitaire.",
    "detail": "Oval centre diamond in a four-prong setting with a slim tapered band. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Ring/AJ-R004.webp"
  },
  {
    "code": "AJ-R005",
    "cat": "rings",
    "name": "Celeste Three Stone Ring",
    "line": "Celeste",
    "meta": "Three diamonds · Classic",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "classic",
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Three diamonds, for the moments behind you, the one you are in, and everything still to come.",
    "detail": "A round centre diamond flanked by two round side stones on a polished band. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Ring/AJ-R005.webp"
  },
  {
    "code": "AJ-R006",
    "cat": "rings",
    "name": "Mira Curve Ring",
    "line": "Mira",
    "meta": "Diamond-set · Sculptural",
    "metal": [
      "gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "subs": [
      "light-weight-rings"
    ],
    "desc": "A sweeping, open curve that follows the finger, quietly modern, and easy to wear every day.",
    "detail": "Pavé-set diamonds along a sculpted open band. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Ring/AJ-R006.webp"
  },
  {
    "code": "AJ-R007",
    "cat": "rings",
    "name": "Solene Pavé Solitaire",
    "line": "Solene",
    "meta": "Pavé accents · Solitaire",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R007.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R008",
    "cat": "rings",
    "name": "Lumiere Emerald Cut Band",
    "line": "Lumiere",
    "meta": "Emerald cut · Geometric",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R008.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R009",
    "cat": "rings",
    "name": "Aurelia Radiant Halo Ring",
    "line": "Aurelia",
    "meta": "Radiant cut · Halo",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "halo",
    "img": "/assets/Ring/AJ-R009.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R010",
    "cat": "rings",
    "name": "Elara Petite Eternity Band",
    "line": "Elara",
    "meta": "Continuous fire · Fine band",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R010.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R011",
    "cat": "rings",
    "name": "Celeste Sculpted Ribbon Ring",
    "line": "Celeste",
    "meta": "Sculptural contour · Modern",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "sculptural",
    "img": "/assets/Ring/AJ-R011.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R012",
    "cat": "rings",
    "name": "Mira Marquise Silhouette Ring",
    "line": "Mira",
    "meta": "Marquise diamond · Solitaire",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R012.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R013",
    "cat": "rings",
    "name": "Solene Cushion Halo Ring",
    "line": "Solene",
    "meta": "Cushion cut · Diamond halo",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "halo",
    "img": "/assets/Ring/AJ-R013.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R014",
    "cat": "rings",
    "name": "Lumiere Bezel Stacking Band",
    "line": "Lumiere",
    "meta": "Bezel set · Daily stack",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R014.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R015",
    "cat": "rings",
    "name": "Aurelia Trilogy Starlight Ring",
    "line": "Aurelia",
    "meta": "Three graduated stones · Classic",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "classic",
    "img": "/assets/Ring/AJ-R015.webp",
    "festive": false,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R016",
    "cat": "rings",
    "name": "Elara Fluted Gold Band",
    "line": "Elara",
    "meta": "Textured gold · Statement band",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Ring/AJ-R016.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R017",
    "cat": "rings",
    "name": "Celeste Contour Wave Ring",
    "line": "Celeste",
    "meta": "Gentle wave · Nesting ring",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "img": "/assets/Ring/AJ-R017.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R018",
    "cat": "rings",
    "name": "Mira Baguette Cluster Ring",
    "line": "Mira",
    "meta": "Baguette diamonds · Modern",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "classic",
    "img": "/assets/Ring/AJ-R018.webp",
    "festive": false,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R019",
    "cat": "rings",
    "name": "Solene Double Pavé Ring",
    "line": "Solene",
    "meta": "Dual band · Micro-pavé",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R019.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R020",
    "cat": "rings",
    "name": "Lumiere Tapered Knife-Edge Ring",
    "line": "Lumiere",
    "meta": "Minimalist band · Solitaire",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R020.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R021",
    "cat": "rings",
    "name": "Aurelia Open Crescent Ring",
    "line": "Aurelia",
    "meta": "Open architectural band",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "img": "/assets/Ring/AJ-R021.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R022",
    "cat": "rings",
    "name": "Elara Sunburst Cocktail Ring",
    "line": "Elara",
    "meta": "Diamond rays · Statement",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "halo",
    "img": "/assets/Ring/AJ-R022.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R023",
    "cat": "rings",
    "name": "Celeste Twisted Pavé Band",
    "line": "Celeste",
    "meta": "Entwined band · Diamond detail",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R023.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R024",
    "cat": "rings",
    "name": "Mira Pear Cut Solitaire",
    "line": "Mira",
    "meta": "Pear cut diamond · Fine prong",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R024.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R025",
    "cat": "rings",
    "name": "Solene Eternity Crown Ring",
    "line": "Solene",
    "meta": "Looming crown · Pavé accents",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R025.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R026",
    "cat": "rings",
    "name": "Lumiere Geometric Signet Ring",
    "line": "Lumiere",
    "meta": "Polished shield · Subtle stone",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "classic",
    "img": "/assets/Ring/AJ-R026.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R027",
    "cat": "rings",
    "name": "Aurelia Floating Diamond Ring",
    "line": "Aurelia",
    "meta": "Tension setting · Modern form",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R027.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R028",
    "cat": "rings",
    "name": "Elara Bar Channel Ring",
    "line": "Elara",
    "meta": "Channel-set stones · Clean line",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R028.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R029",
    "cat": "rings",
    "name": "Celeste Floral Cluster Ring",
    "line": "Celeste",
    "meta": "Blossom motif · Fine diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "halo",
    "img": "/assets/Ring/AJ-R029.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R030",
    "cat": "rings",
    "name": "Mira Split Shank Solitaire",
    "line": "Mira",
    "meta": "Split band · Elevated centre",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R030.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R031",
    "cat": "rings",
    "name": "Solene Horizon Band",
    "line": "Solene",
    "meta": "Continuous pavé · Solid gold",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R031.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R032",
    "cat": "rings",
    "name": "Lumiere Hammered Gold Ring",
    "line": "Lumiere",
    "meta": "Artisan texture · Organic finish",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "classic",
    "img": "/assets/Ring/AJ-R032.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R033",
    "cat": "rings",
    "name": "Aurelia Oval Halo Statement",
    "line": "Aurelia",
    "meta": "Oval centre · Brilliant halo",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "halo",
    "img": "/assets/Ring/AJ-R033.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R034",
    "cat": "rings",
    "name": "Elara East-West Solitaire",
    "line": "Elara",
    "meta": "Horizontal setting · Clean modern",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R034.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R035",
    "cat": "rings",
    "name": "Celeste Celestial Band",
    "line": "Celeste",
    "meta": "Star-set diamonds · Flush fit",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R035.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R036",
    "cat": "rings",
    "name": "Mira Pavé Contour Band",
    "line": "Mira",
    "meta": "Fitted curve · Diamond-lined",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "img": "/assets/Ring/AJ-R036.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R037",
    "cat": "rings",
    "name": "Solene Three-Row Pavé Ring",
    "line": "Solene",
    "meta": "Triple sparkle · Luxe statement",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "cocktail",
    "img": "/assets/Ring/AJ-R037.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R038",
    "cat": "rings",
    "name": "Lumiere Cathedral Solitaire",
    "line": "Lumiere",
    "meta": "Elevated cathedral prongs",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R038.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R039",
    "cat": "rings",
    "name": "Aurelia Wide Satin Band",
    "line": "Aurelia",
    "meta": "Brushed finish · Bold profile",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Ring/AJ-R039.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R040",
    "cat": "rings",
    "name": "Elara Asymmetrical Cluster",
    "line": "Elara",
    "meta": "Artful diamonds · Contemporary",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "classic",
    "img": "/assets/Ring/AJ-R040.webp",
    "festive": false,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R041",
    "cat": "rings",
    "name": "Celeste Fine Wire Stacker",
    "line": "Celeste",
    "meta": "Ultralight thread · Accent stone",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R041.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R042",
    "cat": "rings",
    "name": "Mira Trellis Solitaire",
    "line": "Mira",
    "meta": "Interwoven prongs · Delicate",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R042.webp",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R043",
    "cat": "rings",
    "name": "Solene Rope Edge Band",
    "line": "Solene",
    "meta": "Braided silhouette · Gold shine",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Ring/AJ-R043.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R044",
    "cat": "rings",
    "name": "Lumiere Oval Pavé Halo",
    "line": "Lumiere",
    "meta": "Illuminated border · Oval gem",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "halo",
    "img": "/assets/Ring/AJ-R044.webp",
    "festive": true,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R045",
    "cat": "rings",
    "name": "Aurelia Infinity Knot Ring",
    "line": "Aurelia",
    "meta": "Continuous loop · Diamond knot",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "img": "/assets/Ring/AJ-R045.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R046",
    "cat": "rings",
    "name": "Elara Beveled Edge Band",
    "line": "Elara",
    "meta": "Faceted edges · Mirror polish",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Ring/AJ-R046.jpeg",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R047",
    "cat": "rings",
    "name": "Celeste Blossom Halo Solitaire",
    "line": "Celeste",
    "meta": "Floral prongs · Soft brilliance",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "halo",
    "img": "/assets/Ring/AJ-R047.jpeg",
    "festive": false,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R048",
    "cat": "rings",
    "name": "Mira Princess Cut Solitaire",
    "line": "Mira",
    "meta": "Square brilliant · Minimalist",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "solitaire",
    "img": "/assets/Ring/AJ-R048.jpeg",
    "festive": false,
    "subs": [
      "engagement-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R049",
    "cat": "rings",
    "name": "Solene Graduated Five Stone Ring",
    "line": "Solene",
    "meta": "Five descending points of light",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "classic",
    "img": "/assets/Ring/AJ-R049.webp",
    "festive": false,
    "subs": [
      "cocktail-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R050",
    "cat": "rings",
    "name": "Lumiere Micro-Pavé Whisper Band",
    "line": "Lumiere",
    "meta": "Whisper-thin band · Sparkle",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Ring/AJ-R050.webp",
    "festive": false,
    "subs": [
      "everyday-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-R051",
    "cat": "rings",
    "name": "Aurelia Heritage Signet Ring",
    "line": "Aurelia",
    "meta": "Classic seal · Subtle pavé star",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "classic",
    "img": "/assets/Ring/AJ-R051.webp",
    "festive": false,
    "subs": [
      "light-weight-rings"
    ],
    "desc": "Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.",
    "detail": "Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit."
  },
  {
    "code": "AJ-B001",
    "festive": true,
    "cat": "bracelets",
    "name": "Solene Line Bracelet",
    "line": "Solene",
    "meta": "Round diamonds · Line",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "An unbroken line of light around the wrist. A piece that finishes everything, and competes with nothing.",
    "detail": "Claw-set round diamonds in a continuous line with a concealed clasp. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Bracelet/AJ-B001.webp"
  },
  {
    "code": "AJ-B002",
    "cat": "bracelets",
    "name": "Aurelia Cuff",
    "line": "Aurelia",
    "meta": "Diamond accents · Cuff",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "cuff",
    "subs": [
      "bangles"
    ],
    "desc": "A smooth open cuff closed by two points of light, simple, sculptural and endlessly wearable.",
    "detail": "Polished open cuff with bezel-set diamond terminals. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Bracelet/AJ-B002.webp"
  },
  {
    "code": "AJ-B003",
    "cat": "bracelets",
    "name": "Mira Chain Bracelet",
    "line": "Mira",
    "meta": "Diamond-set · Fine chain",
    "metal": [
      "gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "A fine chain with a single luminous detail, for a little sparkle that never asks for attention.",
    "detail": "Fine cable chain with a bezel-set round diamond and an adjustable clasp. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Bracelet/AJ-B003.webp"
  },
  {
    "code": "AJ-B004",
    "cat": "bracelets",
    "name": "Celeste Bangle",
    "line": "Celeste",
    "meta": "Diamond-set · Bangle",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "bangle",
    "subs": [
      "everyday-bangles"
    ],
    "desc": "A slender, perfectly round bangle, the quietest possible way to wear gold and diamonds together.",
    "detail": "Slim round bangle with pavé-set diamonds along the upper edge. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Bracelet/AJ-B004.webp"
  },
  {
    "code": "AJ-B005",
    "cat": "bracelets",
    "name": "Elara Link Bracelet",
    "line": "Elara",
    "meta": "Polished gold · Oval links",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "none",
    "style": "link",
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Generous oval links with one diamond-set station, balancing a little weight with a lot of ease.",
    "detail": "Polished oval links with a pavé-set centre station and a lobster clasp. Your quote will confirm the metal details and fit.",
    "img": "/assets/Bracelet/AJ-B005.webp"
  },
  {
    "code": "AJ-B006",
    "cat": "bracelets",
    "name": "Lumiere Duo Bracelet",
    "line": "Lumiere",
    "meta": "Diamond accents · Double chain",
    "metal": [
      "gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Two fine chains worn as one, dotted with light, layered for you, before you even put it on.",
    "detail": "Double fine chain with bezel-set diamond stations and an adjustable clasp. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/Bracelet/AJ-B006.webp"
  },
  {
    "code": "AJ-B007",
    "cat": "bracelets",
    "name": "Solene Bezel Tennis Bracelet",
    "line": "Solene",
    "meta": "Bezel settings · Smooth continuous fire",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/Bracelet/AJ-B007.webp",
    "festive": false,
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B008",
    "cat": "bracelets",
    "name": "Lumiere Sculpted Gold Cuff",
    "line": "Lumiere",
    "meta": "Polished open cuff · Modern contour",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "cuff",
    "img": "/assets/Bracelet/AJ-B008.webp",
    "festive": false,
    "subs": [
      "bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B009",
    "cat": "bracelets",
    "name": "Aurelia Diamond Station Bangle",
    "line": "Aurelia",
    "meta": "Round diamond stations · Hinged bangle",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B009.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B010",
    "cat": "bracelets",
    "name": "Elara Fluid Paperclip Bracelet",
    "line": "Elara",
    "meta": "Elongated links · Diamond accent",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "link",
    "img": "/assets/Bracelet/AJ-B010.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B011",
    "cat": "bracelets",
    "name": "Celeste Graduated Tennis Bracelet",
    "line": "Celeste",
    "meta": "Graduated stones · Evening statement",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/Bracelet/AJ-B011.webp",
    "festive": true,
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B012",
    "cat": "bracelets",
    "name": "Mira Twisted Cable Cuff",
    "line": "Mira",
    "meta": "Textured gold · Diamond finials",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "cuff",
    "img": "/assets/Bracelet/AJ-B012.webp",
    "festive": false,
    "subs": [
      "bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B013",
    "cat": "bracelets",
    "name": "Solene Slim Pavé Bangle",
    "line": "Solene",
    "meta": "Pavé-encrusted edge · Daily elegance",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B013.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B014",
    "cat": "bracelets",
    "name": "Lumiere Delicate Cable Chain",
    "line": "Lumiere",
    "meta": "Fine gold chain · Minimal charm",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/Bracelet/AJ-B014.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B015",
    "cat": "bracelets",
    "name": "Aurelia Emerald Cut Tennis Bracelet",
    "line": "Aurelia",
    "meta": "Linear baguette diamonds · Pure luxury",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/Bracelet/AJ-B015.webp",
    "festive": true,
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B016",
    "cat": "bracelets",
    "name": "Elara Open Aurelia Cuff",
    "line": "Elara",
    "meta": "Geometric terminals · Gold shine",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "cuff",
    "img": "/assets/Bracelet/AJ-B016.webp",
    "festive": false,
    "subs": [
      "bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B017",
    "cat": "bracelets",
    "name": "Celeste Dual Row Diamond Bangle",
    "line": "Celeste",
    "meta": "Double row micro-pavé · Hinged lock",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B017.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B018",
    "cat": "bracelets",
    "name": "Mira Curb Chain Bracelet",
    "line": "Mira",
    "meta": "Rounded curb links · Polished gold",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Bracelet/AJ-B018.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B019",
    "cat": "bracelets",
    "name": "Solene Illusion Tennis Bracelet",
    "line": "Solene",
    "meta": "Mirrored settings · Amplified light",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/Bracelet/AJ-B019.webp",
    "festive": false,
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B020",
    "cat": "bracelets",
    "name": "Lumiere Hammered Bangle",
    "line": "Lumiere",
    "meta": "Hand-finished facets · Stackable",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B020.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B021",
    "cat": "bracelets",
    "name": "Aurelia Beaded Chain Bracelet",
    "line": "Aurelia",
    "meta": "Gold sphere stations · Delicate fit",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "chain",
    "img": "/assets/Bracelet/AJ-B021.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B022",
    "cat": "bracelets",
    "name": "Elara Double Line Pavé Cuff",
    "line": "Elara",
    "meta": "Twin rows of brilliance · Open cuff",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "cuff",
    "img": "/assets/Bracelet/AJ-B022.webp",
    "festive": true,
    "subs": [
      "bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B023",
    "cat": "bracelets",
    "name": "Celeste Chunky Link Bracelet",
    "line": "Celeste",
    "meta": "Substantial bold links · Luxe finish",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Bracelet/AJ-B023.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B024",
    "cat": "bracelets",
    "name": "Mira Channel Tennis Bracelet",
    "line": "Mira",
    "meta": "Sleek channel walls · Timeless line",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/Bracelet/AJ-B024.webp",
    "festive": false,
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B025",
    "cat": "bracelets",
    "name": "Solene Wide Satin Gold Cuff",
    "line": "Solene",
    "meta": "Brushed gold band · Modern drape",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "cuff",
    "img": "/assets/Bracelet/AJ-B025.webp",
    "festive": false,
    "subs": [
      "bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B026",
    "cat": "bracelets",
    "name": "Lumiere Diamond Bar Bracelet",
    "line": "Lumiere",
    "meta": "Pavé bar on fine cable chain",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/Bracelet/AJ-B026.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B027",
    "cat": "bracelets",
    "name": "Aurelia Starlight Eternity Bangle",
    "line": "Aurelia",
    "meta": "All-around diamonds · Hidden clasp",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B027.webp",
    "festive": true,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B028",
    "cat": "bracelets",
    "name": "Elara Figaro Diamond Bracelet",
    "line": "Elara",
    "meta": "Classic Italian pattern · Accent clasp",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "link",
    "img": "/assets/Bracelet/AJ-B028.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B029",
    "cat": "bracelets",
    "name": "Celeste Triple Strand Chain",
    "line": "Celeste",
    "meta": "Layered delicate chains · Shimmer",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "chain",
    "img": "/assets/Bracelet/AJ-B029.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B030",
    "cat": "bracelets",
    "name": "Mira Oval Pavé Bangle",
    "line": "Mira",
    "meta": "Ergonomic wrist fit · Pavé top",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B030.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B031",
    "cat": "bracelets",
    "name": "Solene Baguette Bar Cuff",
    "line": "Solene",
    "meta": "Step-cut baguettes · Minimal cuff",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "cuff",
    "img": "/assets/Bracelet/AJ-B031.webp",
    "festive": false,
    "subs": [
      "bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B032",
    "cat": "bracelets",
    "name": "Lumiere Three Stone Tennis Bracelet",
    "line": "Lumiere",
    "meta": "Rhythmic clusters · Continuous line",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/Bracelet/AJ-B032.webp",
    "festive": false,
    "subs": [
      "tennis-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B033",
    "cat": "bracelets",
    "name": "Aurelia Rope Twist Bangle",
    "line": "Aurelia",
    "meta": "Entwined gold threads · Timeless",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B033.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B034",
    "cat": "bracelets",
    "name": "Elara Infinity Chain Bracelet",
    "line": "Elara",
    "meta": "Interlocking loops · Diamond pavé",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/Bracelet/AJ-B034.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B035",
    "cat": "bracelets",
    "name": "Celeste Linear Drop Bangle",
    "line": "Celeste",
    "meta": "Articulated charm · Sleek bangle",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Bracelet/AJ-B035.webp",
    "festive": false,
    "subs": [
      "everyday-bangles"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-B036",
    "cat": "bracelets",
    "name": "Mira Heavy Cuban Bracelet",
    "line": "Mira",
    "meta": "Solid gold curb · Confident profile",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Bracelet/AJ-B036.webp",
    "festive": false,
    "subs": [
      "everyday-bracelet"
    ],
    "desc": "Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.",
    "detail": "Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details."
  },
  {
    "code": "AJ-N001",
    "festive": true,
    "cat": "necklaces",
    "name": "Solene Solitaire Pendant",
    "line": "Solene",
    "meta": "Round diamond · Pendant",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "One diamond, close to you. The simplest piece in the collection, and often the most worn.",
    "detail": "Round diamond pendant on a fine cable chain with an adjustable length. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/necklace/AJ-N001.webp"
  },
  {
    "code": "AJ-N002",
    "cat": "necklaces",
    "name": "Elara Oval Pendant",
    "line": "Elara",
    "meta": "Oval diamond · Pendant",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "oval",
    "style": "pendant",
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "A softly elongated oval that catches light as you move, quietly different from the expected.",
    "detail": "Oval diamond in a four-prong setting on a fine chain. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/necklace/AJ-N002.webp"
  },
  {
    "code": "AJ-N003",
    "festive": true,
    "cat": "necklaces",
    "name": "Celeste Drop Necklace",
    "line": "Celeste",
    "meta": "Three diamonds · Drop",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "drop",
    "subs": [
      "statement-necklaces",
      "festive-necklaces"
    ],
    "desc": "Three graduated diamonds falling in a line, for an evening that deserves a little more light.",
    "detail": "Graduated round diamonds in a vertical drop on a fine chain. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/necklace/AJ-N003.webp"
  },
  {
    "code": "AJ-N004",
    "cat": "necklaces",
    "name": "Mira Arc Necklace",
    "line": "Mira",
    "meta": "Diamond-set · Curved bar",
    "metal": [
      "gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bar",
    "subs": [
      "chokers"
    ],
    "desc": "A gentle curve that follows the collarbone, set with a quiet line of brilliance.",
    "detail": "Curved bar with pavé-set round diamonds on a fine chain. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/necklace/AJ-N004.webp"
  },
  {
    "code": "AJ-N005",
    "cat": "necklaces",
    "name": "Aurelia Circle Pendant",
    "line": "Aurelia",
    "meta": "Diamond-set · Open circle",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "pendant",
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "An open circle, set all the way round, a small symbol of something continuous.",
    "detail": "Open circle pendant with pavé-set diamonds on a fine chain. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/necklace/AJ-N005.webp"
  },
  {
    "code": "AJ-N006",
    "cat": "necklaces",
    "name": "Lumiere Station Necklace",
    "line": "Lumiere",
    "meta": "Diamond accents · Fine chain",
    "metal": [
      "gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "subs": [
      "chokers"
    ],
    "desc": "Diamonds set at intervals along a fine chain, so the light moves with you all day.",
    "detail": "Bezel-set diamond stations along a fine cable chain. Your quote will confirm the diamond specifications, metal details and fit.",
    "img": "/assets/necklace/AJ-N006.webp"
  },
  {
    "code": "AJ-N007",
    "cat": "necklaces",
    "name": "Solene Diamond Tennis Choker",
    "line": "Solene",
    "meta": "Continuous diamond strand · Collar length",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "line",
    "img": "/assets/necklace/AJ-N007.webp",
    "festive": true,
    "subs": [
      "chokers",
      "festive-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N008",
    "cat": "necklaces",
    "name": "Lumiere Floating Solitaire Pendant",
    "line": "Lumiere",
    "meta": "Bezel set round diamond · Fluid chain",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N008.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N009",
    "cat": "necklaces",
    "name": "Aurelia Cascading Y-Drop Necklace",
    "line": "Aurelia",
    "meta": "Lariat silhouette · Graduated diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/necklace/AJ-N009.webp",
    "festive": true,
    "subs": [
      "statement-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N010",
    "cat": "necklaces",
    "name": "Elara Heritage Gold Locket",
    "line": "Elara",
    "meta": "Heirloom locket · Delicate engraving",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N010.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N011",
    "cat": "necklaces",
    "name": "Celeste Diamond Chevron Collar",
    "line": "Celeste",
    "meta": "V-shaped pavé bar · Sleek choker",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bar",
    "img": "/assets/necklace/AJ-N011.webp",
    "festive": false,
    "subs": [
      "chokers"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N012",
    "cat": "necklaces",
    "name": "Mira Sunburst Medallion",
    "line": "Mira",
    "meta": "Radiant ray motif · Diamond centre",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N012.webp",
    "festive": true,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N013",
    "cat": "necklaces",
    "name": "Solene Three-Diamond Horizon Necklace",
    "line": "Solene",
    "meta": "Horizontal trio · Fine cable chain",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bar",
    "img": "/assets/necklace/AJ-N013.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N014",
    "cat": "necklaces",
    "name": "Lumiere Emerald Halo Statement Collar",
    "line": "Lumiere",
    "meta": "Lush green centre · Pavé collar",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/necklace/AJ-N014.webp",
    "festive": true,
    "subs": [
      "statement-necklaces",
      "festive-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N015",
    "cat": "necklaces",
    "name": "Aurelia Paperclip Station Chain",
    "line": "Aurelia",
    "meta": "Modern links with diamond stations",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/necklace/AJ-N015.webp",
    "festive": false,
    "subs": [
      "chokers"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N016",
    "cat": "necklaces",
    "name": "Elara Teardrop Pavé Pendant",
    "line": "Elara",
    "meta": "Pear silhouette · Glistening pavé",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N016.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N017",
    "cat": "necklaces",
    "name": "Celeste Illusion Diamond Strand",
    "line": "Celeste",
    "meta": "Light-catching bezels · All day shine",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/necklace/AJ-N017.webp",
    "festive": false,
    "subs": [
      "chokers"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N018",
    "cat": "necklaces",
    "name": "Mira Art Deco Geometric Drop",
    "line": "Mira",
    "meta": "Architectural lines · Step cuts",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/necklace/AJ-N018.webp",
    "festive": true,
    "subs": [
      "statement-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N019",
    "cat": "necklaces",
    "name": "Solene Diamond Bar Choker",
    "line": "Solene",
    "meta": "Stationary diamond bar · Close fit",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bar",
    "img": "/assets/necklace/AJ-N019.webp",
    "festive": false,
    "subs": [
      "chokers"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N020",
    "cat": "necklaces",
    "name": "Lumiere Celestial Star Pendant",
    "line": "Lumiere",
    "meta": "Constellation motif · Subtle brilliance",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N020.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N021",
    "cat": "necklaces",
    "name": "Aurelia Lariat Diamond Necklace",
    "line": "Aurelia",
    "meta": "Adjustable slide · Liquid drape",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/necklace/AJ-N021.webp",
    "festive": false,
    "subs": [
      "statement-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N022",
    "cat": "necklaces",
    "name": "Elara Double Strand Station Chain",
    "line": "Elara",
    "meta": "Pre-layered fine chains · Stations",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/necklace/AJ-N022.webp",
    "festive": false,
    "subs": [
      "chokers"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N023",
    "cat": "necklaces",
    "name": "Celeste Crescent Diamond Pendant",
    "line": "Celeste",
    "meta": "Lunar arc · Micro-pavé diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N023.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N024",
    "cat": "necklaces",
    "name": "Mira Grand Royale Drop Necklace",
    "line": "Mira",
    "meta": "Royal gala design · Multi-diamond drop",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/necklace/AJ-N024.webp",
    "festive": true,
    "subs": [
      "statement-necklaces",
      "festive-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N025",
    "cat": "necklaces",
    "name": "Solene Minimalist Bezel Solitaire",
    "line": "Solene",
    "meta": "Zero-prong bezel · Floats on skin",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N025.jpeg",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N026",
    "cat": "necklaces",
    "name": "Lumiere Oval Cut Halo Pendant",
    "line": "Lumiere",
    "meta": "Oval gem · Glistening diamond halo",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N026.jpeg",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N027",
    "cat": "necklaces",
    "name": "Aurelia Twisted Gold Collar",
    "line": "Aurelia",
    "meta": "Structured collar necklace · Solid shine",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "bar",
    "img": "/assets/necklace/AJ-N027.jpeg",
    "festive": false,
    "subs": [
      "chokers"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N028",
    "cat": "necklaces",
    "name": "Elara Diamond Petal Necklace",
    "line": "Elara",
    "meta": "Blossom cluster · Soft feminine line",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N028.jpeg",
    "festive": true,
    "subs": [
      "statement-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N029",
    "cat": "necklaces",
    "name": "Celeste Linear Baguette Pendant",
    "line": "Celeste",
    "meta": "Sleek vertical bar · Baguette diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bar",
    "img": "/assets/necklace/AJ-N029.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N030",
    "cat": "necklaces",
    "name": "Mira Festive Symphony Necklace",
    "line": "Mira",
    "meta": "Grand heritage collar · Dazzling drops",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/necklace/AJ-N030.webp",
    "festive": true,
    "subs": [
      "statement-necklaces",
      "festive-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-N031",
    "cat": "necklaces",
    "name": "Solene Infinity Pendant Necklace",
    "line": "Solene",
    "meta": "Continuous loop · Intertwined sparkle",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/necklace/AJ-N031.webp",
    "festive": false,
    "subs": [
      "pendant-necklaces"
    ],
    "desc": "Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.",
    "detail": "Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length."
  },
  {
    "code": "AJ-E001",
    "cat": "earrings",
    "name": "Solene Diamond Studs",
    "line": "Solene",
    "meta": "Round diamonds · Studs",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "subs": [
      "ear-studs",
      "everyday-earrings"
    ],
    "desc": "The pair you reach for without thinking. A clear, classic light, every single day.",
    "detail": "Round diamonds in four-prong settings with secure butterfly backs. Your quote will confirm the diamond specifications and metal details.",
    "img": "/assets/earring/AJ-E001.webp"
  },
  {
    "code": "AJ-E002",
    "cat": "earrings",
    "name": "Aurelia Huggies",
    "line": "Aurelia",
    "meta": "Diamond-set · Huggies",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "hoops",
    "subs": [
      "hoops",
      "everyday-earrings"
    ],
    "desc": "Small hoops that sit close to the ear, set with a fine line of diamonds all the way round.",
    "detail": "Pavé-set round diamonds on a hinged huggie hoop. Your quote will confirm the diamond specifications and metal details.",
    "img": "/assets/earring/AJ-E002.webp"
  },
  {
    "code": "AJ-E003",
    "cat": "earrings",
    "name": "Elara Oval Studs",
    "line": "Elara",
    "meta": "Oval diamonds · Studs",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "oval",
    "style": "studs",
    "subs": [
      "ear-studs"
    ],
    "desc": "Oval stones set upright, for a stud that feels a little more considered.",
    "detail": "Oval diamonds in four-prong settings with secure backs. Your quote will confirm the diamond specifications and metal details.",
    "img": "/assets/earring/AJ-E003.webp"
  },
  {
    "code": "AJ-E004",
    "festive": true,
    "cat": "earrings",
    "name": "Celeste Drop Earrings",
    "line": "Celeste",
    "meta": "Three diamonds · Drops",
    "metal": [
      "gold",
      "rose-gold"
    ],
    "diamond": "round",
    "style": "drop",
    "subs": [
      "drop-danglers"
    ],
    "desc": "Three points of light in a fine vertical line, movement, and a little quiet drama.",
    "detail": "Graduated bezel-set diamonds on a fine drop with a hook fitting. Your quote will confirm the diamond specifications and metal details.",
    "img": "/assets/earring/AJ-E004.webp"
  },
  {
    "code": "AJ-E005",
    "cat": "earrings",
    "name": "Mira Arc Earrings",
    "line": "Mira",
    "meta": "Diamond-set · Curved",
    "metal": [
      "gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "subs": [
      "drop-danglers"
    ],
    "desc": "A curve that climbs the ear, set with graduated diamonds for a sculptural finish.",
    "detail": "Graduated round diamonds on a curved claw-set form with a post fitting. Your quote will confirm the diamond specifications and metal details.",
    "img": "/assets/earring/AJ-E005.webp"
  },
  {
    "code": "AJ-E006",
    "festive": true,
    "cat": "earrings",
    "name": "Lumiere Hoops",
    "line": "Lumiere",
    "meta": "Diamond-set · Hoops",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "subs": [
      "hoops"
    ],
    "desc": "A slender hoop lined with diamonds, light, luminous and surprisingly easy to live in.",
    "detail": "Pavé-set round diamonds along a slim hoop with a hinged closure. Your quote will confirm the diamond specifications and metal details.",
    "img": "/assets/earring/AJ-E006.webp"
  },
  {
    "code": "AJ-E007",
    "cat": "earrings",
    "name": "Solene Pavé Huggie Hoops",
    "line": "Solene",
    "meta": "Micro-pavé diamonds · Hinged clicker",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E007.webp",
    "festive": false,
    "subs": [
      "hoops",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E008",
    "cat": "earrings",
    "name": "Lumiere Halo Solitaire Studs",
    "line": "Lumiere",
    "meta": "Diamond studs · Pavé halo border",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E008.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E009",
    "cat": "earrings",
    "name": "Aurelia Cascading Dangler Drops",
    "line": "Aurelia",
    "meta": "Graduated drops · Liquid movement",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E009.webp",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E010",
    "cat": "earrings",
    "name": "Elara Chubby Gold Huggies",
    "line": "Elara",
    "meta": "Polished round form · Daily essential",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "hoops",
    "img": "/assets/earring/AJ-E010.webp",
    "festive": false,
    "subs": [
      "hoops",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E011",
    "cat": "earrings",
    "name": "Celeste Emerald Cut Studs",
    "line": "Celeste",
    "meta": "Bespoke cut · Clean geometric flash",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E011.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E012",
    "cat": "earrings",
    "name": "Mira Chandelier Evening Drops",
    "line": "Mira",
    "meta": "Intricate chandelier · Gala radiance",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E012.webp",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E013",
    "cat": "earrings",
    "name": "Solene Twisted Rope Hoops",
    "line": "Solene",
    "meta": "Sculptural twist · Medium diameter",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "hoops",
    "img": "/assets/earring/AJ-E013.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E014",
    "cat": "earrings",
    "name": "Lumiere Pear Cut Diamond Drops",
    "line": "Lumiere",
    "meta": "Teardrop diamonds · Articulated post",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "oval",
    "style": "drop",
    "img": "/assets/earring/AJ-E014.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E015",
    "cat": "earrings",
    "name": "Aurelia Bezel Minimal Studs",
    "line": "Aurelia",
    "meta": "Clean cup setting · Sits flush",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E015.webp",
    "festive": false,
    "subs": [
      "ear-studs",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E016",
    "cat": "earrings",
    "name": "Elara Diamond Ear Climbers",
    "line": "Elara",
    "meta": "Climbing curve · Traces the lobe",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "img": "/assets/earring/AJ-E016.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E017",
    "cat": "earrings",
    "name": "Celeste Oval Diamond Huggies",
    "line": "Celeste",
    "meta": "Elongated oval hoop · Forward pavé",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E017.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E018",
    "cat": "earrings",
    "name": "Mira Three-Stone Linear Drops",
    "line": "Mira",
    "meta": "Trio of descending diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E018.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E019",
    "cat": "earrings",
    "name": "Solene Baguette Cluster Studs",
    "line": "Solene",
    "meta": "Step-cut baguettes · Modern cluster",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E019.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E020",
    "cat": "earrings",
    "name": "Lumiere Bold Statement Bali",
    "line": "Lumiere",
    "meta": "Traditional Bali hoop · Pavé rim",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E020.webp",
    "festive": true,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E021",
    "cat": "earrings",
    "name": "Aurelia Threader Diamond Earrings",
    "line": "Aurelia",
    "meta": "Delicate box chain · Floating stone",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E021.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E022",
    "cat": "earrings",
    "name": "Elara Sunburst Stud Earrings",
    "line": "Elara",
    "meta": "Diamond ray cluster · Radiant focal point",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E022.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E023",
    "cat": "earrings",
    "name": "Celeste Double Hoop Diamond Drops",
    "line": "Celeste",
    "meta": "Interlocking circles · Pavé sparkle",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E023.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E024",
    "cat": "earrings",
    "name": "Mira Sleek Wire Hoops",
    "line": "Mira",
    "meta": "Featherweight wire · Large circle",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "hoops",
    "img": "/assets/earring/AJ-E024.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E025",
    "cat": "earrings",
    "name": "Solene Geometric Bar Studs",
    "line": "Solene",
    "meta": "Horizontal gold bar · Micro diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E025.webp",
    "festive": false,
    "subs": [
      "ear-studs",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E026",
    "cat": "earrings",
    "name": "Lumiere Marquise Blossom Drops",
    "line": "Lumiere",
    "meta": "Petal arrangement · Diamond danglers",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E026.webp",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E027",
    "cat": "earrings",
    "name": "Aurelia Wide Satin Huggie Hoops",
    "line": "Aurelia",
    "meta": "Brushed gold texture · Compact hug",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "hoops",
    "img": "/assets/earring/AJ-E027.webp",
    "festive": false,
    "subs": [
      "hoops",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E028",
    "cat": "earrings",
    "name": "Elara Princess Cut Diamond Studs",
    "line": "Elara",
    "meta": "Four-corner brilliant · Platinum post",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E028.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E029",
    "cat": "earrings",
    "name": "Celeste Articulated Diamond Drops",
    "line": "Celeste",
    "meta": "Flexible chain link · Subtle shimmer",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E029.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E030",
    "cat": "earrings",
    "name": "Mira Classic Gold Bali",
    "line": "Mira",
    "meta": "Heritage rounded Bali · High polish",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "hoops",
    "img": "/assets/earring/AJ-E030.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E031",
    "cat": "earrings",
    "name": "Solene Teardrop Dangler Earrings",
    "line": "Solene",
    "meta": "Open pear silhouette · Pavé border",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E031.webp",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E032",
    "cat": "earrings",
    "name": "Lumiere Cushion Halo Studs",
    "line": "Lumiere",
    "meta": "Soft square halo · Diamond centre",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E032.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E033",
    "cat": "earrings",
    "name": "Aurelia Knife-Edge Hoops",
    "line": "Aurelia",
    "meta": "Faceted reflection · Modern silhouette",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "hoops",
    "img": "/assets/earring/AJ-E033.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E034",
    "cat": "earrings",
    "name": "Elara Trellis Drop Earrings",
    "line": "Elara",
    "meta": "Lattice framework · Diamond accents",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E034.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E035",
    "cat": "earrings",
    "name": "Celeste Floating Solitaire Studs",
    "line": "Celeste",
    "meta": "Minimal three-prong · Pure light",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E035.webp",
    "festive": false,
    "subs": [
      "ear-studs",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E036",
    "cat": "earrings",
    "name": "Mira Star Dust Pavé Hoops",
    "line": "Mira",
    "meta": "Scattered diamond stars · Fine hoop",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E036.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E037",
    "cat": "earrings",
    "name": "Solene Cascading Shimmer Danglers",
    "line": "Solene",
    "meta": "Multi-stone cascade · Red carpet glam",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E037.jpeg",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E038",
    "cat": "earrings",
    "name": "Lumiere Ribbon Swirl Studs",
    "line": "Lumiere",
    "meta": "Graceful gold loop · Pavé tip",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "sculptural",
    "img": "/assets/earring/AJ-E038.jpeg",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E039",
    "cat": "earrings",
    "name": "Aurelia Open Circle Drops",
    "line": "Aurelia",
    "meta": "Concentric rings · Articulated swing",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E039.jpeg",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E040",
    "cat": "earrings",
    "name": "Elara Petite Everyday Huggies",
    "line": "Elara",
    "meta": "Ultra-comfy sleep-in huggies",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E040.jpeg",
    "festive": false,
    "subs": [
      "hoops",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E041",
    "cat": "earrings",
    "name": "Celeste Floral Garland Drops",
    "line": "Celeste",
    "meta": "Botanical vines · Diamond blossom",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E041.jpeg",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E042",
    "cat": "earrings",
    "name": "Mira Double Stud Chain Earring",
    "line": "Mira",
    "meta": "Connecting chain · Dual piercing look",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E042.jpeg",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E043",
    "cat": "earrings",
    "name": "Solene Shield Solitaire Studs",
    "line": "Solene",
    "meta": "Geometric bezel · Modern everyday",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E043.jpeg",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E044",
    "cat": "earrings",
    "name": "Lumiere Infinity Hoop Earrings",
    "line": "Lumiere",
    "meta": "Figure-eight silhouette · Pavé front",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E044.jpeg",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E045",
    "cat": "earrings",
    "name": "Aurelia Symphony Waterfall Drops",
    "line": "Aurelia",
    "meta": "Spectacular evening chandelier",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E045.jpeg",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E046",
    "cat": "earrings",
    "name": "Elara Quad Diamond Cluster",
    "line": "Elara",
    "meta": "Four brilliant stones in a clover",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E046.webp",
    "festive": false,
    "subs": [
      "ear-studs"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E047",
    "cat": "earrings",
    "name": "Celeste Hexagon Pavé Huggies",
    "line": "Celeste",
    "meta": "Hexagonal outer edge · Crisp profile",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "hoops",
    "img": "/assets/earring/AJ-E047.webp",
    "festive": false,
    "subs": [
      "hoops"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E048",
    "cat": "earrings",
    "name": "Mira Linear Baguette Drops",
    "line": "Mira",
    "meta": "Clean column of baguette diamonds",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E048.webp",
    "festive": false,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E049",
    "cat": "earrings",
    "name": "Solene Crescent Moon Studs",
    "line": "Solene",
    "meta": "Pavé crescent · Quiet signature",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/earring/AJ-E049.webp",
    "festive": false,
    "subs": [
      "ear-studs",
      "everyday-earrings"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-E050",
    "cat": "earrings",
    "name": "Lumiere Grand Imperial Danglers",
    "line": "Lumiere",
    "meta": "Bespoke statement drops · Heirloom",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "drop",
    "img": "/assets/earring/AJ-E050.webp",
    "festive": true,
    "subs": [
      "drop-danglers"
    ],
    "desc": "Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.",
    "detail": "Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options."
  },
  {
    "code": "AJ-M001",
    "cat": "mens-jewellery",
    "name": "Vanguard Signet Ring",
    "line": "Vanguard",
    "meta": "Solid gold signet · Beveled edges",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M001.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M002",
    "cat": "mens-jewellery",
    "name": "Sovereign Diamond Band",
    "line": "Sovereign",
    "meta": "Flush-set diamond · Brushed finish",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M002.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M003",
    "cat": "mens-jewellery",
    "name": "Orion Matte Ring",
    "line": "Orion",
    "meta": "Satin finish band · Polished step edge",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M003.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M004",
    "cat": "mens-jewellery",
    "name": "Aethel Fluted Band",
    "line": "Aethel",
    "meta": "Architectural fluting · Solid profile",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M004.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M005",
    "cat": "mens-jewellery",
    "name": "Equinox Channel Ring",
    "line": "Equinox",
    "meta": "Channel-set black diamonds · Modern",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M005.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M006",
    "cat": "mens-jewellery",
    "name": "Valence Beveled Ring",
    "line": "Valence",
    "meta": "Faceted facets · Confident silhouette",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M006.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M007",
    "cat": "mens-jewellery",
    "name": "Solene Men's Solitaire Band",
    "line": "Solene",
    "meta": "Single inset point of light · Heavy gold",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M007.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M008",
    "cat": "mens-jewellery",
    "name": "Vanguard Dual Tone Band",
    "line": "Vanguard",
    "meta": "Contrasting metals · Clean seam",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "band",
    "img": "/assets/Men's jewellery/AJ-M008.webp",
    "subs": [
      "rings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M009",
    "cat": "mens-jewellery",
    "name": "Sovereign Cuban Link Bracelet",
    "line": "Sovereign",
    "meta": "Substantial curb links · Custom box lock",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Men's jewellery/AJ-M009.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M010",
    "cat": "mens-jewellery",
    "name": "Vanguard Heavy Cable Bracelet",
    "line": "Vanguard",
    "meta": "Interlocked oval links · High polish",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Men's jewellery/AJ-M010.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M011",
    "cat": "mens-jewellery",
    "name": "Orion Diamond Station Bracelet",
    "line": "Orion",
    "meta": "Bezel diamond accents · Heavy cable",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "chain",
    "img": "/assets/Men's jewellery/AJ-M011.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M012",
    "cat": "mens-jewellery",
    "name": "Aethel Box Chain Bracelet",
    "line": "Aethel",
    "meta": "Square links · Crisp geometric drape",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "chain",
    "img": "/assets/Men's jewellery/AJ-M012.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M013",
    "cat": "mens-jewellery",
    "name": "Equinox Matte Curb Bracelet",
    "line": "Equinox",
    "meta": "Brushed finish links · Understated weight",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Men's jewellery/AJ-M013.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M014",
    "cat": "mens-jewellery",
    "name": "Valence Bar Bracelet",
    "line": "Valence",
    "meta": "Sculpted gold ID bar · Double chain",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "link",
    "img": "/assets/Men's jewellery/AJ-M014.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M015",
    "cat": "mens-jewellery",
    "name": "Solene Men's Bezel Bangle",
    "line": "Solene",
    "meta": "Solid oval bangle · Flush closure",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "bangle",
    "img": "/assets/Men's jewellery/AJ-M015.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M016",
    "cat": "mens-jewellery",
    "name": "Sovereign Rope Chain Bracelet",
    "line": "Sovereign",
    "meta": "Diamond-cut rope pattern · Rich shimmer",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "chain",
    "img": "/assets/Men's jewellery/AJ-M016.webp",
    "subs": [
      "bracelet"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M017",
    "cat": "mens-jewellery",
    "name": "Orion Heavy Box Chain & Locket",
    "line": "Orion",
    "meta": "Substantial box chain · Geometric locket",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "chain",
    "img": "/assets/Men's jewellery/AJ-M017.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M018",
    "cat": "mens-jewellery",
    "name": "Vanguard Compass Locket Pendant",
    "line": "Vanguard",
    "meta": "Directional star motif · Concealed hinge",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/Men's jewellery/AJ-M018.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M019",
    "cat": "mens-jewellery",
    "name": "Sovereign Diamond Dog Tag",
    "line": "Sovereign",
    "meta": "Beveled gold tag · Diamond pavé border",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/Men's jewellery/AJ-M019.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M020",
    "cat": "mens-jewellery",
    "name": "Aethel Figaro Chain Necklace",
    "line": "Aethel",
    "meta": "Classic 3+1 Italian links · Solid gold",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "chain",
    "img": "/assets/Men's jewellery/AJ-M020.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M021",
    "cat": "mens-jewellery",
    "name": "Equinox Minimalist Locket",
    "line": "Equinox",
    "meta": "Sleek rectangular keepsake · Satin face",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "pendant",
    "img": "/assets/Men's jewellery/AJ-M021.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M022",
    "cat": "mens-jewellery",
    "name": "Valence Shield Pendant",
    "line": "Valence",
    "meta": "Heraldic shield silhouette · Fine chain",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "pendant",
    "img": "/assets/Men's jewellery/AJ-M022.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M023",
    "cat": "mens-jewellery",
    "name": "Solene Men's Solitaire Pendant",
    "line": "Solene",
    "meta": "Flush bezel diamond on heavy cable",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/Men's jewellery/AJ-M023.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M024",
    "cat": "mens-jewellery",
    "name": "Orion Sunburst Locket",
    "line": "Orion",
    "meta": "Engraved rays · Centre point of light",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "pendant",
    "img": "/assets/Men's jewellery/AJ-M024.webp",
    "subs": [
      "chain-lockets"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M025",
    "cat": "mens-jewellery",
    "name": "Vanguard Black Diamond Stud",
    "line": "Vanguard",
    "meta": "Black diamond solitaire · Heavy four-prong",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/Men's jewellery/AJ-M025.webp",
    "subs": [
      "stud-earrings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M026",
    "cat": "mens-jewellery",
    "name": "Sovereign Bezel Stud",
    "line": "Sovereign",
    "meta": "Flush gold bezel · Clean modern profile",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/Men's jewellery/AJ-M026.webp",
    "subs": [
      "stud-earrings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M027",
    "cat": "mens-jewellery",
    "name": "Orion Square Pavé Stud",
    "line": "Orion",
    "meta": "Crisp square frame · Pavé diamond grid",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/Men's jewellery/AJ-M027.webp",
    "subs": [
      "stud-earrings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M028",
    "cat": "mens-jewellery",
    "name": "Aethel Solitaire Diamond Stud",
    "line": "Aethel",
    "meta": "Brilliant round stone · Screw-back security",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "round",
    "style": "studs",
    "img": "/assets/Men's jewellery/AJ-M028.webp",
    "subs": [
      "stud-earrings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  },
  {
    "code": "AJ-M029",
    "cat": "mens-jewellery",
    "name": "Equinox Minimalist Gold Stud",
    "line": "Equinox",
    "meta": "Micro-sculpted gold cone · Understated",
    "metal": [
      "gold",
      "rose-gold",
      "silver"
    ],
    "diamond": "none",
    "style": "studs",
    "img": "/assets/Men's jewellery/AJ-M029.webp",
    "subs": [
      "stud-earrings"
    ],
    "desc": "Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.",
    "detail": "Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish."
  }
],

  metals: [
    { id:"silver", label:"Silver" },
    { id:"gold", label:"Gold" },
    { id:"rose-gold", label:"Rose Gold" }
  ],
  karats: ["14K","18K","22K"],
  diamonds: [
    { id:"natural", label:"Natural" },
    { id:"lab-grown", label:"Lab-grown" }
  ],
  ringSizes: ["8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"],

  filters: {
    metal: [["gold","Gold"],["rose-gold","Rose Gold"],["silver","Silver"]],
    diamond: [["round","Round"],["oval","Oval"],["none","No diamonds"]],
    style: [["solitaire","Solitaire"],["halo","Halo"],["band","Band"],["classic","Classic"],
            ["sculptural","Sculptural"],["line","Line"],["cuff","Cuff"],["chain","Chain"],
            ["bangle","Bangle"],["link","Link"],["pendant","Pendant"],["drop","Drop"],
            ["bar","Bar"],["studs","Studs"],["hoops","Hoops"]]
  }
};

/* A product's web address: /product/<name in lowercase with dashes>, e.g. "Aurelia Band" → /product/aurelia-band.
   Renaming a piece changes its address; old /product.html?id=AJ-… links still open it. */
window.AJ.slug = function (p) { return p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); };

/* Client words: home drift rows and the Stories page (testimonials.html).
   product is a jewellery code from AJ.products above (it gives the link and the thumbnail);
   category is one of rings / bracelets / necklaces / earrings (it drives the Stories filter). */
window.TESTIMONIALS = [
  // PLACEHOLDER – replace with real client words
  { name:"Aanya", city:"Mumbai", product:"AJ-R001", category:"rings",
    quote:"I wanted something that felt like a promise, not a performance. It is exactly that: quiet, and mine." },
  // PLACEHOLDER – replace with real client words
  { name:"Meera", city:"Pune", product:"AJ-B002", category:"bracelets",
    quote:"I have not taken it off since it arrived. It goes with linen on a Monday and silk at a wedding." },
  // PLACEHOLDER – replace with real client words
  { name:"Ishita", city:"Ahmedabad", product:"AJ-N001", category:"necklaces",
    quote:"They helped me choose between natural and lab-grown without any pressure at all. The pendant sits just where I hoped it would." },
  // PLACEHOLDER – replace with real client words
  { name:"Riya", city:"Bengaluru", product:"AJ-E006", category:"earrings",
    quote:"Light enough to forget I am wearing them, until someone asks." },
  // PLACEHOLDER – replace with real client words
  { name:"Kavya", city:"Delhi", product:"AJ-R005", category:"rings",
    quote:"Three stones for the three of us. They understood the idea before I had finished explaining it." },
  // PLACEHOLDER – replace with real client words
  { name:"Nandini", city:"Jaipur", product:"AJ-E001", category:"earrings",
    quote:"A gift for my mother’s sixtieth. She opened the box and went very quiet, which is the highest praise she gives." },
  // PLACEHOLDER – replace with real client words
  { name:"Sana", city:"Hyderabad", product:"AJ-B001", category:"bracelets",
    quote:"Every detail was confirmed with me before anything was made. It felt personal from the very first message." },
  // PLACEHOLDER – replace with real client words
  { name:"Tara", city:"Chennai", product:"AJ-N003", category:"necklaces",
    quote:"I wore it on my wedding evening, and again last week for no reason at all. Both times it felt right." }
];
