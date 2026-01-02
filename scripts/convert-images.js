const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('The `sharp` package is required to run this script. Install it with `npm i -D sharp` and try again.');
  process.exit(1);
}

const inputDir = path.join(__dirname, '..', 'public', 'images');
const outputDir = inputDir; // write next to originals

const widths = [480, 768, 1200];

fs.readdir(inputDir, async (err, files) => {
  if (err) return console.error(err);
  const images = files.filter((f) => /\.(png|jpe?g)$/i.test(f));
  for (const file of images) {
    const inputPath = path.join(inputDir, file);
    const baseName = file.replace(/\.[^.]+$/, '');
    for (const w of widths) {
      const outName = `${baseName}-${w}.webp`;
      const outPath = path.join(outputDir, outName);
      try {
        await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
        console.log('Created', outName);
      } catch (e) {
        console.error('Failed for', file, e.message);
      }
    }
    // Also create a full-size webp
    const fullOut = path.join(outputDir, `${baseName}.webp`);
    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(fullOut);
      console.log('Created', `${baseName}.webp`);
    } catch (e) {
      console.error('Failed to create full webp for', file, e.message);
    }
  }
});
