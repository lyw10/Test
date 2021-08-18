const axios = require("axios");

// 为给定 ID 的 user 创建请求
    if (process.env.NODE_ENV === 'development') { // 开发环境
        axios.defaults.baseURL = '/'    // 对应上面的代理名 aaa 
    } else {                                  // 正式环境
       axios.defaults.baseURL = 'http://47.100.104.162:8000'
        }


export default {
  getHeader() {
    return axios.get("/header");
  },
  getMain() {
    return axios.get("/main");
  },
};
