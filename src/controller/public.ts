/**
 * @file 公共控制器文件
 */
/**
 * 自动化部署思路
 * * clone 项目
 * * * 判断项目是否存在
 * * * * 存在：拉取项目(git pull)
 * * * * 不存在：克隆项目(git clone)
 * * 安装依赖
 * * 打包项目
 */
import execa from "execa"; // 子进程管理工具
import { IfDynamicType, IfSetting } from "@/utils/interface"; // 接口
import { existsSync } from "fs";
import utils from "@/utils"; // 工具包
const { YES, settings, ReturnJson, Log, FormateDate } = utils;

/**
 * 执行 webhooks 操作
 * @param {IfDynamicType} req - 请求对象
 * @param {IfDynamicType} res - 响应对象
 * @returns {Void}
 */
export const CoWebhooks = async (req: IfDynamicType, res: IfDynamicType) => {
  ReturnJson(res, { code: YES, msg: "请求成功" }); // 返回数据请求
  console.time("自动化部署耗时");
  const startTime = FormateDate(); // 格式化时间
  Log();
  Log("部署开始时间：" + startTime);
  Log();
  const { cloneUrl } = req.validData; // 请求数据
  // 判断配置文件是否存在
  if (settings.length > 0) {
    let output: string, isInstall: boolean; // 输出目录
    const projectName = cloneUrl.match(/\w+(?=\.git)/g)![0]; // 项目名称
    // 循环遍历数组，设置项目输出目录
    settings.forEach(({ project, outDir, install = true }: IfSetting): void => {
      if (project === projectName) {
        output = outDir;
        isInstall = install;
      }
    });
    const projectPath = `${output!}\\${projectName}`; // 项目根目录
    try {
      // 判断项目是否已存在
      if (existsSync(projectPath)) {
        // 拉取项目
        Log();
        Log("拉取项目...");
        Log();
        await execa("git", ["pull"], {
          cwd: projectPath,
          stdio: "inherit"
        });
      } else {
        // 克隆项目
        Log();
        Log("克隆项目...");
        Log();
        await execa("git", ["clone", cloneUrl], {
          cwd: output!,
          stdio: "inherit"
        });
      }
      // 是否需要安装项目依赖
      if (isInstall!) {
        // 安装依赖
        Log();
        Log("安装项目依赖...");
        Log();
        await execa("npm", ["install", "--loglevel", "error"], {
          cwd: projectPath,
          stdio: "inherit"
        });
        Log();
        Log("项目依赖安装完成");
        Log();
      }
      Log("打包项目...");
      Log();
      await execa("npm", ["run", "build", "--loglevel", "error"], {
        cwd: projectPath,
        stdio: "inherit"
      });
      Log();
      Log("项目打包成功");
      Log();
      Log("项目部署成功");
      Log();
    } catch (error) {
      Log(error); // 打印错误日志
      Log("部署失败");
    }
  } else {
    Log("配置文件不存在，部署失败");
  }
  console.timeEnd("自动化部署耗时");
};
