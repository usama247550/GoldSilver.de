const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "../public");

async function convert(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convert(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
      const output = fullPath.replace(ext, ".webp");

      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(output);

        console.log("✓", output);
      } catch (err) {
        console.log("✗", fullPath, err.message);
      }
    }
  }
}

convert(publicDir)
  .then(() => console.log("All images converted to WebP"))
  .catch(console.error);