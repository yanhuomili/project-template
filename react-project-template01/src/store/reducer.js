const defaultState = {
  a: 'aa',
  b: 'bbb',
  inputValue: 'write something',
  list: [
    '水电费解放军水电费爽肤水',
    '水电费解放军水电费爽肤水',
    '水电费解放军水电费爽肤水',
    '水电费解放军水电费爽肤水',
  ],
}
/* reducer必须是一个纯函数，即函数的返回值必须依赖传出的参数 */
export default (state = defaultState, action) => {
  console.log(state, action)
  //reducer里面只能接受state，不能改变state
  /* 处理函数，用户发布变变化的时候，实时更新仓库 */
  if (action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState // 返回更新后的仓库
  }
  if (action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    return newState
  }
  if (action.type === 'delItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === 'getList') {
    console.log(333)
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.list
    return newState
  }
  return state
}
