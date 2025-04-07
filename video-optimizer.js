const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ASSETS_DIR = path.join(__dirname, "src", "assets");
const OPTIMIZED_DIR = path.join(__dirname, "src", "assets", "optimized");

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Video optimization settings
const VIDEO_SETTINGS = {
  width: 1280,
  height: 720,
  bitrate: "2000k",
};

function optimizeVideo(filePath) {
  const fileName = path.basename(filePath);
  const outputPath = path.join(OPTIMIZED_DIR, fileName);

  try {
    console.log(`Processing video: ${fileName}`);
    execSync(
      `ffmpeg -i "${filePath}" -vf "scale=${VIDEO_SETTINGS.width}:${VIDEO_SETTINGS.height}" -b:v ${VIDEO_SETTINGS.bitrate} -c:v libx264 -preset medium -crf 23 "${outputPath}"`
    );
    console.log(`Successfully optimized video: ${fileName}`);
  } catch (error) {
    console.error(`Error optimizing ${fileName}:`, error);
  }
}

async function processVideos() {
  const files = fs.readdirSync(ASSETS_DIR);

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const ext = path.extname(file).toLowerCase();

    if ([".mp4", ".mov"].includes(ext)) {
      optimizeVideo(filePath);
    }
  }
}

processVideos()
  .then(() => {
    console.log("Video optimization complete!");
  })
  .catch((error) => {
    console.error("Error during optimization:", error);
  });
