const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const outputDir = path.join(__dirname, "..", "public", "placeholders");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const placeholders = [
  { file: "hero-poster.jpg", title: "HERO WORKSPACE REEL", subtitle: "Wide Frame Commercial Floor (Pan-India)" },
  { file: "og-cover.jpg", title: "DREAMZ WORKSPACES", subtitle: "Your Vision, Our Responsibility." },
  { file: "solution-commercial.jpg", title: "COMMERCIAL FURNITURE", subtitle: "Ergonomic Seating and Collaboration Suites" },
  { file: "solution-modular.jpg", title: "MODULAR SYSTEMS", subtitle: "Scalable Desking and Cable Raceways" },
  { file: "solution-turnkey.jpg", title: "TURNKEY WORKSPACE", subtitle: "Single Accountability Brief to Handover" },
  { file: "project-01.jpg", title: "PROJECT 01: FINTECH HQ", subtitle: "450+ Workstations and Task Seating" },
  { file: "project-01-detail-1.jpg", title: "PROJECT 01: BOARDROOM", subtitle: "Concealed Pop-up Connectivity" },
  { file: "project-01-detail-2.jpg", title: "PROJECT 01: BREAKOUT", subtitle: "Acoustic Seating and Lounges" },
  { file: "project-02.jpg", title: "PROJECT 02: TECH CAMPUS", subtitle: "600+ Modular Workstations" },
  { file: "project-02-detail-1.jpg", title: "PROJECT 02: SPINE DUCTS", subtitle: "Under-desk Integrated Cable Routing" },
  { file: "project-02-detail-2.jpg", title: "PROJECT 02: ACOUSTIC SCREENS", subtitle: "Pinnable Fabric Modesty Panels" },
  { file: "project-03.jpg", title: "PROJECT 03: SPECULATIVE SUITE", subtitle: "Turnkey Commercial Tower Floor Plate" },
  { file: "project-03-before.jpg", title: "PROJECT 03: BARE SHELL", subtitle: "Pre-Fitout Unfurnished Floor Plate" },
  { file: "project-03-detail-1.jpg", title: "PROJECT 03: PHONE BOOTH", subtitle: "Sound-Isolated Collaboration Pod" },
  { file: "project-03-detail-2.jpg", title: "PROJECT 03: RECEPTION", subtitle: "Integrated Loose Furniture Package" },
  { file: "project-04.jpg", title: "PROJECT 04: CONSULTING OFFICE", subtitle: "Executive Private Offices and Suites" },
  { file: "project-04-detail-1.jpg", title: "PROJECT 04: MEETING ROOM", subtitle: "Conference Desking and Swivel Bases" },
];

async function createPlaceholder({ file, title, subtitle }) {
  const width = 1200;
  const height = 800;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#E6E2DB"/>
    <rect x="30" y="30" width="${width - 60}" height="${height - 60}" fill="none" stroke="#A8ABAF" stroke-width="2" stroke-dasharray="8 8"/>
    
    <line x1="0" y1="200" x2="${width}" y2="200" stroke="#DDD8CF" stroke-width="1"/>
    <line x1="0" y1="400" x2="${width}" y2="400" stroke="#DDD8CF" stroke-width="1"/>
    <line x1="0" y1="600" x2="${width}" y2="600" stroke="#DDD8CF" stroke-width="1"/>
    <line x1="300" y1="0" x2="300" y2="${height}" stroke="#DDD8CF" stroke-width="1"/>
    <line x1="600" y1="0" x2="600" y2="${height}" stroke="#DDD8CF" stroke-width="1"/>
    <line x1="900" y1="0" x2="900" y2="${height}" stroke="#DDD8CF" stroke-width="1"/>

    <rect x="80" y="80" width="340" height="36" fill="#1C1C1E" rx="2"/>
    <text x="96" y="103" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#F5F3EF" letter-spacing="2">PLACEHOLDER ASSET</text>

    <text x="80" y="380" font-family="Arial, sans-serif" font-size="44" font-weight="800" fill="#1C1C1E" letter-spacing="-1">${title}</text>
    <text x="80" y="430" font-family="Arial, sans-serif" font-size="22" font-weight="500" fill="#E8620C">${subtitle}</text>
    
    <text x="80" y="700" font-family="Arial, sans-serif" font-size="14" fill="#6B6E72">
      Dreamz Commercial Workspaces • Photography placeholder pending final client handover approval
    </text>
  </svg>
  `;

  const dest = path.join(outputDir, file);
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(dest);
  console.log("Generated:", file);
}

async function run() {
  for (const item of placeholders) {
    await createPlaceholder(item);
  }

  const logoSvg = `
  <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="120" fill="#1C1C1E"/>
    <text x="30" y="75" font-family="Arial, sans-serif" font-size="48" font-weight="800" fill="#F5F3EF" letter-spacing="-1">DREAMZ</text>
    <circle cx="250" cy="65" r="8" fill="#E8620C"/>
  </svg>
  `;
  await sharp(Buffer.from(logoSvg)).png().toFile(path.join(outputDir, "logo.png"));
  console.log("Generated logo.png");
}

run().catch((err) => {
  console.error("Error generating placeholders:", err);
  process.exit(1);
});
