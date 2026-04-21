// const fs = require("fs");
// const path = require("path");

// const src = path.resolve(
//     __dirname,
//     "../extensions/blue-box/assets/blue-box.js"
// );

// const destDir = path.resolve(__dirname, "../public");
// const dest = path.join(destDir, "blue-box.js");

// if (!fs.existsSync(destDir)) {
//     fs.mkdirSync(destDir, { recursive: true });
// }

// fs.copyFileSync(src, dest);
// console.log("✔ blue-box.js copied to app/public");



// const fs = require("fs");
// const path = require("path");

// const ROOT = path.resolve(__dirname, ".."); // trỏ về root app
// const source = path.join(__dirname, "dist", "blue-box.js");
// const target = path.join(ROOT, "public", "blue-box.js");

// // đảm bảo public tồn tại
// if (!fs.existsSync(path.join(ROOT, "public"))) {
//     fs.mkdirSync(path.join(ROOT, "public"));
// }

// fs.copyFileSync(source, target);
// console.log("✅ Copied blue-box.js → public/");


const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const source = path.resolve(__dirname, "dist/blue-box.js");

const targets = [
    path.resolve(root, "extensions/blue-box/assets/blue-box.js"),
    path.resolve(root, "public/blue-box.js"),
];

if (!fs.existsSync(source)) {
    console.error("❌ dist/blue-box.js not found. Run build first.");
    process.exit(1);
}

targets.forEach((target) => {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
    console.log("✅ Copied to:", target);
});


// React source
//    ↓
// vite build
//    ↓
// dist / blue - box.js        ← single source of truth
//    ↓
// copy script
//    ↓
// ├─ extensions /...       ← Online Store(Liquid)
// └─ public /...           ← Proxy / Preview

