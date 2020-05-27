let defaultState = {
  a: 'aa',
  b: 'bb',
  n: 0,
}
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case 'add':
      /* 需要克隆一个新的仓库，然后返回新仓库，否则视图不会自动更细 */
      var newState = JSON.parse(JSON.stringify(state))
      newState.n += 1
      return newState
    case 'reduce':
      var newState = JSON.parse(JSON.stringify(state))
      newState.n -= 1
      return newState
    default:
      return state
  }
}
