import Taro,{Component} from '@tarojs/taro'
import {View,Button,Text} from '@tarojs/components'

class Center extends Component{
  constructor(props){
    super(props)
    this.state={id:'123456'}
  }
  componentDidMount () {
    console.log(this.$router.params,'params')
    let id = this.$router.params.id
    this.setState({
      id: id
    })
  }
  clickHandler = () => {
    console.log(123)
  }
  render(){
    const navigation = () =>{
      Taro.navigateTo({url:'/pages/index/index'})
    }
    const goBack = () => { 
        Taro.navigateBack()
    }
    return (
      <View>
        <View>id:{this.state.id}</View>
        <Text>center page</Text>
        <Button onClick={this.clickHandler}>按钮</Button>
        <Button onClick={navigation}>跳转IndexPage</Button>
        <Button onClick={goBack}>返回IndexPage</Button>

      </View>
    )
  }
}
export default Center