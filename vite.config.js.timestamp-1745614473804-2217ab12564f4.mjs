// vite.config.js
import path from "path";
import { sveltekit } from "file:///home/jonathanm/github/sveltekit-tailwind-blog-starter/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import svg from "file:///home/jonathanm/github/sveltekit-tailwind-blog-starter/node_modules/@poppanator/sveltekit-svg/dist/index.js";
import fs from "fs";
var svgPluginOptions = {
  svgoOptions: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      },
      "removeDimensions"
    ]
  }
};
var config = {
  resolve: {
    alias: {
      $icons: path.resolve("./src/icons"),
      $utils: path.resolve("./src/utils")
    }
  },
  plugins: [sveltekit(), svg(svgPluginOptions), rawFonts([".ttf"])],
  legacy: { buildSsrCjsExternalHeuristics: true }
};
function rawFonts(ext) {
  return {
    name: "vite-plugin-raw-fonts",
    transform(code, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return { code: `export default ${JSON.stringify(buffer)}`, map: null };
      }
    }
  };
}
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qb25hdGhhbm0vZ2l0aHViL3N2ZWx0ZWtpdC10YWlsd2luZC1ibG9nLXN0YXJ0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2pvbmF0aGFubS9naXRodWIvc3ZlbHRla2l0LXRhaWx3aW5kLWJsb2ctc3RhcnRlci92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qb25hdGhhbm0vZ2l0aHViL3N2ZWx0ZWtpdC10YWlsd2luZC1ibG9nLXN0YXJ0ZXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5pbXBvcnQgc3ZnIGZyb20gJ0Bwb3BwYW5hdG9yL3N2ZWx0ZWtpdC1zdmcnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3Qgc3ZnUGx1Z2luT3B0aW9ucyA9IHtcblx0c3Znb09wdGlvbnM6IHtcblx0XHRwbHVnaW5zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdwcmVzZXQtZGVmYXVsdCcsXG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdG92ZXJyaWRlczoge1xuXHRcdFx0XHRcdFx0cmVtb3ZlVmlld0JveDogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncmVtb3ZlRGltZW5zaW9ucydcblx0XHRdXG5cdH1cbn07XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmNvbnN0IGNvbmZpZyA9IHtcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQkaWNvbnM6IHBhdGgucmVzb2x2ZSgnLi9zcmMvaWNvbnMnKSxcblx0XHRcdCR1dGlsczogcGF0aC5yZXNvbHZlKCcuL3NyYy91dGlscycpXG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCksIHN2ZyhzdmdQbHVnaW5PcHRpb25zKSwgcmF3Rm9udHMoWycudHRmJ10pXSxcblx0bGVnYWN5OiB7IGJ1aWxkU3NyQ2pzRXh0ZXJuYWxIZXVyaXN0aWNzOiB0cnVlIH1cbn07XG5cbmZ1bmN0aW9uIHJhd0ZvbnRzKGV4dCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6ICd2aXRlLXBsdWdpbi1yYXctZm9udHMnLFxuXHRcdHRyYW5zZm9ybShjb2RlLCBpZCkge1xuXHRcdFx0aWYgKGV4dC5zb21lKChlKSA9PiBpZC5lbmRzV2l0aChlKSkpIHtcblx0XHRcdFx0Y29uc3QgYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKGlkKTtcblx0XHRcdFx0cmV0dXJuIHsgY29kZTogYGV4cG9ydCBkZWZhdWx0ICR7SlNPTi5zdHJpbmdpZnkoYnVmZmVyKX1gLCBtYXA6IG51bGwgfTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1YsT0FBTyxVQUFVO0FBQ3JXLFNBQVMsaUJBQWlCO0FBQzFCLE9BQU8sU0FBUztBQUNoQixPQUFPLFFBQVE7QUFFZixJQUFNLG1CQUFtQjtBQUFBLEVBQ3hCLGFBQWE7QUFBQSxJQUNaLFNBQVM7QUFBQSxNQUNSO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsVUFDUCxXQUFXO0FBQUEsWUFDVixlQUFlO0FBQUEsVUFDaEI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNEO0FBR0EsSUFBTSxTQUFTO0FBQUEsRUFDZCxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixRQUFRLEtBQUssUUFBUSxhQUFhO0FBQUEsTUFDbEMsUUFBUSxLQUFLLFFBQVEsYUFBYTtBQUFBLElBQ25DO0FBQUEsRUFDRDtBQUFBLEVBQ0EsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQ2hFLFFBQVEsRUFBRSwrQkFBK0IsS0FBSztBQUMvQztBQUVBLFNBQVMsU0FBUyxLQUFLO0FBQ3RCLFNBQU87QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVUsTUFBTSxJQUFJO0FBQ25CLFVBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUc7QUFDcEMsY0FBTSxTQUFTLEdBQUcsYUFBYSxFQUFFO0FBQ2pDLGVBQU8sRUFBRSxNQUFNLGtCQUFrQixLQUFLLFVBQVUsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLO0FBQUEsTUFDdEU7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNEO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
