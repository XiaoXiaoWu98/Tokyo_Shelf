/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-24 21:35:42
 * @LastEditTime: 2021-06-24 22:54:43
 * @LastEditors: Tokyo
 * @FilePath: /Tokyo_Shelf/app.ts
 */
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

import { ConfigProvider } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

export default (props) => {
  console.log('children', props);
  return props.children;
};
