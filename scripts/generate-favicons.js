const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const lightSvgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon-light.svg'));
  const darkSvgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon-dark.svg'));
  
  // Generate favicon.png (32x32)
  await sharp(darkSvgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));

  // Generate apple-touch-icon.png (180x180) - using light theme
  await sharp(lightSvgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // Generate android-chrome icons - using light theme
  await sharp(lightSvgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/android-chrome-192x192.png'));

  await sharp(lightSvgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/android-chrome-512x512.png'));
}

generateFavicons().catch(console.error);
