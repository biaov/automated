# automated

一个使用 NodeJs + TypeScript 开发的自动化部署项目！👍

<h2 align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
  <a href="https://github.com/biaov/automated/blob/master/LICENSE"><img src="https://img.shields.io/github/license/biaov/automated.svg" /></a>
</h2>

## 启动项目

### 安装依赖

```Basic
npm i
```

### 运行项目

```Basic
npm start
```

### 打包项目

```Basic
npm run build
```

## 目录

<details>
<summary>✅ 查看目录</summary>

```Markdown
|-- automated ---------------------- 项目名称
    |-- .gitignore ----------------- git忽略文件
    |-- package-lock.json ---------- 依赖版本信息文件
    |-- package.json --------------- 包信息文件
    |-- README.md ------------------ 项目文档
    |-- settings.yml --------------- 配置文件
    |-- tsconfig.json -------------- ts配置文件
    |-- webpack.config.js ---------- webpack配置文件
    |-- dist ----------------------- 打包目录文件
    |-- src ------------------------ 项目主目录
    |   |-- index.ts --------------- 项目入口文件
    |   |-- controller ------------- 控制器目录
    |   |-- middleware ------------- 错误中间件和参数校验中间件
    |   |-- router ----------------- 接口路由目录
    |   |-- utils ------------------ 工具包目录
    |-- temporary ------------------ ts编译生成目录和webpack入口目录
```

</details>

## 技术栈

> [NodeJs](https://nodejs.org/) + [Express](https://expressjs.com/) + [TypeScript](https://www.typescriptlang.org/)

## 服务器部署

* 👉 [部署文档](https://github.com/biaov/automated/blob/main/deploy.md)

## 贡献者

[![贡献者](https://contrib.rocks/image?repo=biaov/automated)](https://github.com/biaov/automated/graphs/contributors)
