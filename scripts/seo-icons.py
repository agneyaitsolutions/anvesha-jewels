"""Site icons from one master: python3 scripts/seo-icons.py

assets/icons/icon-1024.png is the Anvesha monogram (Cormorant Garamond "A" in white on emerald #184736
with the gold sparkle from the logo). Every browser tab, bookmark, home-screen and search-result icon is
cut from it, so replacing that one file and re-running this updates them all.

Search engines want a square icon in a multiple of 48px (Google) at a stable address, so /favicon.ico
(16, 32, 48) sits at the site root and the PNGs below are linked from every page's <head>.
"""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
icons = root / "assets" / "icons"
master = Image.open(icons / "icon-1024.png").convert("RGBA")

def size(s):
    return master.resize((s, s), Image.LANCZOS)

for s in (48, 96, 144, 192, 512):
    size(s).save(icons / f"icon-{s}.png", optimize=True)
size(180).convert("RGB").save(root / "apple-touch-icon.png", optimize=True)
size(180).convert("RGB").save(icons / "apple-touch-icon.png", optimize=True)

# maskable icon for Android home screens: same art inside the 80% safe zone
mask = Image.new("RGBA", (512, 512), (24, 71, 54, 255))
mask.alpha_composite(size(410), (51, 51))
mask.save(icons / "icon-maskable-512.png", optimize=True)

size(48).save(root / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("icons written")
