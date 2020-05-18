import server from '@/common/httpServer'

export const getData = function (params) {
  console.log(params, 'params')
  return server.get('/getData', {
    data: params,
  })
}
export const getList = function (params) {
  console.log(params, 'params')
  return server.post('/getList', {
    data: params,
  })
}
export const getSome = function (params) {
  console.log(params, 'params')
  return server({
    method: 'post',
    url: '/getList',
    data: params,
  })
}
