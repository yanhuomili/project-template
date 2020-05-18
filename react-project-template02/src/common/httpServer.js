import axios from 'axios'

let server = axios.create({
  baseURL: 'http://localhost:18000',
  timeout: 30000,
})

server.interceptors.request.use(
  (config) => {
    /* 请求前做些处理 */
    return config
  },
  (err) => {
    /* 请求错误处理 */
    return Promise.reject(err)
  }
)

server.interceptors.response.use(
  (response) => {
    /* 响应结果做些处理 */
    return response
  },
  (err) => {
    /* 响应错误处理 */
    return Promise.reject(err)
  }
)

export default server
