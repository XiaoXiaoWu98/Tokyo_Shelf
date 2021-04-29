/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-04-26 09:36:40
 * @LastEditTime: 2021-04-26 09:59:50
 * @LastEditors: Tokyo
 */
import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const index = (props: Props) => {
  return (
    <div>
      <div>ManageCenter Layout</div>
      <div>{props.children}</div>
    </div>
  );
};

export default index;
