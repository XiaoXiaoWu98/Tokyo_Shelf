/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-04-26 11:02:09
 * @LastEditTime: 2021-04-28 09:24:41
 * @LastEditors: Tokyo
 * @FilePath: \Tokyo_Shelf\config\config.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Tokyo专属架子',
  favicon: '/assets/favicon.ico',
  hash: true,
  exportStatic: { dynamicRoot: true },
  antd: {
    // dark: true, //配置antd主题
    // compact: true,
  },
  dva: {
    // immer: true,  开启saga另一种写法
    hmr: false,
  },
  // targets: { ie: 11 },
  history: { type: 'hash' },
  publicPath: process.env.NODE_ENV === 'production' ? '/foo/' : '/',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [//使用约定式路由
  //   { path: '/', component: '@/pages/index' },
  // ],

  fastRefresh: {},
  //   proxy: {
  //     '/api': {
  //       'target': 'http://jsonplaceholder.typicode.com/',
  //       'changeOrigin': true,
  //       'pathRewrite': { '^/api' : '' },
  //     },
  //   },
});
