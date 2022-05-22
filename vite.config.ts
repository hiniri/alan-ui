import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 路径配置 @
import { resolve } from "path";

// element plus 按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Element Plus 自动导入配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 路径配置 @
  resolve: {
    alias: {
      // 路径别名
      "@": resolve(__dirname, "src"), 
    },
    // 使用路径别名时想要省略的后缀名，可以自己增减，Vite 官方不推荐忽略 .vue
    extensions: [".js", ".json", ".ts"], 
  },
});
