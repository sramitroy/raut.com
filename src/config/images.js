// ---------------------------------------------------------------------------
// Image slots — every photo on the site is defined here. Swap any URL for a
// licensed/owned photo (local file in /public or a CDN URL) and the whole
// experience updates. Keep the same framing intent per slot:
//   heroExterior  — mansion facade at dusk, front door near center-frame
//   interiorHall  — entry hall / interior with warm light
//   groundsGolden — grounds / exterior at golden hour
// ---------------------------------------------------------------------------

// w=1600 keeps the hero's scaled GPU texture under the 4096px compositor cap
const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=78`

export const IMAGES = {
  heroExterior: u('photo-1505843513577-22bb7d21e455'),
  interiorHall: u('photo-1618221195710-dd6b41faaea6'),
  groundsGolden: u('photo-1558036117-15d82a90b9b1'),
}

// Order matches the three window interludes: 01 Estate, 02 Inside, 03 Long View
export const WORLD = [IMAGES.heroExterior, IMAGES.interiorHall, IMAGES.groundsGolden]
