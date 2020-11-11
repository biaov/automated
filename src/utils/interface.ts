/**
 * @file 定义接口类型文件
 */

// 所有动态对象
export interface IfDynamicType {
  [arg: string]: any;
}

// 返回响应JSON数据接口类型
export interface IfReturnJsonType {
  code?: number;
  msg?: string;
  data?: null | IfDynamicType;
}

// 定义设置文件类型
export interface IfSetting {
  project: string;
  outDir: string;
  install?: boolean;
}
