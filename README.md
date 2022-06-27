# umi3.0搭建的项目

## 开始

```bash
$ yarn
```

## 运行
```bash
$ yarn start
```
### 打包

根据不同环境，执行 yarn pro-build [env] 进行预打包(打 tag)

### 生成文件

> 每创建page，components文件要还定义子目录文件是一件很烦的事情，为此，我们提供一个快速创建带有默认模板文件的方式;自动生成子目录文件；

#### 创建页面

很简单，只需要你在 pages 目录下(包括分包下 pages 目录)新建一个文件并以 **小**写字母开头的驼峰格式命名即可(注：为统一格式，当你新建一个小写字母开头的文件，我们会过滤不生成默认模板)

> 需要安装 vscode 插件 [dot-template](https://marketplace.visualstudio.com/items?itemName=qiu8310.dot-template-vscode)

#### 生成组件

同创建页面一样，只需在 componens 目录下创建以**大**写字母开头的驼峰命名格式的文件，即可生成默认模板


#### 创建请求方法以及数据类型ts申明

> 终端执行 api-build -c apiBuildConfig.js -i  会自动根据接口文档创建接口方法以及数据类型定义（如果文档链接新增或者接口新增。记得修改scripts/apiBuildConfig.js文件）
### 目录结构

```bash
./
├── README.md
├── config                          # 项目打包环境配置
├── package.json
├── src                             # 源码目录
    ├── components                  # 公共组件库，多分包共用
    ├── pages                       # 主页面
    ├── Api                         # 接口的请求方法以及定义接口请求返回的数据类型
    ├── model                       # saga数据流定义模型文件
├── scripts                         # 自动打包上传版本、tag、发送钉钉群打包信息命令行工具
├── tsconfig.json                   # ts 配置
├── typings                         # typescrpt 类型定义
├── eslintrc.js                     # eslint格式插件配置
├── .prettierrc                     # prettier格式插件配置
```