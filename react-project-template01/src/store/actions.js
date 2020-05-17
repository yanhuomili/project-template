/* 将所有需要发布action统一放到一个文件夹里面来管理 */
const crateAction = function (name, params) {
  return {
    type: name,
    ...params,
  }
}
/* 同步函数 */
export const addItem = (params = {}) => crateAction('addItem', params)
export const delItem = (params = {}) => crateAction('delItem', params)
export const changeInput = (params = {}) => crateAction('changeInput', params)
export const getList = (params = {}) => crateAction('getList', params)

/* 异步函数，需要安装redux-thunk中间件 */
export function testAsync(query) {
  console.log(query, 'query')
  return (dispatch) => {
    console.log(query, 'query-in')
    setTimeout(() => {
      let list = ['sfsdfsssfs']
      dispatch(getList({ list }))
    }, 2000)
  }
}
