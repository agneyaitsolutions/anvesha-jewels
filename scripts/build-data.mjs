import fs from 'node:fs';
import path from 'node:path';

const root = 'c:/Users/Hani Patel/OneDrive/Documents/Desktop/Agneya/anvesha-jewels/anvesha-jewels';
const assetsDir = path.join(root, 'assets');

// Helper to get real file paths
function getFile(dir, code) {
  const p = path.join(assetsDir, dir);
  const files = fs.readdirSync(p);
  const f = files.find(x => x.replace(/\.[^.]+$/, '') === code);
  if (!f) throw new Error(`Missing image for ${code} in ${dir}`);
  return `/assets/${dir}/${f}`;
}

// Lines
const lines = ['Solene', 'Lumiere', 'Aurelia', 'Elara', 'Celeste', 'Mira'];
const menLines = ['Vanguard', 'Sovereign', 'Orion', 'Aethel', 'Equinox', 'Valence'];
const allLines = [...lines, ...menLines];

// Existing 24 curated products base
const existingRings = [
  { code:"AJ-R001", cat:"rings", name:"Solene Solitaire Ring", line:"Solene",
    meta:"Round diamond · Solitaire", metal:["gold","rose-gold","silver"], diamond:"round", style:"solitaire",
    subs:["engagement-rings"],
    desc:"A single point of light, held in a delicate setting. An understated solitaire to mark a moment, or simply to make every day your own.",
    detail:"Round solitaire diamond, four-prong setting and a slender polished band. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-R002", festive:true, cat:"rings", name:"Lumiere Halo Ring", line:"Lumiere",
    meta:"Round diamond · Halo", metal:["gold","rose-gold"], diamond:"round", style:"halo",
    subs:["cocktail-rings"],
    desc:"A centre stone encircled by a quiet ring of brilliance, for a little more light in every gesture.",
    detail:"Round centre diamond framed by a pavé halo on a fine polished band. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-R003", cat:"rings", name:"Aurelia Band", line:"Aurelia",
    meta:"Diamond-set · Band", metal:["gold","rose-gold","silver"], diamond:"round", style:"band",
    subs:["everyday-rings"],
    desc:"A continuous line of diamonds, made to be worn on its own or alongside the pieces you already love.",
    detail:"Claw-set round diamonds along a half band. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-R004", cat:"rings", name:"Elara Oval Ring", line:"Elara",
    meta:"Oval diamond · Solitaire", metal:["gold","rose-gold"], diamond:"oval", style:"solitaire",
    subs:["engagement-rings"],
    desc:"An elongated oval, lifted on a fine band, a softer, more elegant take on the classic solitaire.",
    detail:"Oval centre diamond in a four-prong setting with a slim tapered band. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-R005", cat:"rings", name:"Celeste Three Stone Ring", line:"Celeste",
    meta:"Three diamonds · Classic", metal:["gold","rose-gold"], diamond:"round", style:"classic",
    subs:["cocktail-rings"],
    desc:"Three diamonds, for the moments behind you, the one you are in, and everything still to come.",
    detail:"A round centre diamond flanked by two round side stones on a polished band. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-R006", cat:"rings", name:"Mira Curve Ring", line:"Mira",
    meta:"Diamond-set · Sculptural", metal:["gold","silver"], diamond:"round", style:"sculptural",
    subs:["light-weight-rings"],
    desc:"A sweeping, open curve that follows the finger, quietly modern, and easy to wear every day.",
    detail:"Pavé-set diamonds along a sculpted open band. Your quote will confirm the diamond specifications, metal details and fit." }
];

const existingBracelets = [
  { code:"AJ-B001", festive:true, cat:"bracelets", name:"Solene Line Bracelet", line:"Solene",
    meta:"Round diamonds · Line", metal:["gold","rose-gold","silver"], diamond:"round", style:"line",
    subs:["tennis-bracelet"],
    desc:"An unbroken line of light around the wrist. A piece that finishes everything, and competes with nothing.",
    detail:"Claw-set round diamonds in a continuous line with a concealed clasp. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-B002", cat:"bracelets", name:"Aurelia Cuff", line:"Aurelia",
    meta:"Diamond accents · Cuff", metal:["gold","rose-gold"], diamond:"round", style:"cuff",
    subs:["bangles"],
    desc:"A smooth open cuff closed by two points of light, simple, sculptural and endlessly wearable.",
    detail:"Polished open cuff with bezel-set diamond terminals. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-B003", cat:"bracelets", name:"Mira Chain Bracelet", line:"Mira",
    meta:"Diamond-set · Fine chain", metal:["gold","silver"], diamond:"round", style:"chain",
    subs:["everyday-bracelet"],
    desc:"A fine chain with a single luminous detail, for a little sparkle that never asks for attention.",
    detail:"Fine cable chain with a bezel-set round diamond and an adjustable clasp. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-B004", cat:"bracelets", name:"Celeste Bangle", line:"Celeste",
    meta:"Diamond-set · Bangle", metal:["gold","rose-gold"], diamond:"round", style:"bangle",
    subs:["everyday-bangles"],
    desc:"A slender, perfectly round bangle, the quietest possible way to wear gold and diamonds together.",
    detail:"Slim round bangle with pavé-set diamonds along the upper edge. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-B005", cat:"bracelets", name:"Elara Link Bracelet", line:"Elara",
    meta:"Polished gold · Oval links", metal:["gold","rose-gold"], diamond:"none", style:"link",
    subs:["everyday-bracelet"],
    desc:"Generous oval links with one diamond-set station, balancing a little weight with a lot of ease.",
    detail:"Polished oval links with a pavé-set centre station and a lobster clasp. Your quote will confirm the metal details and fit." },
  { code:"AJ-B006", cat:"bracelets", name:"Lumiere Duo Bracelet", line:"Lumiere",
    meta:"Diamond accents · Double chain", metal:["gold","silver"], diamond:"round", style:"chain",
    subs:["everyday-bracelet"],
    desc:"Two fine chains worn as one, dotted with light, layered for you, before you even put it on.",
    detail:"Double fine chain with bezel-set diamond stations and an adjustable clasp. Your quote will confirm the diamond specifications, metal details and fit." }
];

