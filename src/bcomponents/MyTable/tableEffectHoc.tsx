/*
 * @Author: your name
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:33:16
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: \learn-umi\src\bcomponents\MyTable\tableEffectHoc.tsx
 */
import React, { Component } from 'react';
// import intl from 'utils/intl';
import { stringify as qsStringify } from 'qs';
// import { object } from 'prop-types';
import { Iparams, IRes, IReq, TableProps, Pagination } from './tableTypes';
import moment from 'moment';
import { request } from '@/.umi/plugin-request/request';
import { Columns } from '@/common/schemas';
// import request from '@/utils/request';

function handlerParamsError(req: IReq) {
  if (req.url === undefined && req.reqPromise === undefined) {
    throw Error(
      'tableEffectHoc getTableDecorator params reqPromise or url require!',
    );
  }
}

function handlePageParams(params: Iparams, join?: string) {
  const { pageIndex, pageNum, orderKey, orderBy, ...query } = params;
  return {
    pagination: JSON.stringify({ current: pageIndex, pageSize: pageNum }),
    query: JSON.stringify(query),
    join: JSON.stringify(join),
    sort: orderKey && orderBy ? JSON.stringify([[orderKey, orderBy]]) : null,
    timestamp: Date.now(),
  };
}
// enum face {
//   name = 'haha'
// }

interface State {
  data: [];
  total: number;
  loading: boolean;
}

