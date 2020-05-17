import './index.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTemplate } from '../../store/actions'
class Template extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'template page',
    }
  }
  render() {
    return (
      <div className="template">
        <h1>{this.state.msg}</h1>
        <div>模板页面</div>
        <button
          onClick={() => {
            let val = new Date().getTime()
            this.props.updateHandler(val)
          }}
        >
          更新store
        </button>
        <div>store数据：{this.props.templateMsg}</div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    templateMsg: state.templateMsg,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    updateHandler(val) {
      dispatch(updateTemplate({ value: val }))
    },
  }
}

export default connect(stateToProps, dispatchToProps)(Template)
