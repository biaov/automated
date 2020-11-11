/**
 * @file 公共方法文件
 */

import variables from "./variables"; // 全局变量
import { IfDynamicType, IfReturnJsonType } from "./interface"; // 接口类型
const { NO } = variables;

/**
 * POST 请求接收参数
 * @param {any} req - 请求对象
 * @returns {Object} - Promise Object
 */
const PostArg = (req: IfDynamicType): IfDynamicType =>
  new Promise<IfDynamicType>((resolve: Function) => {
    let data = "";
    //注册data事件接收数据
    req.on("data", (chunk: any) => {
      // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
      data += chunk;
    });
    req.on("end", () => {
      resolve(JSON.parse(data || "{}"));
    });
  });

/**
 * 返回响应JSON数据
 * @param {Object} res - 响应对象
 * @param {Object} [obj={}] - json对象
 * @returns {Void}
 */

const ReturnJson = (res: IfDynamicType, obj: IfReturnJsonType = {}): void => {
  const { code = NO, msg = "参数错误", data = null } = obj;
  res.json({ code, msg, data });
};
/**
 * 打印日志
 * @param {string|number} [msg=""] - 需要打印的信息
 * @returns {void}
 */
const Log = (msg: string | number = ""): void => {
  console.log(msg);
};
/**
 * 格式化时间
 * @param {Date | string | number} [dat=new Date()] - 需要格式化的时间
 * @returns {string} - 格式化之后的时间
 */
const FormateDate = (data: Date | string | number = new Date()): string => {
  const o = new Date(data); // 当前时间
  const [Y, M, D, h, m, s] = [o.getFullYear(), o.getMonth() + 1, o.getDay(), o.getHours(), o.getMinutes(), o.getSeconds()].map(num => (num < 10 ? "0" : "") + num);
  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
};
export {
  PostArg, // POST 请求接收参数
  ReturnJson, // 返回响应 JSON 数据
  Log, // 打印日志
  FormateDate // 格式化时间
};

export default {
  PostArg, // POST 请求接收参数
  ReturnJson, // 返回响应 JSON 数据
  Log, // 打印日志
  FormateDate // 格式化时间
};