export default () => (WrappedComponent: any) =>
  class TableLoader extends Component {
    req: IReq = {
      url: '',
      reqMethod: 'get',
      hasPage: true,
    };

    page: Iparams = {
      // keyWords: '',
      pageIndex: 1,
      pageNum: 10,
      orderKey: 'CreateTime',
      orderBy: 'desc',
    };

    state: State = {
      data: [],
      total: 0,
      loading: false,
    };

    componentDidMount = () => {
      //   const params = handlePageParams({ UserId: 'faf24f20-59fe-11e9-bd16-a7e8be91f6a1' });
      //   console.log(`/api/member/carddetail?${qsStringify(params)}`);
    };

    /**
     * 获取table默认 props
     */

    getDefaultTableProps = (tableProps: TableProps) => {
      const { pageIndex, pageNum } = this.page;
      const { total, loading, data } = this.state;
      return {
        rowKey: tableProps.rowKey === 'key' ? 'id' : tableProps.rowKey,
        dataSource: data,
        // sorter: {
        //   filed: orderKey,
        //   order: orderBy,
        // },
        loading: {
          delay: 100,
          spinning: loading,
        },
        pagination: {
          // showTotal: (count) => {
          //   return intl.get('count', { number: count });
          // },
          current: pageIndex,
          pageSize: pageNum,
          total,
          showQuickJumper: true,
          showSizeChanger: true,
          size: 'small',
        },
        onChange: this.onChange,
      };
    };

    /**
     * 处理column排序
     */
    handleColumn = (columns: Columns[]) => {
      if (!Array.isArray(columns)) {
        return [];
      }
      const { orderBy, orderKey } = this.page;
      const newColumns = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const column of columns) {
        if (column.sorter) {
          (column.align = 'center'), //默认居中
            newColumns.push({
              ...column,
              sortOrder:
                orderKey === column.dataIndex ? `${orderBy}end` : false,
            });
          // eslint-disable-next-line no-continue
          continue;
        }
        newColumns.push(column);
      }
      return newColumns;
    };

    // handleScroll = (columns: Columns[]) => {
    //   if (columns && columns.length < 6) {
    //     return {};
    //   }
    //   let x: number = 0;
    //   // eslint-disable-next-line no-plusplus
    //   for (let i = 0; i < columns.length; i++) {
    //     if (typeof columns[i].width === 'number') {
    //       x += columns[i].width;
    //     } else {
    //       x += 180;
    //     }
    //   }
    //   return { x };
    // };

    /**
     * 处理localStorage pageSize
     */
    // handlerPageSize = (currPageSize) => {
    //   let tablePageSize = storage.get('table-page-size');
    //   if (!tablePageSize || (parseInt(tablePageSize, 10) !== currPageSize)) {
    //     storage.add('table-page-size', currPageSize);
    //     tablePageSize = currPageSize;
    //   }
    //   return tablePageSize;
    // }

    onChange = (
      pagination: Pagination['pagination'],
      filters: Pagination['filters'],
      sorter: Pagination['sorter'],
    ) => {
      const { current, pageSize } = pagination;
      const currPageSize = pageSize;
      if (Object.keys(sorter).length === 0) {
        this.page.orderBy = this.page.orderBy === 'asc' ? 'desc' : 'asc';
      } else {
        this.page.orderKey = sorter.field;
        this.page.orderBy = sorter.order === 'descend' ? 'desc' : 'asc';
      }

      /**
       * 处理filter
       */
      Object.keys(filters).forEach((key) => {
        const currValue = filters[key];
        if (currValue.length > 0) {
          this.page[key] = currValue.join(',');
        } else {
          delete this.page[key];
        }
      });

      this.getData({
        pageIndex: current,
        pageNum: currPageSize,
      });
    };

    /**
     * 异步获取列表数据
     */
    getData = (otherParams = {}) => {
      const {
        url: reqUrl,
        reqMethod,
        hasPage,
        reqPromise,
        handleData,
        onGotData,
      } = this.req;
      this.page = {
        ...this.page,
        ...otherParams,
      };
      // 返回结果不需要分页则删除pageIndex和pageNum属性
      if (!hasPage) {
        delete this.page.pageIndex;
        delete this.page.pageNum;
      }

      this.setState({ loading: true });
      Object.keys(this.page).forEach((key) => {
        const element = this.page[key];
        if (Array.isArray(element)) {
          const elements = element.length ? { $in: element } : null;
          this.page[key] = elements;
        } else if (typeof element === 'object') {
          if (element._isAMomentObject) {
            this.page[key] = moment(element._d).format('YYYY-MM-DD');
          }
        }
      });

      const handleRes = (res: IRes) => {
        if (!res || !res.data) {
          return;
        }
        let data = hasPage ? res.data && res.data.dataList : res.data;
        if (typeof handleData === 'function') {
          data = handleData && handleData.call(this, res);
        }
        if (typeof onGotData === 'function') {
          onGotData && onGotData.call(this, res);
        }

        this.setState({
          data,
          total: hasPage ? res.data.total : res.data.length,
          loading: false,
        });
        // return data
      };

      // 通过promise获取结果数据
      if (reqPromise) {
        reqPromise(this.page).then((res: any) => {
          handleRes(res);
        });
        return;
      }
      // console.log('this.page', this.page);
      const requestUrl = `${reqUrl}?${qsStringify(
        handlePageParams(this.page, this.req.join),
      )}`;
      // 如果是导出Excel , 新打开页面
      // console.log(this.page.ExportExcel, 'this.page.ExportExcel');
      if (this.page.ExportExcel) {
        this.page.ExportExcel = false;
        delete this.page.ExportExcel;
        window.open(`${requestUrl}&ExportExcel=1`);
        this.setState({ loading: false });

        // request(`${requestUrl}&ExportExcel=1`, {
        //   headers: {
        //     Accept: 'application/vnd.ms-excel',
        //     'Content-Type': 'application/vnd.ms-excel',
        //   }
        // }).then(res => {
        //   // var blob = res;
        //   // var a = document.createElement('a');
        //   // var url = window.URL.createObjectURL(blob);
        //   // a.href = url;
        //   // //设置文件名称
        //   // a.download = 'order.xls';
        //   // a.click();
        // });
        return;
      }

      request(requestUrl, {
        method: reqMethod,
      }).then((res: IRes) => {
        handleRes(res);
      });
    };

    getTableDecorator = (key: string, config: IReq) => {
      handlerParamsError(config);
      this.req = { ...this.req, ...config };
      this.page = Object.assign(this.page, this.req.query);
      return (component: React.DetailedReactHTMLElement<any, HTMLElement>) => {
        // 重写props信息
        const {
          rowKey,
          // bordered,
          // className,
          // indentSize,
          // locale,
          // prefixCls,
          // showHeader,
          // size,
          // useFixedHeader,
          // dataSource,
          // loading,
          ...otherProps
        } = component.props;
        const defaultTableProps = this.getDefaultTableProps({
          rowKey,
        });
        // 处理排序列
        const columns = this.handleColumn(component.props.columns);
        // const scroll = this.handleScroll(columns);
        const restProps = {
          ...component.props,
          ...defaultTableProps,
          ...otherProps,
          // scroll,
          columns,
        };
        // console.log('resetProps', defaultTableProps, restProps);
        return React.cloneElement(component, restProps);
      };
    };

    render() {
      return (
        <React.Fragment>
          <WrappedComponent
            {...(this.props as any)}
            tableProps={{
              page: {
                ...this.page,
                ...this.state,
              },
            }}
            getData={this.getData}
            getTableDecorator={this.getTableDecorator}
          />
        </React.Fragment>
      );
    }
  };
// function qsStringify(arg0: { pagination: string; query: string; join: string; sort: string | null; timestamp: number; }) {
//   throw new Error('Function not implemented.');
// }
