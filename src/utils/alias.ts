/**
 * @file 别名引入文件
 */
import path from "path";
import moduleAlias from "module-alias";
export default () => {
  moduleAlias.addAliases({
    "@": path.resolve(__dirname, "../")
  });
};
