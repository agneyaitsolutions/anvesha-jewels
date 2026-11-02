/* Anvesha Jewels — catalogue data. Shared by the listing pages and the product page. */
window.AJ = {
  whatsapp: "919999999999",            /* placeholder until the client's number is confirmed */
  instagram: "https://www.instagram.com/",
  catalogue: "#",
  /* Sign-up pop-up: where email + mobile are sent (e.g. a Google Apps Script web-app URL or a Brevo form URL).
     Leave empty to send the sign-up to WhatsApp instead. */
  signupEndpoint: "",

  categories: {
    rings: {
      name: "Rings", slug: "rings",
      script: "A gesture, held close.",
      intro: "Solitaire silhouettes, luminous bands and considered details. Discover a ring that feels like a little part of you.",
      hero: "assets/hero-rings.webp"
    },
    bracelets: {
      name: "Bracelets", slug: "bracelets",
      script: "A rhythm all your own.",
      intro: "Delicate lines and graceful curves, made to follow your every gesture. Find your own expression in gold and diamonds.",
      hero: "assets/hero-bracelets.webp"
    },
    necklaces: {
      name: "Necklaces", slug: "necklaces",
      script: "Keep a little light close.",
      intro: "An intimate detail, a luminous finishing touch. Explore pendants and necklaces to wear close to your story.",
      hero: "assets/hero-necklaces.webp"
    },
    earrings: {
      name: "Earrings", slug: "earrings",
      script: "The finishing expression.",
      intro: "From a quiet sparkle to a graceful drop, explore earrings that bring a little light to the way you move.",
      hero: "assets/hero-earrings.webp"
    }
  },

  /* metal / diamond / style drive the filter bar. */
  products: [
    { code:"AJ-R001", cat:"rings", name:"Solene Solitaire Ring", line:"Solene",
      meta:"Round diamond · Solitaire", metal:["gold","rose-gold","silver"], diamond:"round", style:"solitaire",
      img:"assets/p-r001.webp",
      gallery:["assets/p-r001-1.webp","assets/p-r001-2.webp","assets/p-r001-3.webp"],
      desc:"A single point of light, held in a delicate setting. An understated solitaire to mark a moment, or simply to make every day your own.",
      detail:"Round solitaire diamond, four-prong setting and a slender polished band. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-R002", cat:"rings", name:"Lumiere Halo Ring", line:"Lumiere",
      meta:"Round diamond · Halo", metal:["gold","rose-gold"], diamond:"round", style:"halo",
      img:"assets/p-r002.webp",
      desc:"A centre stone encircled by a quiet ring of brilliance, for a little more light in every gesture.",
      detail:"Round centre diamond framed by a pavé halo on a fine polished band. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-R003", cat:"rings", name:"Aurelia Band", line:"Aurelia",
      meta:"Diamond-set · Band", metal:["gold","rose-gold","silver"], diamond:"round", style:"band",
      img:"assets/p-r003.webp",
      desc:"A continuous line of diamonds, made to be worn on its own or alongside the pieces you already love.",
      detail:"Claw-set round diamonds along a half band. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-R004", cat:"rings", name:"Elara Oval Ring", line:"Elara",
      meta:"Oval diamond · Solitaire", metal:["gold","rose-gold"], diamond:"oval", style:"solitaire",
      img:"assets/p-r004.webp",
      desc:"An elongated oval, lifted on a fine band — a softer, more elegant take on the classic solitaire.",
      detail:"Oval centre diamond in a four-prong setting with a slim tapered band. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-R005", cat:"rings", name:"Celeste Three Stone Ring", line:"Celeste",
      meta:"Three diamonds · Classic", metal:["gold","rose-gold"], diamond:"round", style:"classic",
      img:"assets/p-r005.webp",
      desc:"Three diamonds, for the moments behind you, the one you are in, and everything still to come.",
      detail:"A round centre diamond flanked by two round side stones on a polished band. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-R006", cat:"rings", name:"Mira Curve Ring", line:"Mira",
      meta:"Diamond-set · Sculptural", metal:["gold","silver"], diamond:"round", style:"sculptural",
      img:"assets/p-r006.webp",
      desc:"A sweeping, open curve that follows the finger — quietly modern, and easy to wear every day.",
      detail:"Pavé-set diamonds along a sculpted open band. Your quote will confirm the diamond specifications, metal details and fit." },

    { code:"AJ-B001", cat:"bracelets", name:"Solene Line Bracelet", line:"Solene",
      meta:"Round diamonds · Line", metal:["gold","rose-gold","silver"], diamond:"round", style:"line",
      img:"assets/p-b001.webp",
      desc:"An unbroken line of light around the wrist. A piece that finishes everything, and competes with nothing.",
      detail:"Claw-set round diamonds in a continuous line with a concealed clasp. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-B002", cat:"bracelets", name:"Aurelia Cuff", line:"Aurelia",
      meta:"Diamond accents · Cuff", metal:["gold","rose-gold"], diamond:"round", style:"cuff",
      img:"assets/p-b002.webp",
      desc:"A smooth open cuff closed by two points of light — simple, sculptural and endlessly wearable.",
      detail:"Polished open cuff with bezel-set diamond terminals. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-B003", cat:"bracelets", name:"Mira Chain Bracelet", line:"Mira",
      meta:"Diamond-set · Fine chain", metal:["gold","silver"], diamond:"round", style:"chain",
      img:"assets/p-b003.webp",
      desc:"A fine chain with a single luminous detail, for a little sparkle that never asks for attention.",
      detail:"Fine cable chain with a bezel-set round diamond and an adjustable clasp. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-B004", cat:"bracelets", name:"Celeste Bangle", line:"Celeste",
      meta:"Diamond-set · Bangle", metal:["gold","rose-gold"], diamond:"round", style:"bangle",
      img:"assets/p-b004.webp",
      desc:"A slender, perfectly round bangle — the quietest possible way to wear gold and diamonds together.",
      detail:"Slim round bangle with pavé-set diamonds along the upper edge. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-B005", cat:"bracelets", name:"Elara Link Bracelet", line:"Elara",
      meta:"Polished gold · Oval links", metal:["gold","rose-gold"], diamond:"none", style:"link",
      img:"assets/p-b005.webp",
      desc:"Generous oval links with one diamond-set station, balancing a little weight with a lot of ease.",
      detail:"Polished oval links with a pavé-set centre station and a lobster clasp. Your quote will confirm the metal details and fit." },
    { code:"AJ-B006", cat:"bracelets", name:"Lumiere Duo Bracelet", line:"Lumiere",
      meta:"Diamond accents · Double chain", metal:["gold","silver"], diamond:"round", style:"chain",
      img:"assets/p-b006.webp",
      desc:"Two fine chains worn as one, dotted with light — layered for you, before you even put it on.",
      detail:"Double fine chain with bezel-set diamond stations and an adjustable clasp. Your quote will confirm the diamond specifications, metal details and fit." },

    { code:"AJ-N001", cat:"necklaces", name:"Solene Solitaire Pendant", line:"Solene",
      meta:"Round diamond · Pendant", metal:["gold","rose-gold","silver"], diamond:"round", style:"pendant",
      img:"assets/p-n001.webp",
      desc:"One diamond, close to you. The simplest piece in the collection, and often the most worn.",
      detail:"Round diamond pendant on a fine cable chain with an adjustable length. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-N002", cat:"necklaces", name:"Elara Oval Pendant", line:"Elara",
      meta:"Oval diamond · Pendant", metal:["gold","rose-gold"], diamond:"oval", style:"pendant",
      img:"assets/p-n002.webp",
      desc:"A softly elongated oval that catches light as you move — quietly different from the expected.",
      detail:"Oval diamond in a four-prong setting on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-N003", cat:"necklaces", name:"Celeste Drop Necklace", line:"Celeste",
      meta:"Three diamonds · Drop", metal:["gold","rose-gold"], diamond:"round", style:"drop",
      img:"assets/p-n003.webp",
      desc:"Three graduated diamonds falling in a line, for an evening that deserves a little more light.",
      detail:"Graduated round diamonds in a vertical drop on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-N004", cat:"necklaces", name:"Mira Arc Necklace", line:"Mira",
      meta:"Diamond-set · Curved bar", metal:["gold","silver"], diamond:"round", style:"bar",
      img:"assets/p-n004.webp",
      desc:"A gentle curve that follows the collarbone, set with a quiet line of brilliance.",
      detail:"Curved bar with pavé-set round diamonds on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-N005", cat:"necklaces", name:"Aurelia Circle Pendant", line:"Aurelia",
      meta:"Diamond-set · Open circle", metal:["gold","rose-gold"], diamond:"round", style:"pendant",
      img:"assets/p-n005.webp",
      desc:"An open circle, set all the way round — a small symbol of something continuous.",
      detail:"Open circle pendant with pavé-set diamonds on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
    { code:"AJ-N006", cat:"necklaces", name:"Lumiere Station Necklace", line:"Lumiere",
      meta:"Diamond accents · Fine chain", metal:["gold","silver"], diamond:"round", style:"chain",
      img:"assets/p-n006.webp",
      desc:"Diamonds set at intervals along a fine chain, so the light moves with you all day.",
      detail:"Bezel-set diamond stations along a fine cable chain. Your quote will confirm the diamond specifications, metal details and fit." },

    { code:"AJ-E001", cat:"earrings", name:"Solene Diamond Studs", line:"Solene",
      meta:"Round diamonds · Studs", metal:["gold","rose-gold","silver"], diamond:"round", style:"studs",
      img:"assets/p-e001.webp",
      desc:"The pair you reach for without thinking. A clear, classic light, every single day.",
      detail:"Round diamonds in four-prong settings with secure butterfly backs. Your quote will confirm the diamond specifications and metal details." },
    { code:"AJ-E002", cat:"earrings", name:"Aurelia Huggies", line:"Aurelia",
      meta:"Diamond-set · Huggies", metal:["gold","rose-gold"], diamond:"round", style:"hoops",
      img:"assets/p-e002.webp",
      desc:"Small hoops that sit close to the ear, set with a fine line of diamonds all the way round.",
      detail:"Pavé-set round diamonds on a hinged huggie hoop. Your quote will confirm the diamond specifications and metal details." },
    { code:"AJ-E003", cat:"earrings", name:"Elara Oval Studs", line:"Elara",
      meta:"Oval diamonds · Studs", metal:["gold","rose-gold"], diamond:"oval", style:"studs",
      img:"assets/p-e003.webp",
      desc:"Oval stones set upright, for a stud that feels a little more considered.",
      detail:"Oval diamonds in four-prong settings with secure backs. Your quote will confirm the diamond specifications and metal details." },
    { code:"AJ-E004", cat:"earrings", name:"Celeste Drop Earrings", line:"Celeste",
      meta:"Three diamonds · Drops", metal:["gold","rose-gold"], diamond:"round", style:"drop",
      img:"assets/p-e004.webp",
      desc:"Three points of light in a fine vertical line — movement, and a little quiet drama.",
      detail:"Graduated bezel-set diamonds on a fine drop with a hook fitting. Your quote will confirm the diamond specifications and metal details." },
    { code:"AJ-E005", cat:"earrings", name:"Mira Arc Earrings", line:"Mira",
      meta:"Diamond-set · Curved", metal:["gold","silver"], diamond:"round", style:"sculptural",
      img:"assets/p-e005.webp",
      desc:"A curve that climbs the ear, set with graduated diamonds for a sculptural finish.",
      detail:"Graduated round diamonds on a curved claw-set form with a post fitting. Your quote will confirm the diamond specifications and metal details." },
    { code:"AJ-E006", cat:"earrings", name:"Lumiere Hoops", line:"Lumiere",
      meta:"Diamond-set · Hoops", metal:["gold","rose-gold","silver"], diamond:"round", style:"hoops",
      img:"assets/p-e006.webp",
      desc:"A slender hoop lined with diamonds — light, luminous and surprisingly easy to live in.",
      detail:"Pavé-set round diamonds along a slim hoop with a hinged closure. Your quote will confirm the diamond specifications and metal details." }
  ],

  metals: [
    { id:"silver", label:"Silver" },
    { id:"gold", label:"Gold" },
    { id:"rose-gold", label:"Rose Gold" }
  ],
  karats: ["14K","16K","20K"],
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

/* Client words — home drift rows and the Stories page (testimonials.html).
   product is a jewellery code from AJ.products above (it gives the link and the thumbnail);
   category is one of rings / bracelets / necklaces / earrings (it drives the Stories filter). */
window.TESTIMONIALS = [
  // PLACEHOLDER – replace with real client words
  { name:"Aanya", city:"Mumbai", product:"AJ-R001", category:"rings",
    quote:"I wanted something that felt like a promise, not a performance. It is exactly that — quiet, and mine." },
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