const existingNecklaces = [
  { code:"AJ-N001", festive:true, cat:"necklaces", name:"Solene Solitaire Pendant", line:"Solene",
    meta:"Round diamond · Pendant", metal:["gold","rose-gold","silver"], diamond:"round", style:"pendant",
    subs:["pendant-necklaces"],
    desc:"One diamond, close to you. The simplest piece in the collection, and often the most worn.",
    detail:"Round diamond pendant on a fine cable chain with an adjustable length. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-N002", cat:"necklaces", name:"Elara Oval Pendant", line:"Elara",
    meta:"Oval diamond · Pendant", metal:["gold","rose-gold"], diamond:"oval", style:"pendant",
    subs:["pendant-necklaces"],
    desc:"A softly elongated oval that catches light as you move, quietly different from the expected.",
    detail:"Oval diamond in a four-prong setting on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-N003", festive:true, cat:"necklaces", name:"Celeste Drop Necklace", line:"Celeste",
    meta:"Three diamonds · Drop", metal:["gold","rose-gold"], diamond:"round", style:"drop",
    subs:["statement-necklaces","festive-necklaces"],
    desc:"Three graduated diamonds falling in a line, for an evening that deserves a little more light.",
    detail:"Graduated round diamonds in a vertical drop on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-N004", cat:"necklaces", name:"Mira Arc Necklace", line:"Mira",
    meta:"Diamond-set · Curved bar", metal:["gold","silver"], diamond:"round", style:"bar",
    subs:["chokers"],
    desc:"A gentle curve that follows the collarbone, set with a quiet line of brilliance.",
    detail:"Curved bar with pavé-set round diamonds on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-N005", cat:"necklaces", name:"Aurelia Circle Pendant", line:"Aurelia",
    meta:"Diamond-set · Open circle", metal:["gold","rose-gold"], diamond:"round", style:"pendant",
    subs:["pendant-necklaces"],
    desc:"An open circle, set all the way round, a small symbol of something continuous.",
    detail:"Open circle pendant with pavé-set diamonds on a fine chain. Your quote will confirm the diamond specifications, metal details and fit." },
  { code:"AJ-N006", cat:"necklaces", name:"Lumiere Station Necklace", line:"Lumiere",
    meta:"Diamond accents · Fine chain", metal:["gold","silver"], diamond:"round", style:"chain",
    subs:["chokers"],
    desc:"Diamonds set at intervals along a fine chain, so the light moves with you all day.",
    detail:"Bezel-set diamond stations along a fine cable chain. Your quote will confirm the diamond specifications, metal details and fit." }
];

const existingEarrings = [
  { code:"AJ-E001", cat:"earrings", name:"Solene Diamond Studs", line:"Solene",
    meta:"Round diamonds · Studs", metal:["gold","rose-gold","silver"], diamond:"round", style:"studs",
    subs:["ear-studs","everyday-earrings"],
    desc:"The pair you reach for without thinking. A clear, classic light, every single day.",
    detail:"Round diamonds in four-prong settings with secure butterfly backs. Your quote will confirm the diamond specifications and metal details." },
  { code:"AJ-E002", cat:"earrings", name:"Aurelia Huggies", line:"Aurelia",
    meta:"Diamond-set · Huggies", metal:["gold","rose-gold"], diamond:"round", style:"hoops",
    subs:["hoops","everyday-earrings"],
    desc:"Small hoops that sit close to the ear, set with a fine line of diamonds all the way round.",
    detail:"Pavé-set round diamonds on a hinged huggie hoop. Your quote will confirm the diamond specifications and metal details." },
  { code:"AJ-E003", cat:"earrings", name:"Elara Oval Studs", line:"Elara",
    meta:"Oval diamonds · Studs", metal:["gold","rose-gold"], diamond:"oval", style:"studs",
    subs:["ear-studs"],
    desc:"Oval stones set upright, for a stud that feels a little more considered.",
    detail:"Oval diamonds in four-prong settings with secure backs. Your quote will confirm the diamond specifications and metal details." },
  { code:"AJ-E004", festive:true, cat:"earrings", name:"Celeste Drop Earrings", line:"Celeste",
    meta:"Three diamonds · Drops", metal:["gold","rose-gold"], diamond:"round", style:"drop",
    subs:["drop-danglers"],
    desc:"Three points of light in a fine vertical line, movement, and a little quiet drama.",
    detail:"Graduated bezel-set diamonds on a fine drop with a hook fitting. Your quote will confirm the diamond specifications and metal details." },
  { code:"AJ-E005", cat:"earrings", name:"Mira Arc Earrings", line:"Mira",
    meta:"Diamond-set · Curved", metal:["gold","silver"], diamond:"round", style:"sculptural",
    subs:["drop-danglers"],
    desc:"A curve that climbs the ear, set with graduated diamonds for a sculptural finish.",
    detail:"Graduated round diamonds on a curved claw-set form with a post fitting. Your quote will confirm the diamond specifications and metal details." },
  { code:"AJ-E006", festive:true, cat:"earrings", name:"Lumiere Hoops", line:"Lumiere",
    meta:"Diamond-set · Hoops", metal:["gold","rose-gold","silver"], diamond:"round", style:"hoops",
    subs:["hoops"],
    desc:"A slender hoop lined with diamonds, light, luminous and surprisingly easy to live in.",
    detail:"Pavé-set round diamonds along a slim hoop with a hinged closure. Your quote will confirm the diamond specifications and metal details." }
];

