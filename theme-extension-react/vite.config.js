// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//     plugins: [react()],
//     build: {
//         outDir: path.resolve(__dirname, "../extensions/blue-box/assets"),
//         emptyOutDir: false,
//         rollupOptions: {
//             input: path.resolve(__dirname, "src/index.tsx"),
//             output: {
//                 entryFileNames: "blue-box.js",
//                 format: "iife",
//             },
//         },
//     },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",            // ✅ CHỈ build vào dist
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, "src/index.tsx"),
            output: {
                entryFileNames: "blue-box.js",
                format: "iife",        // Shopify cần IIFE
            },
        },
    },
});

