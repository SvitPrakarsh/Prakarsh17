import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	// root: "./",
	// publicDir: "public",
	// build: {
	// 	outDir: "build",
	// },
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat",
			"react-router": "preact-router",
		},
	},
});
