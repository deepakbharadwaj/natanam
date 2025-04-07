const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SIZES = {
  small: 400,
  medium: 800,
  large: 1200,
};

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate WebP versions
  for (const [size, width] of Object.entries(SIZES)) {
    // WebP version
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${nameWithoutExt}-${size}.webp`));

    // Original format version (resized)
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .toFile(path.join(outputDir, `${nameWithoutExt}-${size}${path.extname(filename)}`));
  }
}

async function processDirectory(inputDir, outputDir) {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const filePath = path.join(inputDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Process subdirectory
      const newOutputDir = path.join(outputDir, file);
      await processDirectory(filePath, newOutputDir);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      // Process image file
      console.log(`Processing ${file}...`);
      try {
        await optimizeImage(filePath, outputDir);
        console.log(`✓ Optimized ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
}

// Main execution
const inputDir = path.join(__dirname, "../src/assets");
const outputDir = path.join(__dirname, "../src/assets/optimized");

processDirectory(inputDir, outputDir)
  .then(() => console.log("Image optimization complete!"))
  .catch(console.error);
