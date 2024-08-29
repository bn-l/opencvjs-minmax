import fs from "node:fs";
// node_modules\@techstark\opencv-js\src\types\opencv
const sourceDir = "./node_modules/@techstark/opencv-js/src/types/opencv/";
const targetDir = "./src/lib/types/opencv/";

// Ensure the target directory exists
fs.mkdirSync(targetDir, { recursive: true });

// Copy the directory contents recursively
fs.cpSync(sourceDir, targetDir, { recursive: true, force: true });

console.log(`Copied OpenCV types from ${sourceDir} to ${targetDir}`);
