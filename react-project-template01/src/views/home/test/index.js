import React, { Component } from 'react'
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'test',
    }
  }
  componentDidMount() {
    console.log(this.props, 'this.props')
  }
  shouldComponentUpdate(pre, cur) {
    console.log(pre, 'pre')
    console.log(cur, 'cur')
    return true
  }
  render() {
    const { message, n } = this.props.hocdata
    const { getData } = this.props.handler
    // console.log(this.props.handler, 'this.props.handler')
    console.log(getData(), 'getData')

    return (
      <div>
        <div>Test页面--{this.state.msg}</div>
        <div>
          高阶组件的数据--{message}--{n}
        </div>
        <div onClick={getData}>获取数据</div>
      </div>
    )
  }
}

const HocFactory = (WrapComponent) => {
  class Hoc extends React.Component {
    constructor() {
      super()
      this.state = {
        message: '高阶组件',
        n: 0,
      }
    }
    changeHandler = () => {
      this.setState({
        message: this.state.message,
        n: this.state.n + 1,
      })
      console.log(this.state)
    }
    handlers = {
      getData: () => {
        console.log(this.state.n, 'getData')
        return this.state.n
      },
    }

    render() {
      console.log(this.props, 'props')
      return (
        <div>
          <button onClick={this.changeHandler}>修改</button>
          <WrapComponent
            {...this.props}
            hocdata={this.state}
            handler={this.handlers}
          ></WrapComponent>
        </div>
      )
    }
  }
  return Hoc
}
export default HocFactory(Test)
