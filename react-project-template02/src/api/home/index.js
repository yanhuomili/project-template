import server from '@/common/httpServer'

export const getData = function(params) {
  console.log(params, 'params')
  return server.get('/api/getData', {
    data: params,
  })
}
export const getList = function(params) {
  console.log(params, 'params')
  return server.post('/api/getList', {
    data: params,
  })
}
export const getSome = function(params) {
  console.log(params, 'params')
  return server({
    method: 'post',
    url: '/api/getList',
    data: params,
  })
}
