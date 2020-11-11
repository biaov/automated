/**
 * @file 全局变量文件
 */
import YAML from "yamljs";
import { existsSync, readFileSync } from "fs";
import { IfSetting } from "@/utils/interface";
// 返回数据code枚举
enum Code {
  NO = 0,
  YES = 1,
  ErrorCode = 500,
  NoFoundCode = 404
}
const settingPath = `${process.cwd()}\\settings`; // 配置文件路径
let settings: Array<IfSetting>;
const pathJson = `${settingPath}.json`; // json文件
const pathYaml = `${settingPath}.yml`; // yml 文件
console.log(pathYaml);
// 是否存在json文件
if (existsSync(pathJson)) {
  settings = JSON.parse(readFileSync(pathJson).toString());
} else if (existsSync(pathYaml)) {
  // 是否存在yml文件
  settings = YAML.load(pathYaml);
} else {
  settings = [];
}
// 公共目录
const config = {
  settings
};

export default { ...config, ...Code };
