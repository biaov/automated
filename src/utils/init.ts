/**
 * @file 初始化文件
 */

import multiparty from "multiparty"; // 引入 multiparty 模块
import express from "express"; // 引入 express 框架
const App = express(); // 开启服务
const Router = express.Router(); // 创建一个路由
App.listen(3300); // 创建一个本地服务，端口为 3300

App.use("/api", Router); // 使用路由中间件

export default {
  App, // express 主程序对象
  Router, // 路由对象
  multiparty // 接收 formdata 数据
};
