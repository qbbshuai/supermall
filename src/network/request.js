//----------------------王元洪老师网络封装-------------------
import axios from "axios";
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000,
  });

  //   2. instance的拦截器
  //请求成功和请求失败的拦截
  instance.interceptors.request.use(
    (res) => {
      console.log("请求成功拦截到的数据如下");
      console.log(res);
      return res;
    },
    (err) => {
      console.log(err);
      console.log("请求失败拦截到的数据");
    }
  );


//   instance.interceptors.response.use(
//     (res) => {
//       console.log("响应成功拦截到的数据如下");
//       console.log(res);
//     },
//     (err) => {
//       console.log("响应失败拦截到的数据如下");
//       console.log(err);
//     }
//   );

  // 3.发送真正的网络请求
  return instance(config); //instance本身返回的就是一个promise对象
}


//这是直接面向request请求数据，开发中我们还要封装一次
// request({
//   url: "/home/multidata",
// }).then((res) => {
//   console.log(res);
// });
