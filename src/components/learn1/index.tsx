/*
 * @Author: your name
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-26 10:36:32
 * @LastEditors: Tokyo
 * @Description: In User Settings Edit
 * @FilePath: \Tokyo_Shelf\src\components\learn1\index.tsx
 */
import React, { ReactElement, useEffect } from 'react';
import { MyTable } from '@/bcomponents';
interface Props {
  url: string;
}

const Index = (props: Props): ReactElement => {
  const { url } = props;
  useEffect(() => {
    console.log('url', url);
    return () => {};
  }, []);
  console.log('renderUrl', url);
  return <div>components</div>;
};

export default MyTable.tableEffectHoc()(Index);
