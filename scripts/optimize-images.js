// Image optimization script using sharp
// Usage: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { file: 'about-hero.jpg', width: 1200, height: 800, quality: 80 },
  { file: 'cqta-logo-100x100.png', width: 400, height: 400, quality: 80 },
  { file: 'cqta-logo.png', width: 800, height: 800, quality: 80 },
  { file: 'hero-canada.jpg', width: 1200, height: 800, quality: 80 },
  { file: 'hero-maple.jpg', width: 1200, height: 800, quality: 80 },
];

const publicDir = path.join(__dirname, '../public');

(async () => {
  for (const img of images) {
    const imgPath = path.join(publicDir, img.file);
    if (!fs.existsSync(imgPath)) {
      console.log(`File not found: ${img.file}`);
      continue;
    }
    const ext = path.extname(img.file).toLowerCase();
    const outputOptions =
      ext === '.png'
        ? { compressionLevel: 9, quality: img.quality }
        : { quality: img.quality };
    try {
      await sharp(imgPath)
        .resize(img.width, img.height, { fit: 'inside' })
        [ext === '.png' ? 'png' : 'jpeg'](outputOptions)
        .toFile(imgPath + '.optimized');
      fs.renameSync(imgPath + '.optimized', imgPath);
      console.log(`Optimized: ${img.file}`);
    } catch (err) {
      console.error(`Error optimizing ${img.file}:`, err);
    }
  }
})();
