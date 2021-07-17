# 部署文档

一个使用 `pm2` 部署项目的文档！👍

## 线上部署

## 服务器安装项目依赖

* 安装 [NodeJs](https://nodejs.org/en/)
* 安装 [Git](https://git-scm.com/)
* 安装 [pm2](https://pm2.keymetrics.io/)

### 需要上传的目录文件

* dist
* settings.yml

### 启动程序

```Basic
pm2 start dist
```

## settings 配置文件说明

* settings 文件是一个数组，支持两种文件，即 `JSON` 和 `YAML` 文件。

| 参数    | 说明                                      | 类型    | 是否必传 | 可选         | 默认 |
|---------|-------------------------------------------|---------|----------|--------------|------|
| project | 项目名称，注意：要和 `Git` 仓库名保持一致 | String  | 是       | --           | --   |
| outDir  | `Git` 项目下载目录                        | String  | 是       | --           | --   |
| install | 是否需要执行安装依赖步骤                  | Boolean | 否       | true / false | true |

### YAML 文件案例代码

* settins.yml

```YAML
# 自动化部署配置文件
- project: "wordpress"
  outDir: "/usr/share/apps"
  install: false
```

### JSON 文件案例代码

* settings.json

```JSON
[
  {
    "project": "wordpress"
    "outDir": "/usr/share/apps"
    "install": false
  }
]
```

## 部署 Webhooks

* 这里以 Github 的 Webhooks 为例。

* Webhooks 请求地址：`域名/api/public/webhooks`
* 例如：`http://biaov.cn/api/public/webhooks`

## 其它

### 程序端口

* 默认端口为 `3300`
* 更改程序端口文件：[Port](https://github.com/biaov/automated/blob/main/src/utils/init.ts)
* ⚠ 注意：
  * 如果你直接用 IP 测试访问，请把接口加上端口号，例如：`http://ip地址:3300/api/public/webhooks`
  * 如果你使用域名，可以设置 nginx 反向代理则不需要直接使用 `3300` 端口访问，如果没设置直接访问则需加上端口号。
  * 本地开发测试完整接口：
    * `http://127.0.0.1:3300/api/public/webhooks`。
    * `POST` 请求。

```TypeScript
App.listen(3300); // 创建一个本地服务，端口为 3300
```

### 更换校验规则

* 当前的参数校验规则比较简单，如果你有好点子或者好想法可以自由发挥或者提 👉 [Issues](https://github.com/biaov/automated/issues)。
* 参数校验规则更改文件：👉 [参数校验文件](https://github.com/biaov/automated/blob/main/src/middleware/valid/public.ts)。

## License

* [MIT](http://opensource.org/licenses/MIT)
* Copyright © 2020-present, TalkingData biaov\<biaov@qq.com\>.
