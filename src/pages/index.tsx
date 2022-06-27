/*
 * @Author: Tokyo
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-10-21 03:14:40
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: /Tokyo_Shelf/src/pages/index.tsx
 */
import React, { ReactNode } from 'react';
import { Redirect } from 'react-router';

export default function IndexPage(): ReactNode {
  return <Redirect to="/login" />;
}