// Rich naming descriptors
const ringDescriptors = [
  { name: "Pavé Solitaire", meta: "Pavé accents · Solitaire", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Emerald Cut Band", meta: "Emerald cut · Geometric", style: "band", diamond: "round", subs: ["light-weight-rings"] },
  { name: "Radiant Halo Ring", meta: "Radiant cut · Halo", style: "halo", diamond: "round", festive: true, subs: ["cocktail-rings"] },
  { name: "Petite Eternity Band", meta: "Continuous fire · Fine band", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Sculpted Ribbon Ring", meta: "Sculptural contour · Modern", style: "sculptural", diamond: "none", subs: ["light-weight-rings"] },
  { name: "Marquise Silhouette Ring", meta: "Marquise diamond · Solitaire", style: "solitaire", diamond: "oval", subs: ["engagement-rings"] },
  { name: "Cushion Halo Ring", meta: "Cushion cut · Diamond halo", style: "halo", diamond: "round", festive: true, subs: ["cocktail-rings"] },
  { name: "Bezel Stacking Band", meta: "Bezel set · Daily stack", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Trilogy Starlight Ring", meta: "Three graduated stones · Classic", style: "classic", diamond: "round", subs: ["cocktail-rings"] },
  { name: "Fluted Gold Band", meta: "Textured gold · Statement band", style: "band", diamond: "none", subs: ["light-weight-rings"] },
  { name: "Contour Wave Ring", meta: "Gentle wave · Nesting ring", style: "sculptural", diamond: "round", subs: ["light-weight-rings"] },
  { name: "Baguette Cluster Ring", meta: "Baguette diamonds · Modern", style: "classic", diamond: "round", subs: ["cocktail-rings"] },
  { name: "Double Pavé Ring", meta: "Dual band · Micro-pavé", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Tapered Knife-Edge Ring", meta: "Minimalist band · Solitaire", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Open Crescent Ring", meta: "Open architectural band", style: "sculptural", diamond: "round", subs: ["light-weight-rings"] },
  { name: "Sunburst Cocktail Ring", meta: "Diamond rays · Statement", style: "halo", diamond: "round", festive: true, subs: ["cocktail-rings"] },
  { name: "Twisted Pavé Band", meta: "Entwined band · Diamond detail", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Pear Cut Solitaire", meta: "Pear cut diamond · Fine prong", style: "solitaire", diamond: "oval", subs: ["engagement-rings"] },
  { name: "Eternity Crown Ring", meta: "Looming crown · Pavé accents", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Geometric Signet Ring", meta: "Polished shield · Subtle stone", style: "classic", diamond: "none", subs: ["light-weight-rings"] },
  { name: "Floating Diamond Ring", meta: "Tension setting · Modern form", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Bar Channel Ring", meta: "Channel-set stones · Clean line", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Floral Cluster Ring", meta: "Blossom motif · Fine diamonds", style: "halo", diamond: "round", festive: true, subs: ["cocktail-rings"] },
  { name: "Split Shank Solitaire", meta: "Split band · Elevated centre", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Horizon Band", meta: "Continuous pavé · Solid gold", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Hammered Gold Ring", meta: "Artisan texture · Organic finish", style: "classic", diamond: "none", subs: ["light-weight-rings"] },
  { name: "Oval Halo Statement", meta: "Oval centre · Brilliant halo", style: "halo", diamond: "oval", festive: true, subs: ["cocktail-rings"] },
  { name: "East-West Solitaire", meta: "Horizontal setting · Clean modern", style: "solitaire", diamond: "oval", subs: ["engagement-rings"] },
  { name: "Celestial Band", meta: "Star-set diamonds · Flush fit", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Pavé Contour Band", meta: "Fitted curve · Diamond-lined", style: "sculptural", diamond: "round", subs: ["light-weight-rings"] },
  { name: "Three-Row Pavé Ring", meta: "Triple sparkle · Luxe statement", style: "cocktail", diamond: "round", festive: true, subs: ["cocktail-rings"] },
  { name: "Cathedral Solitaire", meta: "Elevated cathedral prongs", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Wide Satin Band", meta: "Brushed finish · Bold profile", style: "band", diamond: "none", subs: ["light-weight-rings"] },
  { name: "Asymmetrical Cluster", meta: "Artful diamonds · Contemporary", style: "classic", diamond: "round", subs: ["cocktail-rings"] },
  { name: "Fine Wire Stacker", meta: "Ultralight thread · Accent stone", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Trellis Solitaire", meta: "Interwoven prongs · Delicate", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Rope Edge Band", meta: "Braided silhouette · Gold shine", style: "band", diamond: "none", subs: ["everyday-rings"] },
  { name: "Oval Pavé Halo", meta: "Illuminated border · Oval gem", style: "halo", diamond: "oval", festive: true, subs: ["cocktail-rings"] },
  { name: "Infinity Knot Ring", meta: "Continuous loop · Diamond knot", style: "sculptural", diamond: "round", subs: ["light-weight-rings"] },
  { name: "Beveled Edge Band", meta: "Faceted edges · Mirror polish", style: "band", diamond: "none", subs: ["everyday-rings"] },
  { name: "Blossom Halo Solitaire", meta: "Floral prongs · Soft brilliance", style: "halo", diamond: "round", subs: ["cocktail-rings"] },
  { name: "Princess Cut Solitaire", meta: "Square brilliant · Minimalist", style: "solitaire", diamond: "round", subs: ["engagement-rings"] },
  { name: "Graduated Five Stone Ring", meta: "Five descending points of light", style: "classic", diamond: "round", subs: ["cocktail-rings"] },
  { name: "Micro-Pavé Whisper Band", meta: "Whisper-thin band · Sparkle", style: "band", diamond: "round", subs: ["everyday-rings"] },
  { name: "Heritage Signet Ring", meta: "Classic seal · Subtle pavé star", style: "classic", diamond: "round", subs: ["light-weight-rings"] }
];

const braceletDescriptors = [
  { name: "Bezel Tennis Bracelet", meta: "Bezel settings · Smooth continuous fire", style: "line", diamond: "round", subs: ["tennis-bracelet"] },
  { name: "Sculpted Gold Cuff", meta: "Polished open cuff · Modern contour", style: "cuff", diamond: "none", subs: ["bangles"] },
  { name: "Diamond Station Bangle", meta: "Round diamond stations · Hinged bangle", style: "bangle", diamond: "round", subs: ["everyday-bangles"] },
  { name: "Fluid Paperclip Bracelet", meta: "Elongated links · Diamond accent", style: "link", diamond: "round", subs: ["everyday-bracelet"] },
  { name: "Graduated Tennis Bracelet", meta: "Graduated stones · Evening statement", style: "line", diamond: "round", festive: true, subs: ["tennis-bracelet"] },
  { name: "Twisted Cable Cuff", meta: "Textured gold · Diamond finials", style: "cuff", diamond: "round", subs: ["bangles"] },
  { name: "Slim Pavé Bangle", meta: "Pavé-encrusted edge · Daily elegance", style: "bangle", diamond: "round", subs: ["everyday-bangles"] },
  { name: "Delicate Cable Chain", meta: "Fine gold chain · Minimal charm", style: "chain", diamond: "round", subs: ["everyday-bracelet"] },
  { name: "Emerald Cut Tennis Bracelet", meta: "Linear baguette diamonds · Pure luxury", style: "line", diamond: "round", festive: true, subs: ["tennis-bracelet"] },
  { name: "Open Aurelia Cuff", meta: "Geometric terminals · Gold shine", style: "cuff", diamond: "none", subs: ["bangles"] },
  { name: "Dual Row Diamond Bangle", meta: "Double row micro-pavé · Hinged lock", style: "bangle", diamond: "round", subs: ["everyday-bangles"] },
  { name: "Curb Chain Bracelet", meta: "Rounded curb links · Polished gold", style: "link", diamond: "none", subs: ["everyday-bracelet"] },
  { name: "Illusion Tennis Bracelet", meta: "Mirrored settings · Amplified light", style: "line", diamond: "round", subs: ["tennis-bracelet"] },
  { name: "Hammered Bangle", meta: "Hand-finished facets · Stackable", style: "bangle", diamond: "none", subs: ["everyday-bangles"] },
  { name: "Beaded Chain Bracelet", meta: "Gold sphere stations · Delicate fit", style: "chain", diamond: "none", subs: ["everyday-bracelet"] },
  { name: "Double Line Pavé Cuff", meta: "Twin rows of brilliance · Open cuff", style: "cuff", diamond: "round", festive: true, subs: ["bangles"] },
  { name: "Chunky Link Bracelet", meta: "Substantial bold links · Luxe finish", style: "link", diamond: "none", subs: ["everyday-bracelet"] },
  { name: "Channel Tennis Bracelet", meta: "Sleek channel walls · Timeless line", style: "line", diamond: "round", subs: ["tennis-bracelet"] },
  { name: "Wide Satin Gold Cuff", meta: "Brushed gold band · Modern drape", style: "cuff", diamond: "none", subs: ["bangles"] },
  { name: "Diamond Bar Bracelet", meta: "Pavé bar on fine cable chain", style: "chain", diamond: "round", subs: ["everyday-bracelet"] },
  { name: "Starlight Eternity Bangle", meta: "All-around diamonds · Hidden clasp", style: "bangle", diamond: "round", festive: true, subs: ["everyday-bangles"] },
  { name: "Figaro Diamond Bracelet", meta: "Classic Italian pattern · Accent clasp", style: "link", diamond: "round", subs: ["everyday-bracelet"] },
  { name: "Triple Strand Chain", meta: "Layered delicate chains · Shimmer", style: "chain", diamond: "none", subs: ["everyday-bracelet"] },
  { name: "Oval Pavé Bangle", meta: "Ergonomic wrist fit · Pavé top", style: "bangle", diamond: "round", subs: ["everyday-bangles"] },
  { name: "Baguette Bar Cuff", meta: "Step-cut baguettes · Minimal cuff", style: "cuff", diamond: "round", subs: ["bangles"] },
  { name: "Three Stone Tennis Bracelet", meta: "Rhythmic clusters · Continuous line", style: "line", diamond: "round", subs: ["tennis-bracelet"] },
  { name: "Rope Twist Bangle", meta: "Entwined gold threads · Timeless", style: "bangle", diamond: "none", subs: ["everyday-bangles"] },
  { name: "Infinity Chain Bracelet", meta: "Interlocking loops · Diamond pavé", style: "chain", diamond: "round", subs: ["everyday-bracelet"] },
  { name: "Linear Drop Bangle", meta: "Articulated charm · Sleek bangle", style: "bangle", diamond: "round", subs: ["everyday-bangles"] },
  { name: "Heavy Cuban Bracelet", meta: "Solid gold curb · Confident profile", style: "link", diamond: "none", subs: ["everyday-bracelet"] }
];

const necklaceDescriptors = [
  { name: "Diamond Tennis Choker", meta: "Continuous diamond strand · Collar length", style: "line", diamond: "round", festive: true, subs: ["chokers","festive-necklaces"] },
  { name: "Floating Solitaire Pendant", meta: "Bezel set round diamond · Fluid chain", style: "pendant", diamond: "round", subs: ["pendant-necklaces"] },
  { name: "Cascading Y-Drop Necklace", meta: "Lariat silhouette · Graduated diamonds", style: "drop", diamond: "round", festive: true, subs: ["statement-necklaces"] },
  { name: "Heritage Gold Locket", meta: "Heirloom locket · Delicate engraving", style: "pendant", diamond: "none", subs: ["pendant-necklaces"] },
  { name: "Diamond Chevron Collar", meta: "V-shaped pavé bar · Sleek choker", style: "bar", diamond: "round", subs: ["chokers"] },
  { name: "Sunburst Medallion", meta: "Radiant ray motif · Diamond centre", style: "pendant", diamond: "round", festive: true, subs: ["pendant-necklaces"] },
  { name: "Three-Diamond Horizon Necklace", meta: "Horizontal trio · Fine cable chain", style: "bar", diamond: "round", subs: ["pendant-necklaces"] },
  { name: "Emerald Halo Statement Collar", meta: "Lush green centre · Pavé collar", style: "drop", diamond: "round", festive: true, subs: ["statement-necklaces","festive-necklaces"] },
  { name: "Paperclip Station Chain", meta: "Modern links with diamond stations", style: "chain", diamond: "round", subs: ["chokers"] },
  { name: "Teardrop Pavé Pendant", meta: "Pear silhouette · Glistening pavé", style: "pendant", diamond: "oval", subs: ["pendant-necklaces"] },
  { name: "Illusion Diamond Strand", meta: "Light-catching bezels · All day shine", style: "chain", diamond: "round", subs: ["chokers"] },
  { name: "Art Deco Geometric Drop", meta: "Architectural lines · Step cuts", style: "drop", diamond: "round", festive: true, subs: ["statement-necklaces"] },
  { name: "Diamond Bar Choker", meta: "Stationary diamond bar · Close fit", style: "bar", diamond: "round", subs: ["chokers"] },
  { name: "Celestial Star Pendant", meta: "Constellation motif · Subtle brilliance", style: "pendant", diamond: "round", subs: ["pendant-necklaces"] },
  { name: "Lariat Diamond Necklace", meta: "Adjustable slide · Liquid drape", style: "drop", diamond: "round", subs: ["statement-necklaces"] },
  { name: "Double Strand Station Chain", meta: "Pre-layered fine chains · Stations", style: "chain", diamond: "round", subs: ["chokers"] },
  { name: "Crescent Diamond Pendant", meta: "Lunar arc · Micro-pavé diamonds", style: "pendant", diamond: "round", subs: ["pendant-necklaces"] },
  { name: "Grand Royale Drop Necklace", meta: "Royal gala design · Multi-diamond drop", style: "drop", diamond: "round", festive: true, subs: ["statement-necklaces","festive-necklaces"] },
  { name: "Minimalist Bezel Solitaire", meta: "Zero-prong bezel · Floats on skin", style: "pendant", diamond: "round", subs: ["pendant-necklaces"] },
  { name: "Oval Cut Halo Pendant", meta: "Oval gem · Glistening diamond halo", style: "pendant", diamond: "oval", subs: ["pendant-necklaces"] },
  { name: "Twisted Gold Collar", meta: "Structured collar necklace · Solid shine", style: "bar", diamond: "none", subs: ["chokers"] },
  { name: "Diamond Petal Necklace", meta: "Blossom cluster · Soft feminine line", style: "pendant", diamond: "round", festive: true, subs: ["statement-necklaces"] },
  { name: "Linear Baguette Pendant", meta: "Sleek vertical bar · Baguette diamonds", style: "bar", diamond: "round", subs: ["pendant-necklaces"] },
  { name: "Festive Symphony Necklace", meta: "Grand heritage collar · Dazzling drops", style: "drop", diamond: "round", festive: true, subs: ["statement-necklaces","festive-necklaces"] },
  { name: "Infinity Pendant Necklace", meta: "Continuous loop · Intertwined sparkle", style: "pendant", diamond: "round", subs: ["pendant-necklaces"] }
];

const earringDescriptors = [
  { name: "Pavé Huggie Hoops", meta: "Micro-pavé diamonds · Hinged clicker", style: "hoops", diamond: "round", subs: ["hoops","everyday-earrings"] },
  { name: "Halo Solitaire Studs", meta: "Diamond studs · Pavé halo border", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Cascading Dangler Drops", meta: "Graduated drops · Liquid movement", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Chubby Gold Huggies", meta: "Polished round form · Daily essential", style: "hoops", diamond: "none", subs: ["hoops","everyday-earrings"] },
  { name: "Emerald Cut Studs", meta: "Bespoke cut · Clean geometric flash", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Chandelier Evening Drops", meta: "Intricate chandelier · Gala radiance", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Twisted Rope Hoops", meta: "Sculptural twist · Medium diameter", style: "hoops", diamond: "none", subs: ["hoops"] },
  { name: "Pear Cut Diamond Drops", meta: "Teardrop diamonds · Articulated post", style: "drop", diamond: "oval", subs: ["drop-danglers"] },
  { name: "Bezel Minimal Studs", meta: "Clean cup setting · Sits flush", style: "studs", diamond: "round", subs: ["ear-studs","everyday-earrings"] },
  { name: "Diamond Ear Climbers", meta: "Climbing curve · Traces the lobe", style: "sculptural", diamond: "round", subs: ["drop-danglers"] },
  { name: "Oval Diamond Huggies", meta: "Elongated oval hoop · Forward pavé", style: "hoops", diamond: "round", subs: ["hoops"] },
  { name: "Three-Stone Linear Drops", meta: "Trio of descending diamonds", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Baguette Cluster Studs", meta: "Step-cut baguettes · Modern cluster", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Bold Statement Bali", meta: "Traditional Bali hoop · Pavé rim", style: "hoops", diamond: "round", festive: true, subs: ["hoops"] },
  { name: "Threader Diamond Earrings", meta: "Delicate box chain · Floating stone", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Sunburst Stud Earrings", meta: "Diamond ray cluster · Radiant focal point", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Double Hoop Diamond Drops", meta: "Interlocking circles · Pavé sparkle", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Sleek Wire Hoops", meta: "Featherweight wire · Large circle", style: "hoops", diamond: "none", subs: ["hoops"] },
  { name: "Geometric Bar Studs", meta: "Horizontal gold bar · Micro diamonds", style: "studs", diamond: "round", subs: ["ear-studs","everyday-earrings"] },
  { name: "Marquise Blossom Drops", meta: "Petal arrangement · Diamond danglers", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Wide Satin Huggie Hoops", meta: "Brushed gold texture · Compact hug", style: "hoops", diamond: "none", subs: ["hoops","everyday-earrings"] },
  { name: "Princess Cut Diamond Studs", meta: "Four-corner brilliant · Platinum post", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Articulated Diamond Drops", meta: "Flexible chain link · Subtle shimmer", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Classic Gold Bali", meta: "Heritage rounded Bali · High polish", style: "hoops", diamond: "none", subs: ["hoops"] },
  { name: "Teardrop Dangler Earrings", meta: "Open pear silhouette · Pavé border", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Cushion Halo Studs", meta: "Soft square halo · Diamond centre", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Knife-Edge Hoops", meta: "Faceted reflection · Modern silhouette", style: "hoops", diamond: "none", subs: ["hoops"] },
  { name: "Trellis Drop Earrings", meta: "Lattice framework · Diamond accents", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Floating Solitaire Studs", meta: "Minimal three-prong · Pure light", style: "studs", diamond: "round", subs: ["ear-studs","everyday-earrings"] },
  { name: "Star Dust Pavé Hoops", meta: "Scattered diamond stars · Fine hoop", style: "hoops", diamond: "round", subs: ["hoops"] },
  { name: "Cascading Shimmer Danglers", meta: "Multi-stone cascade · Red carpet glam", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Ribbon Swirl Studs", meta: "Graceful gold loop · Pavé tip", style: "sculptural", diamond: "round", subs: ["ear-studs"] },
  { name: "Open Circle Drops", meta: "Concentric rings · Articulated swing", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Petite Everyday Huggies", meta: "Ultra-comfy sleep-in huggies", style: "hoops", diamond: "round", subs: ["hoops","everyday-earrings"] },
  { name: "Floral Garland Drops", meta: "Botanical vines · Diamond blossom", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Double Stud Chain Earring", meta: "Connecting chain · Dual piercing look", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Shield Solitaire Studs", meta: "Geometric bezel · Modern everyday", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Infinity Hoop Earrings", meta: "Figure-eight silhouette · Pavé front", style: "hoops", diamond: "round", subs: ["hoops"] },
  { name: "Symphony Waterfall Drops", meta: "Spectacular evening chandelier", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] },
  { name: "Quad Diamond Cluster", meta: "Four brilliant stones in a clover", style: "studs", diamond: "round", subs: ["ear-studs"] },
  { name: "Hexagon Pavé Huggies", meta: "Hexagonal outer edge · Crisp profile", style: "hoops", diamond: "round", subs: ["hoops"] },
  { name: "Linear Baguette Drops", meta: "Clean column of baguette diamonds", style: "drop", diamond: "round", subs: ["drop-danglers"] },
  { name: "Crescent Moon Studs", meta: "Pavé crescent · Quiet signature", style: "studs", diamond: "round", subs: ["ear-studs","everyday-earrings"] },
  { name: "Grand Imperial Danglers", meta: "Bespoke statement drops · Heirloom", style: "drop", diamond: "round", festive: true, subs: ["drop-danglers"] }
];

const menDescriptors = [
  // AJ-M001 to M008: Rings
  { name: "Vanguard Signet Ring", meta: "Solid gold signet · Beveled edges", style: "band", diamond: "none", subs: ["rings"] },
  { name: "Sovereign Diamond Band", meta: "Flush-set diamond · Brushed finish", style: "band", diamond: "round", subs: ["rings"] },
  { name: "Orion Matte Ring", meta: "Satin finish band · Polished step edge", style: "band", diamond: "none", subs: ["rings"] },
  { name: "Aethel Fluted Band", meta: "Architectural fluting · Solid profile", style: "band", diamond: "none", subs: ["rings"] },
  { name: "Equinox Channel Ring", meta: "Channel-set black diamonds · Modern", style: "band", diamond: "round", subs: ["rings"] },
  { name: "Valence Beveled Ring", meta: "Faceted facets · Confident silhouette", style: "band", diamond: "none", subs: ["rings"] },
  { name: "Solene Men's Solitaire Band", meta: "Single inset point of light · Heavy gold", style: "band", diamond: "round", subs: ["rings"] },
  { name: "Vanguard Dual Tone Band", meta: "Contrasting metals · Clean seam", style: "band", diamond: "none", subs: ["rings"] },

  // AJ-M009 to M016: Bracelets
  { name: "Sovereign Cuban Link Bracelet", meta: "Substantial curb links · Custom box lock", style: "link", diamond: "none", subs: ["bracelet"] },
  { name: "Vanguard Heavy Cable Bracelet", meta: "Interlocked oval links · High polish", style: "link", diamond: "none", subs: ["bracelet"] },
  { name: "Orion Diamond Station Bracelet", meta: "Bezel diamond accents · Heavy cable", style: "chain", diamond: "round", subs: ["bracelet"] },
  { name: "Aethel Box Chain Bracelet", meta: "Square links · Crisp geometric drape", style: "chain", diamond: "none", subs: ["bracelet"] },
  { name: "Equinox Matte Curb Bracelet", meta: "Brushed finish links · Understated weight", style: "link", diamond: "none", subs: ["bracelet"] },
  { name: "Valence Bar Bracelet", meta: "Sculpted gold ID bar · Double chain", style: "link", diamond: "none", subs: ["bracelet"] },
  { name: "Solene Men's Bezel Bangle", meta: "Solid oval bangle · Flush closure", style: "bangle", diamond: "round", subs: ["bracelet"] },
  { name: "Sovereign Rope Chain Bracelet", meta: "Diamond-cut rope pattern · Rich shimmer", style: "chain", diamond: "none", subs: ["bracelet"] },

  // AJ-M017 to M024: Chains & Lockets
  { name: "Orion Heavy Box Chain & Locket", meta: "Substantial box chain · Geometric locket", style: "chain", diamond: "none", subs: ["chain-lockets"] },
  { name: "Vanguard Compass Locket Pendant", meta: "Directional star motif · Concealed hinge", style: "pendant", diamond: "round", subs: ["chain-lockets"] },
  { name: "Sovereign Diamond Dog Tag", meta: "Beveled gold tag · Diamond pavé border", style: "pendant", diamond: "round", subs: ["chain-lockets"] },
  { name: "Aethel Figaro Chain Necklace", meta: "Classic 3+1 Italian links · Solid gold", style: "chain", diamond: "none", subs: ["chain-lockets"] },
  { name: "Equinox Minimalist Locket", meta: "Sleek rectangular keepsake · Satin face", style: "pendant", diamond: "none", subs: ["chain-lockets"] },
  { name: "Valence Shield Pendant", meta: "Heraldic shield silhouette · Fine chain", style: "pendant", diamond: "none", subs: ["chain-lockets"] },
  { name: "Solene Men's Solitaire Pendant", meta: "Flush bezel diamond on heavy cable", style: "pendant", diamond: "round", subs: ["chain-lockets"] },
  { name: "Orion Sunburst Locket", meta: "Engraved rays · Centre point of light", style: "pendant", diamond: "round", subs: ["chain-lockets"] },

  // AJ-M025 to M029: Stud Earrings
  { name: "Vanguard Black Diamond Stud", meta: "Black diamond solitaire · Heavy four-prong", style: "studs", diamond: "round", subs: ["stud-earrings"] },
  { name: "Sovereign Bezel Stud", meta: "Flush gold bezel · Clean modern profile", style: "studs", diamond: "round", subs: ["stud-earrings"] },
  { name: "Orion Square Pavé Stud", meta: "Crisp square frame · Pavé diamond grid", style: "studs", diamond: "round", subs: ["stud-earrings"] },
  { name: "Aethel Solitaire Diamond Stud", meta: "Brilliant round stone · Screw-back security", style: "studs", diamond: "round", subs: ["stud-earrings"] },
  { name: "Equinox Minimalist Gold Stud", meta: "Micro-sculpted gold cone · Understated", style: "studs", diamond: "none", subs: ["stud-earrings"] }
];

// Build all products array
const products = [];

function resolveLineAndName(defaultLine, baseName) {
  for (const l of allLines) {
    if (baseName.startsWith(l + ' ')) {
      return { line: l, name: baseName };
    }
  }
  return { line: defaultLine, name: `${defaultLine} ${baseName}` };
}

// 1. Rings (AJ-R001 to AJ-R051)
existingRings.forEach((p, i) => {
  p.img = getFile('Ring', p.code);
  products.push(p);
});
for (let i = 7; i <= 51; i++) {
  const code = `AJ-R${String(i).padStart(3, '0')}`;
  const descInfo = ringDescriptors[i - 7];
  const defaultLine = lines[(i - 1) % lines.length];
  const { line, name } = resolveLineAndName(defaultLine, descInfo.name);
  products.push({
    code,
    cat: "rings",
    name,
    line,
    meta: descInfo.meta,
    metal: ["gold", "rose-gold", "silver"],
    diamond: descInfo.diamond,
    style: descInfo.style,
    img: getFile('Ring', code),
    festive: !!descInfo.festive,
    subs: descInfo.subs,
    desc: `Handcrafted in precious gold and set with diamonds. Designed to balance timeless poise with effortless everyday presence.`,
    detail: `Crafted in your choice of 14K, 18K or 22K solid gold. Your personalised quote will confirm stone specifications and custom fit.`
  });
}

// 2. Bracelets (AJ-B001 to AJ-B036)
existingBracelets.forEach((p, i) => {
  p.img = getFile('Bracelet', p.code);
  products.push(p);
});
for (let i = 7; i <= 36; i++) {
  const code = `AJ-B${String(i).padStart(3, '0')}`;
  const descInfo = braceletDescriptors[i - 7];
  const defaultLine = lines[(i - 1) % lines.length];
  const { line, name } = resolveLineAndName(defaultLine, descInfo.name);
  products.push({
    code,
    cat: "bracelets",
    name,
    line,
    meta: descInfo.meta,
    metal: ["gold", "rose-gold", "silver"],
    diamond: descInfo.diamond,
    style: descInfo.style,
    img: getFile('Bracelet', code),
    festive: !!descInfo.festive,
    subs: descInfo.subs,
    desc: `Fluid drape, luminous light, and reassuring substance around the wrist. Meticulously handcrafted by master artisans.`,
    detail: `Available in solid yellow, rose or white gold. Your quote will confirm wrist sizing and diamond details.`
  });
}

// 3. Necklaces (AJ-N001 to AJ-N031)
existingNecklaces.forEach((p, i) => {
  p.img = getFile('necklace', p.code);
  products.push(p);
});
for (let i = 7; i <= 31; i++) {
  const code = `AJ-N${String(i).padStart(3, '0')}`;
  const descInfo = necklaceDescriptors[i - 7];
  const defaultLine = lines[(i - 1) % lines.length];
  const { line, name } = resolveLineAndName(defaultLine, descInfo.name);
  products.push({
    code,
    cat: "necklaces",
    name,
    line,
    meta: descInfo.meta,
    metal: ["gold", "rose-gold", "silver"],
    diamond: descInfo.diamond,
    style: descInfo.style,
    img: getFile('necklace', code),
    festive: !!descInfo.festive,
    subs: descInfo.subs,
    desc: `Artfully calibrated to catch the light with every breath. A signature piece designed to rest softly along the collarbone.`,
    detail: `Finished on an adjustable solid gold chain. Your quote confirms diamond grading and preferred necklace length.`
  });
}

// 4. Earrings (AJ-E001 to AJ-E050)
existingEarrings.forEach((p, i) => {
  p.img = getFile('earring', p.code);
  products.push(p);
});
for (let i = 7; i <= 50; i++) {
  const code = `AJ-E${String(i).padStart(3, '0')}`;
  const descInfo = earringDescriptors[i - 7];
  const defaultLine = lines[(i - 1) % lines.length];
  const { line, name } = resolveLineAndName(defaultLine, descInfo.name);
  products.push({
    code,
    cat: "earrings",
    name,
    line,
    meta: descInfo.meta,
    metal: ["gold", "rose-gold", "silver"],
    diamond: descInfo.diamond,
    style: descInfo.style,
    img: getFile('earring', code),
    festive: !!descInfo.festive,
    subs: descInfo.subs,
    desc: `Lightweight comfort meets quiet drama. Beautifully balanced to frame the face with gentle, continuous fire.`,
    detail: `Secured with precision-engineered fittings in solid gold. Your quote confirms diamond specifications and metal options.`
  });
}

// 5. Men's Jewellery (AJ-M001 to AJ-M029)
for (let i = 1; i <= 29; i++) {
  const code = `AJ-M${String(i).padStart(3, '0')}`;
  const descInfo = menDescriptors[i - 1];
  const defaultLine = menLines[(i - 1) % menLines.length];
  const { line, name } = resolveLineAndName(defaultLine, descInfo.name);
  products.push({
    code,
    cat: "mens-jewellery",
    name,
    line,
    meta: descInfo.meta,
    metal: ["gold", "rose-gold", "silver"],
    diamond: descInfo.diamond,
    style: descInfo.style,
    img: getFile('Men\'s jewellery', code),
    subs: descInfo.subs,
    desc: `Quiet strength, clean geometry, and uncompromising solid weight. Designed specifically for his signature style.`,
    detail: `Handcrafted in solid gold with bespoke sizing. Your quote will confirm specifications, metal karats, and custom finish.`
  });
}

console.log(`Generated total ${products.length} products!`);

// Check slug uniqueness
const slugs = new Set();
products.forEach(p => {
  const s = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  if (slugs.has(s)) {
    console.error(`DUPLICATE SLUG: ${s} for ${p.code} (${p.name})`);
  }
  slugs.add(s);
});

console.log(`Unique slugs: ${slugs.size} / ${products.length}`);

// Update data.js
const dataPath = path.join(root, 'assets/js/data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Replace nav hover images with real client photos
dataContent = dataContent
  .replace('/assets/p-e001.webp', '/assets/earring/AJ-E001.webp')
  .replace('/assets/p-e004.webp', '/assets/earring/AJ-E004.webp')
  .replace('/assets/p-e006.webp', '/assets/earring/AJ-E006.webp')
  .replace('/assets/p-e003.webp', '/assets/earring/AJ-E003.webp')
  .replace('/assets/p-r006.webp', '/assets/Ring/AJ-R006.webp')
  .replace('/assets/p-r002.webp', '/assets/Ring/AJ-R002.webp')
  .replace('/assets/p-r001.webp', '/assets/Ring/AJ-R001.webp')
  .replace('/assets/p-r004.webp', '/assets/Ring/AJ-R004.webp')
  .replace('/assets/p-n001.webp', '/assets/necklace/AJ-N001.webp')
  .replace('/assets/p-n004.webp', '/assets/necklace/AJ-N004.webp')
  .replace('/assets/p-n003.webp', '/assets/necklace/AJ-N003.webp')
  .replace('/assets/p-n006.webp', '/assets/necklace/AJ-N006.webp')
  .replace('/assets/p-b001.webp', '/assets/Bracelet/AJ-B001.webp')
  .replace('/assets/p-b004.webp', '/assets/Bracelet/AJ-B004.webp')
  .replace('/assets/p-b002.webp', '/assets/Bracelet/AJ-B002.webp')
  .replace('/assets/p-b003.webp', '/assets/Bracelet/AJ-B003.webp')
  .replace('/assets/p-b005.webp', '/assets/Bracelet/AJ-B005.webp')
  .replace('/assets/p-n005.webp', '/assets/necklace/AJ-N005.webp')
  .replace('/assets/p-n002.webp', '/assets/necklace/AJ-N002.webp')
  .replace('/assets/p-e002.webp', '/assets/earring/AJ-E002.webp')
  .replace('/assets/p-r003.webp', '/assets/Ring/AJ-R003.webp')
  .replace('id:"stud-earrings", name:"Stud Earrings", img:"/assets/earring/AJ-E003.webp"', 'id:"stud-earrings", name:"Stud Earrings", img:"/assets/Men\'s jewellery/AJ-M025.webp"')
  .replace('id:"bracelet", name:"Bracelet", img:"/assets/Bracelet/AJ-B005.webp"', 'id:"bracelet", name:"Bracelet", img:"/assets/Men\'s jewellery/AJ-M009.webp"')
  .replace('id:"rings", name:"Rings", img:"/assets/Ring/AJ-R001.webp"', 'id:"rings", name:"Rings", img:"/assets/Men\'s jewellery/AJ-M001.webp"')
  .replace('id:"chain-lockets", name:"Chain & Lockets", img:"/assets/necklace/AJ-N005.webp"', 'id:"chain-lockets", name:"Chain & Lockets", img:"/assets/Men\'s jewellery/AJ-M017.webp"');

// Replace the products array
const jsonStr = JSON.stringify(products, null, 2);
const startMarker = 'products: [';
const endMarker = 'metals: [';

const sIdx = dataContent.indexOf(startMarker);
const mIdx = dataContent.indexOf(endMarker);

if (sIdx === -1 || mIdx === -1) {
  throw new Error(`Could not find products array bounds in data.js (sIdx: ${sIdx}, mIdx: ${mIdx})`);
}

// Find the closing bracket before metals: [
const eIdx = dataContent.lastIndexOf('],', mIdx);

const updatedDataContent = dataContent.substring(0, sIdx + 'products: '.length) + jsonStr + dataContent.substring(eIdx + 1);

fs.writeFileSync(dataPath, updatedDataContent, 'utf8');
console.log('Successfully written new data.js!');
