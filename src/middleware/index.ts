/**
 * @file 中间件文件
 * @author biaov<biaov@qq.com>
 */
import ErrorMiddleware from "./error";
import utils from "@/utils";
const { App } = utils; // 工具类
// 对象索引的接口
interface IfObjIndex<T> {
  [key: string]: T;
}
const ErrorMidd: IfObjIndex<Function> = ErrorMiddleware; // 错误路由
// 循环遍历全局自定义中间件
for (const key in ErrorMidd) {
  Object.prototype.hasOwnProperty.call(ErrorMidd, key) && App.use(ErrorMidd[key]); // 全局使用自定义中间件
}
