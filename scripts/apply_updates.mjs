import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = 'anvesha-jewels';
const dataPath = path.join(root, 'assets/js/data.js');
const rawDataContent = fs.readFileSync(dataPath, 'utf8');

const parsedNames = JSON.parse(fs.readFileSync(path.join(root, 'scripts/parsed_names.json'), 'utf8'));
const parsedSubs = JSON.parse(fs.readFileSync(path.join(root, 'scripts/parsed_subs.json'), 'utf8'));

// Run data.js in vm to get window.AJ
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(rawDataContent, sandbox);
const AJ = sandbox.window.AJ;

console.log('Original products count:', AJ.products.length);

// 1. Update categories
AJ.categories.rings.cover = '/assets/Ring/AJ-R047.webp';
AJ.categories.rings.hero = '/assets/Ring/AJ-R047.webp';

AJ.categories.bracelets.cover = '/assets/Bracelet/AJ-B001.webp';
AJ.categories.bracelets.hero = '/assets/Bracelet/AJ-B001.webp';

AJ.categories.necklaces.cover = '/assets/necklace/AJ-N026.webp';
AJ.categories.necklaces.hero = '/assets/necklace/AJ-N026.webp';

AJ.categories.earrings.cover = '/assets/earring/AJ-E039.webp';
AJ.categories.earrings.hero = '/assets/earring/AJ-E039.webp';

AJ.categories['mens-jewellery'].cover = "/assets/Men's jewellery/AJ-M005.webp";
AJ.categories['mens-jewellery'].hero = "/assets/Men's jewellery/AJ-M005.webp";

AJ.categories.collection.cover = '/assets/hero/heroimage1-5.webp';
AJ.categories.collection.hero = '/assets/hero/heroimage1-5.webp';

// 2. Update nav subcategories
const newNav = [
  {
    key: "earrings", label: "Earrings", href: "/earrings",
    subs: [
      { id: "ear-studs", name: "Ear Studs" },
      { id: "drop-danglers", name: "Drop & Danglers" },
      { id: "hoops", name: "Hoops (Bali)" },
      { id: "everyday-earrings", name: "Everyday Earrings" }
    ]
  },
  {
    key: "rings", label: "Rings", href: "/rings",
    subs: [
      { id: "light-weight-rings", name: "Light-weight Rings" },
      { id: "cocktail-rings", name: "Cocktail Rings" },
      { id: "everyday-rings", name: "Everyday Rings" }
    ]
  },
  {
    key: "necklaces", label: "Necklace", href: "/necklaces",
    subs: [
      { id: "festive-necklaces", name: "Festive Necklaces" },
      { id: "pendant-necklaces", name: "Pendant Necklaces" },
      { id: "chokers", name: "Chokers" }
    ]
  },
  {
    key: "bracelets", label: "Bracelet", href: "/bracelets",
    subs: [
      { id: "tennis-bracelet", name: "Tennis Bracelets" },
      { id: "bangles", name: "Bangles" }
    ]
  },
  {
    key: "collection", label: "Collection", href: "/collections",
    subs: [
      { id: "india-festive", name: "India Festive" },
      { id: "everyday-essentials", name: "Everyday Essentials" },
      { id: "life-of-the-party", name: "Life of the Party" },
      { id: "the-office-wear", name: "The Office Wear" }
    ]
  },
  {
    key: "mens-jewellery", label: "Men's Jewellery", href: "/mens-jewellery",
    subs: [
      { id: "stud-earrings", name: "Stud Earrings" },
      { id: "bracelet", name: "Bangles & Bracelet" },
      { id: "rings", name: "Rings" },
      { id: "chain-lockets", name: "Chain & Lockets" }
    ]
  }
];
AJ.nav = newNav;

// 3. Update existing products & remove AJ-N034
let updatedProducts = AJ.products.filter(p => p.code !== 'AJ-N034');

