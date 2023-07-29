# 圆角矩形生成器

## 功能说明

用户可通过设定颜色、圆角半径等参数定制想要的圆角矩形的 png 格式图片，软件界面如下图所示，h5 版本的体验地址：https://juliusjiang.github.io/round_rect_creator/round_react_creator_h5/build/
<img width="990" alt="1690663893918" src="https://github.com/JULIUSJIANG/round_rect_creator/assets/33363444/e0851a35-dc55-450d-94d5-02b2b4b29da3">

## 目录说明
* 工程目录 round_react_creator_electron 放置的是最原始的代码文件，框架为 NodeJS + React + Antd + Electron，用于发布桌面版本
* 工程目录 round_react_creator_h5 是 round_react_creator_electron 剥离对 Electron 的依赖后，能够直接通过 React 发布 h5 的版本
（体验地址 https://juliusjiang.github.io/round_rect_creator/round_react_creator_h5/build/ 对应代码仓库的目录 round_react_creator_h5/build，是 h5 版本的发布）

## NodeJS基础
* NodeJS 是 js 的一个运行环境，需要下载、安装，官网地址：https://nodejs.org/en
* NodeJS 工程根目录均存在文件 package.json，该文件记录了工程的依赖项，cmd 中在该目录下运行命令 npm install 的话会自动安装依赖项
* package.json 中的 scripts 属性记录了工程的可执行操作，如：
  round_react_creator_electron 的调试：npm run start、构建：npm run make
  round_react_creator_h5 的调试：npm run start、构建：npm run build
