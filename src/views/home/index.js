import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTemplate } from '@/store/actions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'home page message',
    }
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
