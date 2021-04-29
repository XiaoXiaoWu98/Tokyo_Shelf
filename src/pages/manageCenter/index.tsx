/*
 * @Author: Tokyo
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:34:41
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: \learn-umi\src\pages\Home\_layout.tsx
 */
import React from 'react';
import { history } from 'umi';
interface Props {}

const index = (props: Props) => {
  const routerJump = () => {
    history.push('./login');
  };
  return <div onClick={routerJump}>哈哈哈</div>;
};

export default index;
