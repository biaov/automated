/**
 * @file 全局错误中间件文件
 */
import utils from "@/utils";
const { ErrorCode, NoFoundCode, ReturnJson } = utils;
/**
 * 程序运行错误处理
 * @param {Object} error - 错误对象
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 * @param {Function} next - 下一步函数
 * @returns {Void}
 */
const ErrorHandle = (error: object, req: object, res: object, next: Function): void => {
  if (error) {
    ReturnJson(res, { code: ErrorCode, msg: `${error || "服务器错误"}`, data: null });
  } else {
    next();
  }
};

/**
 * 404错误处理
 * @param {Object} error - 错误对象
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 * @param {Function} next - 下一步函数
 * @returns {Void}
 */
const NoFound = (_: object, res: object, next: Function): void => {
  ReturnJson(res, { code: NoFoundCode, msg: "API接口路径或请求方法错误", data: null });
};

export default { ErrorHandle: ErrorHandle, NoFound: NoFound };
