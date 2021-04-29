/*
 * @Author: your name
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:32:13
 * @LastEditors: Tokyo
 * @Description: In User Settings Edit
 * @FilePath: \learn-umi\src\bcomponents\MyTable\tableTypes.tsx
 */
export interface Iparams {
  //请求体
  pageIndex?: number;
  pageNum?: number;
  orderKey?: string;
  orderBy?: string;
  ExportExcel?: boolean;
  [propName: string]: any;
}

export interface TableProps {
  //table唯一key
  rowKey: string;
}

export interface IRes {
  //请求返回类型
  data: any; //对象或者数组
  status: number;
  message: string;
}

export interface IReq {
  //组件props
  url?: string;
  reqMethod?: string;
  hasPage?: boolean;
  reqPromise?: (params: Iparams) => Promise<{}>;
  handleData?: (params: IRes) => {};
  onGotData?: (params: IRes) => {};
  join?: string;
  query?: object;
}

export interface Pagination {
  pagination: { current: number; pageSize: number };
  filters: { [x: string]: [] };
  sorter: { field?: string; order?: string };
}
