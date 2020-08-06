import React, { useState } from 'react'
import store from '../../store'
import { connect } from 'react-redux'

const StoreTest: any = function (props: any) {
  store.subscribe(() => {
    console.log(99999)
  })
  return (
    <div>
      <h3>react-redux</h3>
      <div>
        <span>a:{props.a}</span>&nbsp;
        <span>a:{props.b}</span>&nbsp;
        <span>a:{props.n}</span>&nbsp;
      </div>
      <button onClick={props.add}>add</button>
      <button onClick={props.reduce}>reduce</button>
    </div>
  )
}
const stateToProps = (state: any) => {
  return {
    a: state.a,
    b: state.b,
    n: state.n,
  }
}
const dispatchToProps = (dispatch: any) => {
  return {
    add() {
      dispatch({
        type: 'add',
      })
    },
    reduce() {
      dispatch({
        type: 'reduce',
      })
    },
  }
}
export default connect(stateToProps, dispatchToProps)(StoreTest)
