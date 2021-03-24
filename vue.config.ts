import path from "path";

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 7779, //运行端口
    open: true, //npm run serve完是否在浏览器打开 localhost:7771
    overlay: {
      //警告和错误提示
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    name: "daas-crius",
    resolve: {
      alias: {
        //还可以配置一些特定的文件夹。看个人爱好
        "@": resolve("src"), // 简化路径匹配 @/views == 项目路径/src/views
      },
    },
  },
};
