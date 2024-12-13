const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');

function sanitizeFilename(filename) {
    // Remove non-alphanumeric characters and limit length
    return filename
        .replace(/[^a-zA-Z0-9.-]/g, '_')
        .slice(0, 20);
}

function hashFilename(filepath) {
    const hash = crypto
        .createHash('md5')
        .update(filepath)
        .digest('hex')
        .slice(0, 8);
    const ext = path.extname(filepath);
    return `${hash}${ext}`;
}

function processDirectory(sourceDir, destDir) {
    // Ensure destination directory exists
    fs.ensureDirSync(destDir);

    // Tracking for file mappings
    const fileMapping = {};

    function processFiles(currentPath, relativePath = '') {
        const items = fs.readdirSync(currentPath);

        items.forEach(item => {
            const sourcePath = path.join(currentPath, item);
            const stats = fs.statSync(sourcePath);

            if (stats.isDirectory()) {
                // Recursively process subdirectories
                processFiles(sourcePath, path.join(relativePath, item));
            } else {
                // Process individual files
                const originalRelativePath = path.join(relativePath, item);
                const optimizedFilename = hashFilename(originalRelativePath);
                const destPath = path.join(destDir, optimizedFilename);

                // Copy file
                fs.copyFileSync(sourcePath, destPath);

                // Track original to new mapping
                fileMapping['/' + optimizedFilename] = '/' + originalRelativePath;

                console.log(`Processed: ${originalRelativePath} → ${optimizedFilename}`);
            }
        });
    }

    // Start processing
    processFiles(sourceDir);

    // Write mapping file for ESP32 reference
    fs.writeJsonSync(path.join(destDir, 'file_mapping.json'), fileMapping, { spaces: 2 });

    return fileMapping;
}

// Paths - adjust these to your project structure
const nextExportDir = './out';  // Next.js export directory
const spiffsDir = './data';     // SPIFFS upload directory

// Clean and prepare SPIFFS directory
fs.removeSync(spiffsDir);
fs.ensureDirSync(spiffsDir);

// Process files
const mapping = processDirectory(nextExportDir, spiffsDir);

console.log('SPIFFS optimization complete!');