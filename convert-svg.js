const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'images', 'cognito-auth.svg');
const pngPath = path.join(__dirname, 'public', 'images', 'cognito-auth.png');

const svgBuffer = fs.readFileSync(svgPath);

sharp(svgBuffer)
  .resize(900, 650)
  .png()
  .toFile(pngPath)
  .then(() => console.log('PNG created:', pngPath))
  .catch(err => console.error('Error:', err));
