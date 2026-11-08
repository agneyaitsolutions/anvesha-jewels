# Raw excel data provided by user
RAW_DATA = """
Earrings,Rings,Necklace,Bracelet,Collection,Accessories,Men's Jewellery,Gifting
,,,,,,,
Ear Studs,Light-weight Rings,Festive Necklaces,Tennis Bracelets,India Festive,Mangalsutra,Stud Earrings,Top Picks
Drop & Danglers,Cocktail Rings,Pendant Necklaces,Bangles,Everyday Essentials,Anklets,Bracelet,Birthday Gufts
Hoops (Bali ),Everday Rings,Chokers,,Life of the Party,Nose Pin,Rings,Engagment Gifts
Everday earrings,,,,,,Chain & Lockets,Anniversary Gifts
Earrings,,Rings,,Necklace,,Bracelet,,Men's Jewellery
,,,,,,,,
| AJ-E001      | Celeste Duo        |,,| AJ-R001      | Celeste             |,,AJ-N001         | Celeste Tennis Necklace    |,,| AJ-B001      | Celeste Cuff       |,,| AJ-M001      | The Monarch Signet |
| AJ-E002      | Aurelia Bloom      |,,| AJ-R002      | Élan                |,,| AJ-N002      | Solitaire Grace Pendant    |,,| AJ-B002      | Étoile Trio        |,,| AJ-M002      | Solis Pendant      |
| AJ-E003      | Maharani           |,,| AJ-R003      | Infinity Grace      |,,| AJ-N003      | Éclat Pearl Necklace       |,,| AJ-B003      | Royal Radiance     |,,| AJ-M003      | Triad Stud         | 
| AJ-E004      | Soleil Burst       |,,| AJ-R004      | Golden Lattice      |,,| AJ-N004      | Thea Geometric Necklace    |,,| AJ-B004      | Lumière Band       |,,| AJ-M004      | Axis Bracelet      | 
| AJ-E005      | Daisy Dew          |,,| AJ-R005      | Seraphina           |,,| AJ-N005      | Aurelia Floral Set         |,,| AJ-B005      | Dainty Grace       |,,| AJ-M005      | Quadra Stud        | 
| AJ-E006      | Snowflake Radiance |,,| AJ-R006      | Aurora Halo         |,,| AJ-N006      | Mira Square Pendant        |,,| AJ-B006      | Celestial Bloom    |,,| AJ-M006      | Imperial Ring      | 
| AJ-E007      | Golden Petals      |,,| AJ-R007      | Eternal Twist       |,,| AJ-N007      | Emerald Royale Necklace    |,,| AJ-B007      | Rosé Link          |,,| AJ-M007      | Solitaire Stud     | 
| AJ-E008      | Pearl Étoile       |,,| AJ-R008      | Amorette            |,,| AJ-N008      | Ruby Luxe Set              |,,| AJ-B008      | Golden Whisper     |,,| AJ-M008      | Heritage Signet    | 
| AJ-E009      | Celestial Studs    |,,| AJ-R009      | Intertwined         |,,| AJ-N009      | Celestia Chandbali Set     |,,| AJ-B009      | Petal Embrace      |,,| AJ-M009      | Apex Solitaire     | 
| AJ-E010      | Halo Lumière       |,,| AJ-R010      | Soleil Bloom        |,,| AJ-N010      | Peacock Majesty Pendant    |,,| AJ-B010      | Aurora Pavé        |,,| AJ-M010      | Trigon Stud        | 
| AJ-E011      | Golden Drizzle     |,,| AJ-R011      | The Royal Edit      |,,| AJ-N011      | Orbit Diamond Pendant      |,,| AJ-B011      | Solstice Bangle    |,,| AJ-M011      | Azure Bracelet     | 
| AJ-E012      | Seraphina Drops    |,,| AJ-R012      | Imperial Radiance   |,,| AJ-N012      | Twin Soul Pendant          |,,| AJ-B012      | Rosé Royale        |,,| AJ-M012      | Twinline Bracelet  | 
| AJ-E013      | Éternelle          |,,| AJ-R013      | Signature Luxe      |,,| AJ-N013      | Serene Diamond Necklace    |,,| AJ-B013      | Infinity Weave     |,,| AJ-M013      | Obsidian Bracelet  | 
| AJ-E014      | Royal Cushion      |,,| AJ-R014      | Rosé Blossom        |,,| AJ-N014      | Rosé Bloom Pendant         |,,| AJ-B014      | Link & Luxe        |,,| AJ-M014      | Prestige Band      | 
| AJ-E015      | Rosé Halo          |,,| AJ-R015      | Fluid Grace         |,,| AJ-N015      | Petalia Diamond Necklace   |,,| AJ-B015      | Diamond Muse       |,,| AJ-M015      | Radiant Crest      | 
| AJ-E016      | Golden Embrace     |,,| AJ-R016      | Rose Royale         |,,| AJ-N016      | Dainty Luxe Necklace       |,,| AJ-B016      | Eternal Spark      |,,| AJ-M016      | Legacy Pendant     | 
| AJ-E017      | Twin Spark         |,,| AJ-R017      | Petal Kiss          |,,| AJ-N017      | Elara Drop Pendant         |,,| AJ-B017      | Crystal Line       |,,| AJ-M017      | Emerald Crest      | 
| AJ-E018      | Silver Symphony    |,,| AJ-R018      | Deux Amour          |,,| AJ-N018      | Fleur Royale Pendant       |,,| AJ-B018      | Elara Bracelet     |,,| AJ-M018      | Noir Bar Pendant   | 
| AJ-E019      | Aurora Bloom       |,,| AJ-R019      | Baguette Luxe       |,,| AJ-N019      | Solstice Diamond Pendant   |,,| AJ-B019      | Golden Serpentine  |,,| AJ-M019      | Onyx Pendant       | 
| AJ-E020      | Emerald Enchant    |,,| AJ-R020      | Diamond Bloom       |,,| AJ-N020      | Vanya Statement Necklace   |,,| AJ-B020      | Luxe Tennis        |,,| AJ-M020      | Classic Huggie     | 
| AJ-E021      | Diamond Duchess    |,,| AJ-R021      | Trinity             |,,| AJ-N021      | Maharani Heritage Set      |,,| AJ-B021      | Twin Elegance      |,,| AJ-M021      | Pavé Square Stud   | 
| AJ-E022      | Golden Teardrop    |,,| AJ-R022      | Emerald Elegance    |,,| AJ-N022      | Golden Aura Necklace       |,,| AJ-B022      | Starburst Bracelet |,,| AJ-M022      | Titan Bar Pendant  | 
| AJ-E023      | Midnight Noir      |,,| AJ-R023      | The Empress         |,,| AJ-N023      | Ruby Empress Set           |,,| AJ-B023      | Imperial Link      |,,| AJ-M023      | Orbit Stud         | 
| AJ-E024      | Starlight Bloom    |,,| AJ-R024      | Cushion Royale      |,,| AJ-N024      | Blossom Diamond Necklace   |,,| AJ-B024      | Double Eternity    |,,| AJ-M024      | Link Luxe Bracelet | 
| AJ-E025      | Ruby Muse          |,,| AJ-R025      | Fiesta Bloom        |,,| AJ-N025      | Noor Floral Pendant        |,,| AJ-B025      | Majestic Pavé      |,,| AJ-M025      | Signature Band     | 
| AJ-E026      | Frosted Flora      |,,| AJ-R026      | Golden Whirl        |,,| AJ-N026      | Maharani Collar Necklace   |,,| AJ-B026      | Golden Halo        |,,| AJ-M026      | Trident Pendant    | 
| AJ-E027      | Ruby Royale        |,,| AJ-R027      | Dainty Spark        |,,| AJ-N027      | Everyday Elegance Necklace |,,| AJ-B027      | Geometric Luxe     |,,| AJ-M027      | Dual Arc Bracelet  | 
| AJ-E028      | Sapphire Grace     |,,| AJ-R028      | Linear Grace        |,,| AJ-N028      | Amara Bridal Set           |,,| AJ-B028      | Petal Trail        |,,| AJ-M028      | Maverick Hoop      | 
| AJ-E029      | Bluebell Elegance  |,,| AJ-R029      | Golden Petals       |,,| AJ-N029      | Rosalia Pendant Set        |,,| AJ-B029      | Rosé Infinity      |,,| AJ-M029      | Trinity Stud       | 
| AJ-E030      | Golden Waves       |,,| AJ-R030      | Serene Twist        |,,| AJ-N030      | Heart of Eternity Pendant  |,,| AJ-B030      | Golden Élan        |,,
| AJ-E031      | Sapphire Cascade   |,,| AJ-R031      | Starlight           |,,| AJ-N031      | Triple Grace Necklace Set  |,,| AJ-B031      | Marquise Muse      |,,
| AJ-E032      | Floral Whisper     |,,| AJ-R032      | Celestial Bloom     |,,| AJ-N032     | Celestia Choker,,| AJ-B032      | Diamond Cascade    |,,
| AJ-E033      | Celestial Cascade  |,,| AJ-R033      | Golden Interlace    |,,| AJ-N033    | Evara Necklace,,| AJ-B033      | Celestial Eye      |,,
| AJ-E034      | Golden Aura        |,,| AJ-R034      | Blossom Royale      |,,| AJ-N034    | Aurelle Choker,,| AJ-B034      | Rosé Crescent      |,,
| AJ-E035      | Ruby Blossom       |,,| AJ-R035      | Chevron Grace       |,,| AJ-N035    | Seraphine Necklace,,| AJ-B035      | Serpentine Glow    |,,
| AJ-E036      | Rosé Radiance      |,,| AJ-R036      | Rainbow Muse        |,,| AJ-N036     | Noore Choke,,| AJ-B036      | Solitaire Trail    |,,
| AJ-E037      | Diamond Cascade    |,,| AJ-R037      | Classic Radiance    |,,| AJ-N037   | Fancy Diamonds Choker,,,,
| AJ-E038      | Emerald Muse       |,,| AJ-R038      | Golden Eternity     |,,,,,,
| AJ-E039      | Silver Starlight   |,,| AJ-R039      | Pear Perfection     |,,,,,,
| AJ-E040      | Petal Glow         |,,| AJ-R040      | Halo Majesty        |,,,,,,
| AJ-E041      | Floral Grace       |,,| AJ-R041      | Ruby Empress        |,,,,,,
| AJ-E042      | Diamond Bloom      |,,| AJ-R042      | Emerald Luxe        |,,,,,,
| AJ-E043      | Golden Daisy       |,,| AJ-R043      | Grand Éclat         |,,,,,,
| AJ-E044      | Golden Cascade     |,,| AJ-R044      | Golden Symphony     |,,,,,,
| AJ-E045      | Noir Elegance      |,,| AJ-R045      | Butterfly Grace     |,,,,,,
| AJ-E046      | Golden Frame       |,,| AJ-R046      | Everyday Elegance   |,,,,,,
| AJ-E047      | Teardrop Royale    |,,| AJ-R047      | Delicate Muse       |,,,,,,
| AJ-E048      | Emerald Majesty    |,,| AJ-R048      | Statement Blue      |,,,,,,
| AJ-E049      | Diamond Rain       |,,| AJ-R049      | Solitaire Majesty   |,,,,,,
| AJ-E050      | Golden Twist       |,,| AJ-R050      | Pearls of Light     |,,,,,,
,,| AJ-R051      | Marquise Allure     |,,,,,,
Earrings,,,,,Rings,,,,Necklace,,,,Bangles,,,Men's Jewellery,,,
Product Cover Images - ,,AJ-039,,,Product Cover Images - ,,AJ-R047,,Product Cover Images - ,,AJ-N026,,Product Cover Images - AJ-B01,,,Product Cover Images - ,,AJ-M05,
,,,,,,,,,,,,,,,,,,,
Ear Studs,Drop & Danglers,Hoops (Bali ),Everday earrings,,Light-weight Rings,Cocktail Rings,Everday Rings,,Festive Necklaces,Pendant Necklaces,Chokers,,1. Tennis Bracelets,2. Bangles,,Stud Earrings,2. Bangles & Bracelet,Rings,Chain & Lockets
,,,,,,,,,,,,,,,,,,,
* AJ-E002,* AJ-E003,* AJ-E013,* AJ-E001,,* AJ-R004,* AJ-R001,* AJ-R003,,* AJ-N001,* AJ-N002,* AJ-N032,,* AJ-B002,* AJ-B001,,"AJ-M003, AJ-M005, AJ-M007, AJ-M010, AJ-M020, AJ-M021, AJ-M023, AJ-M028, AJ-M029","AJ-M004, AJ-M011, AJ-M012, AJ-M013, AJ-M024, AJ-M027","AJ-M001, AJ-M006, AJ-M008, AJ-M009, AJ-M014, AJ-M015, AJ-M025","AJ-M002, AJ-M016, AJ-M017, AJ-M018, AJ-M019, AJ-M022, AJ-M026"
* AJ-E005,* AJ-E004,,* AJ-E006,,* AJ-R008,* AJ-R002,* AJ-R005,,* AJ-N003,* AJ-N005,* AJ-N033,,,,,,,,
* AJ-E010,* AJ-E008,* AJ-E016,,,* AJ-R009,* AJ-R006,* AJ-R007,,* AJ-N004,* AJ-N006,* AJ-N034,,* AJ-B004,* AJ-B003,,,,,
* AJ-E020,* AJ-E011,,* AJ-E007,,* AJ-R019,* AJ-R010,* AJ-R014,,* AJ-N007,AJ-N009,* AJ-N035,,,,,,,,
* AJ-E024,* AJ-E012,* AJ-E018,,,* AJ-R020,* AJ-R011,* AJ-R017,,* AJ-N008,* AJ-N010,* AJ-N036,,* AJ-B005,* AJ-B008,,,,,
* AJ-E025,* AJ-E028 +* AJ-E029,,* AJ-E009,,* AJ-R021,* AJ-R012,* AJ-R018,,* AJ-N005,* AJ-N011,* AJ-N037,,,,,,,,
* AJ-E027,,* AJ-E030,,,* AJ-R026,* AJ-R013,* AJ-R020,,* AJ-N013,* AJ-N012,,,* AJ-B006,* AJ-B009,,,,,
* AJ-E032,* AJ-E031,,* AJ-E014,,* AJ-R028,* AJ-R015,* AJ-R027,,* AJ-N016,* AJ-N014,,,,,,,,,
* AJ-E035,,* AJ-E050,,,* AJ-R029,* AJ-R016,* AJ-R030,,* AJ-N020,* AJ-N015,,,* AJ-B007,* AJ-B010,,,,,
* AJ-E042,* AJ-E033,,* AJ-E015,,* AJ-R034,* AJ-R022,* AJ-R035,,* AJ-N021,* AJ-N017,,,,,,,,,
* AJ-E043,,* AJ-E034,,,* AJ-R038,* AJ-R023,* AJ-R045,,* AJ-N022,AJ-N018,,,* AJ-B014,* AJ-B011,,,,,
* AJ-E045,* AJ-E037,,* AJ-E017,,* AJ-R039,* AJ-R024,* AJ-R049,,* AJ-N023,* AJ-N019,,,,,,,,,
* AJ-E047,,* AJ-E050,,,* AJ-R042,* AJ-R025,,,* AJ-N024,AJ-N025,,,* AJ-B016,* AJ-B012,,,,,
* AJ-E048,* AJ-E038,,* AJ-E019,,* AJ-R044,* AJ-R031 +48,,,* AJ-N026,* AJ-N027,,,,,,,,,
,,* AJ-E022,,,* AJ-R051,* AJ-R032 + 47,,,* AJ-N028,* AJ-N030,,,* AJ-B017,* AJ-B013,,,,,
,* AJ-E039,,* AJ-E021,,* AJ-R043 + 46,* AJ-R033,,,* AJ-N029,,,,,,,,,,
,,,,,,* AJ-R036,,,* AJ-N031,,,,* AJ-B019,* AJ-B015,,,,,
,* AJ-E044,,* AJ-E022,,,* AJ-R037,,,,,,,,,,,,,
,,,,,,* AJ-R040,,,,,,,* AJ-B020,* AJ-B018,,,,,
,* AJ-E049,,* AJ-E023,,,* AJ-R041,,,,,,,,,,,,,
,,,* AJ-E036,,,* AJ-R050,,,,,,,* AJ-B022,* AJ-B021,,,,,
,,,,,,,,,,,,,,,,,,,
,,,* AJ-E040,,,,,,,,,,* AJ-B027,* AJ-B023,,,,,
,,,,,,,,,,,,,,,,,,,
,,,* AJ-E041,,,,,,,,,,* AJ-B028,* AJ-B024,,,,,
,,,* AJ-E043,,,,,,,,,,,,,,,,
,,,* AJ-E046,,,,,,,,,,* AJ-B035,* AJ-B025,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,* AJ-B036,* AJ-B026,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,15 Designs,* AJ-B029,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,* AJ-B030,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,* AJ-B031,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,* AJ-B032,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,* AJ-B033,,,,,
,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,* AJ-B034,,,,,
"""

