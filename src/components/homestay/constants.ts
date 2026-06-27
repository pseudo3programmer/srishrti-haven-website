// TODO: Replace WhatsApp number and Instagram handle with the cottage owner's real details.
export const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX";
export const INSTAGRAM_URL = "https://instagram.com/HANDLE";
export const PHONE_DISPLAY = "+91 XXXXX XXXXX";
export const EMAIL = "hello@shreesrushti.in";

// TODO: Replace with the exact Google Maps pin URL provided by the cottage owner.
// Approx coordinates for Matheran, Maharashtra: 19.2926° N, 73.2702° E
export const MAP_QUERY = "Matheran,Maharashtra,India";
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&output=embed`;
export const MAP_OPEN_URL = `https://maps.google.com/?q=${encodeURIComponent(MAP_QUERY)}`;
export const MAP_DIRECTIONS_URL = `https://maps.google.com/maps/dir//${encodeURIComponent(MAP_QUERY)}`;

// TODO: Once a Google Places Place ID is available, swap the static reviews below
// for a live fetch via a serverless function (CORS blocks direct browser calls):
//   GET https://maps.googleapis.com/maps/api/place/details/json?place_id=PLACE_ID&fields=name,rating,reviews,user_ratings_total&key=YOUR_KEY
// Method A: serverless endpoint at /api/reviews returning the JSON.
// Method B: Embed Google's official Reviews Widget.
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(MAP_QUERY);
