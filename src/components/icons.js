/** Inline SVG icons (24×24, stroke-based). Use: icon("mail"). */
const PATHS = {
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  graduation: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 13.5 7 21l5-3 5 3-1.5-7.5"/>',
  pin: '<path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  monitor: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  github:
    '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 0 0-.8-2.2c2.8-.3 5.8-1.4 5.8-6.3a4.9 4.9 0 0 0-1.4-3.4 4.6 4.6 0 0 0-.1-3.4S17.4 1.4 15 3a13 13 0 0 0-6 0C6.6 1.4 5.5 1.8 5.5 1.8a4.6 4.6 0 0 0-.1 3.4 4.9 4.9 0 0 0-1.4 3.4c0 4.9 3 6 5.8 6.3a3 3 0 0 0-.8 2.2V20"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  arrowLeft: '<path d="M19 12H5M12 5l-7 7 7 7"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
};

export function icon(name, strokeWidth = 1.6) {
  const paths = PATHS[name];
  if (!paths) {
    console.warn(`[icons] unknown icon "${name}"`);
    return "";
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
}
