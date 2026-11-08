import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const dataPath = 'anvesha-jewels/assets/js/data.js';
const rawData = fs.readFileSync(dataPath, 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(rawData, sandbox);
const AJ = sandbox.window.AJ;

// 1. Mark Festive Necklaces and Chokers from the sheet with festive: true
const festiveCodes = new Set([
  // Necklaces from sheet
  'AJ-N001', 'AJ-N003', 'AJ-N004', 'AJ-N005', 'AJ-N007', 'AJ-N008',
  'AJ-N013', 'AJ-N016', 'AJ-N020', 'AJ-N021', 'AJ-N022', 'AJ-N023',
  'AJ-N024', 'AJ-N026', 'AJ-N028', 'AJ-N029', 'AJ-N031',
  'AJ-N032', 'AJ-N033', 'AJ-N035', 'AJ-N036', 'AJ-N037',
  // Existing festive pieces from rings, bracelets, earrings
  'AJ-B001', 'AJ-B011', 'AJ-B015', 'AJ-B022', 'AJ-B027',
  'AJ-E004', 'AJ-E006', 'AJ-E009', 'AJ-E012', 'AJ-E020', 'AJ-E026', 'AJ-E031', 'AJ-E037', 'AJ-E041', 'AJ-E045', 'AJ-E050',
  'AJ-R002', 'AJ-R009', 'AJ-R013', 'AJ-R022', 'AJ-R029', 'AJ-R033', 'AJ-R037', 'AJ-R044'
]);

AJ.products.forEach(p => {
  if (festiveCodes.has(p.code)) {
    p.festive = true;
  }
});

console.log('Total festive pieces:', AJ.products.filter(p => p.festive).length);

// Generate updated data.js with window.AJ.slug and window.TESTIMONIALS included
const newCode = `(function () {
  "use strict";

  window.AJ = ${JSON.stringify(AJ, null, 2)};

  /* A product's web address: /product/<name in lowercase with dashes>, e.g. "Aurelia Band" → /product/aurelia-band. */
  window.AJ.slug = function (p) {
    if (!p) return "";
    var name = p.name || p.code || "";
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  };

  /* Client words: home drift rows and the Stories page (testimonials.html). */
  window.TESTIMONIALS = [
    { name:"Aanya", city:"Mumbai", product:"AJ-R001", category:"rings",
      quote:"I wanted something that felt like a promise, not a performance. It is exactly that: quiet, and mine." },
    { name:"Meera", city:"Pune", product:"AJ-B002", category:"bracelets",
      quote:"I have not taken it off since it arrived. It goes with linen on a Monday and silk at a wedding." },
    { name:"Ishita", city:"Ahmedabad", product:"AJ-N001", category:"necklaces",
      quote:"They helped me choose between natural and lab-grown without any pressure at all. The pendant sits just where I hoped it would." },
    { name:"Riya", city:"Bengaluru", product:"AJ-E006", category:"earrings",
      quote:"Light enough to forget I am wearing them, until someone asks." },
    { name:"Kavya", city:"Delhi", product:"AJ-R005", category:"rings",
      quote:"Three stones for the three of us. They understood the idea before I had finished explaining it." },
    { name:"Nandini", city:"Jaipur", product:"AJ-E001", category:"earrings",
      quote:"A gift for my mother’s sixtieth. She opened the box and went very quiet, which is the highest praise she gives." },
    { name:"Sana", city:"Hyderabad", product:"AJ-B001", category:"bracelets",
      quote:"Every detail was confirmed with me before anything was made. It felt personal from the very first message." },
    { name:"Tara", city:"Chennai", product:"AJ-N003", category:"necklaces",
      quote:"I wore it on my wedding evening, and again last week for no reason at all. Both times it felt right." }
  ];
})();
`;

fs.writeFileSync(dataPath, newCode, 'utf8');
console.log('Successfully written data.js with slug and festive specials!');

