const react = require(`../node_modules/react/index.js`);
const react_dom_client = require(`../node_modules/react-dom/client.js`);
const InfiniteScroll = require(`../node_modules/react-infinite-scroll-component/dist/index.js`);
const antd = require(`../node_modules/antd/dist/antd.js`);
const electron = require(`electron`);
const fs = require(`fs`);
const path = require(`path`);
const c_modules = {
    react,
    react_dom_client,
    InfiniteScroll,
    antd,
    fs,
    path,
    electron
};
export default c_modules;
