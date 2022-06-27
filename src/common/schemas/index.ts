/*
 * @Author: Tokyo
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-10-23 03:42:16
 * @LastEditors: Please set LastEditors
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: /Tokyo_Shelf/src/common/schemas/index.ts
 */
//共用类型约束

export interface Columns {
  title: string;
  dataIndex: string;
  key: string;
  align?: string;
  sorter?: string;
  width?: number | undefined;
  render?: <K extends keyof T, T>(value: any, record: Pick<T, K>) => {};
  // [propName: string]: any;
}

function get<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

type Pick<T, K extends keyof T> = {
  [p in K]: T[K];
};

function f1<T, K extends keyof T>(obj: T[K]) {
  return obj;
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

//请求数据
export interface AxiosData<T> {
  status: number;
  data?: Data<T>;
  msg: string;
}

export type Data<T> = { [P in keyof T]: T[P] };