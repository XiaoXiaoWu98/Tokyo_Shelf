---
category: BComponents
title: 用于列表和增删改查
---

### 何时使用

用于列表和增删改查

### 文档
* BTable 
  > `React Element`  用于需要显示列表的地方，用法跟 antd Table一样


* BTable.tableEffectHoc 
  > 高阶组件，调用后会在被包裹组件内部添加`getData`(调用可以更新列表数据)方法和 `getTableDecorator` 方法
    `tableProps`
  getData 参数项为Object

  属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  search | 查询但是 | String | | 非必填 |
  pageIndex | 当前页数 | Number | 1 | 非必填 |
  pageNum| 每页条数 | Number | 10 | 非必填 |
  orderName| 排序字段 | String | createTime | 非必填 |
  orderBy| 排序方式（asc|desc） | String | desc | 非必填 |

  `getData`调用demo
  ```
    this.props.getData({
      search: '',
      pageIndex: 2,
      pageNum: 10,
      orderName: 'name',
      orderBy: 'acs'
    })
  ```

  getTableDecorator方法参数
    属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  key | table 的key | String | | 必填 |
  reqParams | table请求参数 | Object | 1 | 必填 |


  reqParams 参数
  注: reqPromise 或 url 必须填写一个

     属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  reqPromise |请求方法要返回Promise | Function | 非必填
  url | 请求接口 | String | | 非必填 |
  reqMethod | table请求方式 | String | get | 非必填 |
  hasPage | 请求是否返分页结果 | Boolean | true | 非必填 |
  handleData | 处理返回结构的数据 | Function | | 非必填 |
  onGotData | 返回结构的数据,可以自行处理| Function | | 非必填 |

  示例
  ```
  {
    getTableDecorator('list', {
      // url: '',
      reqPromise: new Promise()，
      hasPage: false,
    })(
      <Table
        pagination={false}
        scroll={{ y: 300 }}
        rowSelection={{
          type: 'radio',
          selectedRowKeys,
          onChange: this.onTableChange,
        }}
      />
    )
  }
  ```


* BTable.Search
  > `React Element` 用于列表的搜索
  
  属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  getData | 调用可以更新列表数据 | Function |  | 必填 

* BTable.Create
  > `React Element` 用于创建操作

  属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  url | 请求接口的url | String | | 必填 |
  reqMethod | 请求方式（get,post,put,delete）| String | get | 非必填 
  params | 请求携带其它参数 | Object | {} | 非必填 
  getData | 调用可以更新列表数据 | Function |  | 必填 

* BTable.Update
  > `React Element` 用于更新操作
  
  属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  reqPromise |请求方法要返回Promise | Function | 非必填
  url | 请求接口的url | String | | 必填 |
  reqMethod | 请求方式（get,post,put,delete）| String | get | 非必填 
  params | 请求携带其它参数 | Object | {} | 非必填 
  getData | 调用可以更新列表数据 | Function |  | 必填 
  visible | 编辑弹框是否显示 | Boolean | false  | 必填 
  onCancel | 弹框关闭方法 | Function |  | 必填 
  handleParams | 处理参数 | Function |  | 非必填 


* BTable.Del
  > `function`用于删除操作

    属性 | 说明 | 类型 | 默认值  | 必填项
  -----|-----|-----|--------|--------
  reqPromise |请求方法要返回Promise | Function | 非必填
  url | 请求接口的url | String | | 非必填 |
  params |接口请求的参数| String|Object | 非必填 | 
  reqMethod | 请求方式（get,post,put,delete）| String | get | 非必填 
  getData | 调用可以更新列表数据 | Function |  | 必填 



TODO
1. 支持本地数据
2. handleData
