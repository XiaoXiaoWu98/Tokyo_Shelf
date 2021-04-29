/*
 * @Author: your name
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:31:53
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: \learn-umi\src\bcomponents\MyTable\index.tsx
 */
import { Table } from 'antd';
import tableEffectHoc from './tableEffectHoc';

export interface Btable {
  //请求体
  [propName: string]: any;
}

const BTable: Btable = { ...Table, tableEffectHoc };

export default BTable;