const existingCodes = new Set();
updatedProducts.forEach(p => {
  existingCodes.add(p.code);
  if (parsedNames[p.code]) {
    p.name = parsedNames[p.code];
  }
  if (parsedSubs[p.code]) {
    p.subs = parsedSubs[p.code];
  }
  // Ensure webp
  if (p.img) {
    p.img = p.img.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }
});

// 4. Add the 5 new necklace products if missing
const newNecklaces = [
  {
    code: "AJ-N032",
    cat: "necklaces",
    name: parsedNames["AJ-N032"] || "Celestia Choker",
    line: "Celestia",
    meta: "Diamond choker · Classic",
    metal: ["gold", "silver"],
    diamond: "round",
    style: "classic",
    subs: parsedSubs["AJ-N032"] || ["chokers"],
    desc: "An articulated diamond choker designed to rest elegantly along the collar.",
    detail: "Handcrafted in genuine gold with brilliant natural or lab diamonds. Custom length on request.",
    img: "/assets/necklace/AJ-N032.webp"
  },
  {
    code: "AJ-N033",
    cat: "necklaces",
    name: parsedNames["AJ-N033"] || "Evara Necklace",
    line: "Evara",
    meta: "Diamond necklace · Festive",
    metal: ["gold", "rose-gold"],
    diamond: "round",
    style: "festive",
    subs: parsedSubs["AJ-N033"] || ["chokers"],
    desc: "Exquisite necklace designed for timeless elegance and celebration.",
    detail: "Handcrafted in genuine gold with brilliant natural or lab diamonds. Custom length on request.",
    img: "/assets/necklace/AJ-N033.webp"
  },
  {
    code: "AJ-N035",
    cat: "necklaces",
    name: parsedNames["AJ-N035"] || "Seraphine Necklace",
    line: "Seraphine",
    meta: "Diamond necklace · Statement",
    metal: ["gold", "rose-gold"],
    diamond: "round",
    style: "statement",
    subs: parsedSubs["AJ-N035"] || ["chokers"],
    desc: "A statement creation capturing radiance from every angle.",
    detail: "Handcrafted in genuine gold with brilliant natural or lab diamonds. Custom length on request.",
    img: "/assets/necklace/AJ-N035.webp"
  },
  {
    code: "AJ-N036",
    cat: "necklaces",
    name: parsedNames["AJ-N036"] || "Noore Choker",
    line: "Noore",
    meta: "Diamond choker · Contemporary",
    metal: ["gold", "silver"],
    diamond: "round",
    style: "contemporary",
    subs: parsedSubs["AJ-N036"] || ["chokers"],
    desc: "Modern luxury choker with luminous diamond accents.",
    detail: "Handcrafted in genuine gold with brilliant natural or lab diamonds. Custom length on request.",
    img: "/assets/necklace/AJ-N036.webp"
  },
  {
    code: "AJ-N037",
    cat: "necklaces",
    name: parsedNames["AJ-N037"] || "Fancy Diamonds Choker",
    line: "Fancy Diamonds",
    meta: "Fancy cut diamonds · Choker",
    metal: ["gold", "silver"],
    diamond: "round",
    style: "choker",
    subs: parsedSubs["AJ-N037"] || ["chokers"],
    desc: "Alternating emerald and cushion fancy-cut diamonds in an articulated choker.",
    detail: "Handcrafted in genuine gold with brilliant natural or lab diamonds. Custom length on request.",
    img: "/assets/necklace/AJ-N037.webp"
  }
];

newNecklaces.forEach(n => {
  if (!existingCodes.has(n.code)) {
    updatedProducts.push(n);
    existingCodes.add(n.code);
    console.log('Added new necklace:', n.code, n.name);
  }
});

// Sort products by code
updatedProducts.sort((a, b) => a.code.localeCompare(b.code));

console.log('Final updated products count:', updatedProducts.length);

// Generate updated data.js
AJ.products = updatedProducts;

// Re-serialize data.js cleanly
const newCode = `(function () {
  "use strict";

  window.AJ = ${JSON.stringify(AJ, null, 2)};
})();
`;

fs.writeFileSync(dataPath, newCode, 'utf8');
console.log('Updated data.js written successfully!');

