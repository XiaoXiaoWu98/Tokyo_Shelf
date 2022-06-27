/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-22 00:04:37
 * @LastEditTime: 2021-06-22 00:25:33
 * @LastEditors: Tokyo
 * @FilePath: /Tokyo_Shelf/config/config.local.ts
 */
import { defineConfig } from 'umi';
export default defineConfig({
  define: {
    'process.env': {
      BASE_URL: '/api',
    },
    // viewer: viewer,
  },
  fastRefresh: {}, //热更新 ，只保持组件编辑部分更改， 不会更新整个组件，不会重置状态，开发环境
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        // 如果要代理 websockets
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
