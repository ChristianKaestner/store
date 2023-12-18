export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="20%" style="stop-color:#001219; stop-opacity:1" />
      <stop offset="50%" style="stop-color:#002233; stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#001219; stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#shimmerGradient)" />
  <rect id="shimmerRect" width="${w}" height="${h}" fill="url(#shimmerGradient)">
    <animate attributeName="x" values="-${w}; ${w}" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>`;

export const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
