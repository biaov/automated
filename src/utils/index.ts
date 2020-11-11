/**
 * 工具类
 */
import addAlias from "./alias"; // 别名
addAlias();
/// <reference path="./module.d.ts" />
import variables from "./variables"; // 变量信息
import init from "./init"; // 初始化
import api from "./function"; // 函数方法
export default { ...init, ...variables, ...api };
