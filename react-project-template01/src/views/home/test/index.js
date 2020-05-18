import React, { Component } from 'react'
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'test',
    }
  }
  render() {
    return <div>Test页面--{this.state.msg}</div>
  }
}

export default Test
