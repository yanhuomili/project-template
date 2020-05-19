import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTemplate } from '@/store/actions'
import { getData, getList, getSome } from '@/api/home'
import { formatNumber } from '@/utils'
import server from '@/common/httpServer'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'home page message',
    }
  }
  componentDidMount() {
    console.log('mounted')
    console.log(formatNumber(1))
  }
  async getData() {
    let res = await Promise.all([getData(), getList(), getSome()])
    console.log(res, 'res')
    console.log('end')
    // getData({ a: 'get Data' })
    //   .then((res) => {
    //     console.log(res, 'res')
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err')
    //   })
    // getList({ a: 'post List' })
    //   .then((res) => {
    //     console.log(res, 'res')
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err')
    //   })
    // getSome({ a: 'post Some' })
    //   .then((res) => {
    //     console.log(res, 'res')
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err')
    //   })
  }
  render() {
    return (
      <div>
        <h1>home page</h1>
        <div>{this.state.msg}</div>
        <div>{this.props.templateMsg}</div>
        <button
          onClick={() => {
            this.props.clickBtn(123)
          }}
        >
          按钮
        </button>
        <button
          onClick={() => {
            console.log(this.props, 'this.props')
            this.props.history.goBack()
          }}
        >
          返回上一个页面
        </button>
        <button onClick={this.getData}>请求数据</button>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return state
}
const dispatchToProps = (dispatch) => {
  return {
    clickBtn(val) {
      console.log(val, 'val')
      dispatch(updateTemplate({ value: val }))
    },
  }
}

export default connect(stateToProps, dispatchToProps)(Home)
