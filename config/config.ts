/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-04-26 11:02:09
 * @LastEditTime: 2021-06-24 23:18:04
 * @LastEditors: Tokyo
 * @FilePath: /Tokyo_Shelf/config/config.ts
 */
import { defineConfig } from 'umi';
// import viewer from './cesiumConfig';
const cesium = 'node_modules/cesium/Build/Cesium';
const path = require('path');

export default defineConfig({
  title: 'Tokyo专属架子',
  favicon: '/assets/favicon.ico',
  hash: true,
  exportStatic: { dynamicRoot: true },
  antd: {
    // dark: true, //配置antd主题
    // compact: true,
    config: {
      ConfigProvider: {
        input: { autoComplete: 'off', componentSize: 'large' },
      },
    },

    // config: { input: { autoComplete: 'off' } },
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
  copy: [{ from: path.join(cesium, ''), to: 'cesium' }],
  define: {
    CESIUM_BASE_URL: 'cesium',
    // viewer: viewer,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    // title: false,
    // baseNavigator: true,
    // baseSeparator: '-',
  },
  webpack5: {},
  // mfsu: {},

  chainWebpack(config) {
    // antd moment -> dayjs
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin', [
      {
        preset: 'antdv4',
      },
    ]);
  },
  // routes: [//使用约定式路由
  //   { path: '/', component: '@/pages/index' },
  // ],
  dynamicImport: {}, //按需加载模块
});
