import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux' // 连接器

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input value={props.a} onChange={props.inputChange}></input>
        <button
          onClick={() => {
            props.clickButton(props.a)
          }}
        >
          增加
        </button>
        <div>{props.a}</div>
        <div>{props.b}</div>
        <button>
          <Link to="/home">跳转到home页面</Link>
        </button>
        <button>
          <Link to="/templatePage">跳转到templatePage页面</Link>
        </button>
      </header>

      <ul>
        {props.list.map((item, index) => {
          return (
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px 50px',
              }}
              key={index}
            >
              <span>{item}</span>
              <span
                onClick={() => {
                  props.delItem(index)
                }}
              >
                X
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
/* state */
const stateToProps = (state) => {
  return {
    a: state.a,
    b: state.b,
    list: state.list,
  }
}
/* 派发事件 */
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      console.log(e.target.value, 'eee')
      let action = {
        type: 'changeInput',
        value: e.target.value,
      }
      dispatch(action)
    },
    clickButton(val) {
      console.log(val)
      console.log('增加')
      let action = {
        type: 'addItem',
      }
      dispatch(action)
    },
    delItem(index) {
      let action = {
        type: 'delItem',
        index,
      }
      dispatch(action)
    },
  }
}

export default connect(stateToProps, dispatchToProps)(App)
