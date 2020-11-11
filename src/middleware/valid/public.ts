/**
 * @file 公共模块校验文件
 */
import { PostArg, ReturnJson } from "@/utils/function";
import { IfDynamicType } from "@/utils/interface";
/**
 * 验证 Token
 * @param {IfDynamicType} req - 请求对象
 * @param {IfDynamicType} res - 响应对象
 * @param {Function} next - 下一步函数
 * @returns {Void}
 */
export const VaWebhooks = (req: IfDynamicType, res: IfDynamicType, next: Function): void => {
  // POST接收参数
  PostArg(req).then((data: IfDynamicType) => {
    const cloneUrl = data?.repository?.clone_url; // 是否存在 clone 地址
    if (cloneUrl) {
      req.validData = { cloneUrl };
      next(); // 验证通过
    } else {
      ReturnJson(res, { data });
    }
  });
};
