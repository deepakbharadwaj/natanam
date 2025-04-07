const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(__dirname, "src", "assets");
const OPTIMIZED_DIR = path.join(ASSETS_DIR, "optimized");

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

function copyFile(source, target) {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(target);

    readStream.on("error", (err) => {
      reject(err);
    });

    writeStream.on("error", (err) => {
      reject(err);
    });

    writeStream.on("finish", () => {
      resolve();
    });

    readStream.pipe(writeStream);
  });
}

async function processAssets() {
  const files = fs.readdirSync(ASSETS_DIR);
  let processedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const ext = path.extname(file).toLowerCase();

    // Skip directories, hidden files, and the optimized directory itself
    if (fs.statSync(filePath).isDirectory() || file.startsWith(".")) {
      skippedCount++;
      continue;
    }

    // Process only image files
    if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      const outputPath = path.join(OPTIMIZED_DIR, file);
      try {
        await copyFile(filePath, outputPath);
        console.log(`Copied: ${file}`);
        processedCount++;
      } catch (error) {
        console.error(`Error copying ${file}:`, error);
        skippedCount++;
      }
    } else {
      skippedCount++;
    }
  }

  console.log("\nProcessing complete!");
  console.log(`Processed: ${processedCount} files`);
  console.log(`Skipped: ${skippedCount} files`);
}

processAssets().catch((err) => {
  console.error("Error during asset processing:", err);
  process.exit(1);
});
