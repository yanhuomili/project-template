import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store'
import {
  addItem,
  delItem,
  changeInput,
  // getList,
  testAsync,
} from '../../store/actions'
class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState(), '仓库数据')
    this.state = {
      ...store.getState(),
      addValue: 999,
    }
    this.change = this.change.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addIptChange = this.addIptChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
  }
  componentDidMount() {
    console.log('this.componentDidMount')
    /* 订阅，当仓库有变化的时候都会触发该方法，我们可以来处理响应的逻辑 */
    store.subscribe(this.storeChange)
    this.initList()
    console.log(this.props, 'this.props.history')
  }
  componentWillUnmount() {
    this.setState = () => false
  }
  initList() {
    // let list = [
    //   '初始化list内容',
    //   '早上八点半起床',
    //   '中午12点下班',
    //   '晚上6点下班后学习到10点',
    //   '晚上11点上床睡觉',
    // ]
    // setTimeout(() => {
    //   store.dispatch(getList({ list: list }))
    // }, 2000)
    store.dispatch(testAsync({ id: '1223', pageNo: 1 }))
  }
  change(e) {
    /* 用户发布变化，通知仓库更改数据 */
    store.dispatch(changeInput({ value: e.target.value }))
  }
  storeChange() {
    console.log(store.getState(), '每次更新后的仓库')
    this.setState({
      inputValue: store.getState().inputValue,
    })
    this.setState({
      ...store.getState(),
      addValue: '',
    })
  }
  addIptChange(e) {
    this.setState({
      addValue: e.target.value,
    })
  }
  clickBtn() {
    store.dispatch(addItem({ value: this.state.addValue }))
    this.setState({
      addValue: '',
    })
  }
  delItem(index) {
    store.dispatch(delItem({ index }))
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">跳转home页面</Link>
          </li>
          <li>
            <Link to="/test">跳转test页面</Link>
          </li>
        </ul>
        <h1>todo list page</h1>
        <input onChange={this.change} value={this.state.inputValue}></input>
        <div>
          <input
            onChange={this.addIptChange}
            value={this.state.addValue}
          ></input>
          <button onClick={this.clickBtn}>增加</button>
        </div>
        <ul>
          <li>{this.state.a}</li>
          <li>{this.state.b}</li>
          <li>{this.state.inputValue}</li>
          <li>
            {this.state.list.map((item, index) => {
              return (
                <p
                  key={index}
                  style={{
                    padding: '0 50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item}</span>
                  <span onClick={this.delItem.bind(this, index)}>X</span>
                </p>
              )
            })}
          </li>
        </ul>
      </div>
    )
  }
}

export default TodoList
