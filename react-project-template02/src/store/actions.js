/* 将所有需要发布action统一放到一个文件夹里面来管理 */
const crateAction = function (name, params) {
  return {
    type: name,
    ...params,
  }
}
/* 同步函数 */
export const updateTemplate = (params = {}) =>
  crateAction('updateTemplate', params)
