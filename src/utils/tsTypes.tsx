/*
 * @Author: Tokyo
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:35:26
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: \learn-umi\src\utils\tsTypes.tsx
 */
import React from 'react';

interface Render {
  [propName: string]: any;
}

export interface Columns {
  title: string;
  dataIndex: string;
  key: string;
  align?: string;
  sorter?: string;
  width?: string;
  render?: (value: number | string, record: Render) => {};
  [propName: string]: any;
}
