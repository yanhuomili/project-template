const defaultState = {
  a: 'aa',
  b: 'bbb',
  list: [11111, 222],
  templateMsg: '模板页面store数据',
}
/* reducer必须是一个纯函数，即函数的返回值必须依赖传出的参数 */
export default (state = defaultState, action) => {
  if (action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.a = action.value
    return newState
  }
  if (action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.a)
    newState.a = ''
    return newState
  }
  if (action.type === 'delItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === 'updateTemplate') {
    // 模板页面reducer
    let newState = JSON.parse(JSON.stringify(state))
    newState.templateMsg = action.value
    return newState
  }

  return state
}
