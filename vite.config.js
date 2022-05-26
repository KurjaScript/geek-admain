import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock"
import { defineConfig } from "vite"

export default defineConfig ({
    base: './',
    plugins: [
        vue(),
        viteMockServe({
            mockPath: "./src/mock",
            supportTs: false  // 如果使用 ts 开发，则需要设置为 true
        }),
    ],
    optimizeDeps: {
        include: ['schart.js']
    },

})
