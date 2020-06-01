import Taro,{useState,useEffect} from '@tarojs/taro'
import {View,Button} from '@tarojs/components'

function Blog(){
  const [msg,setMsg] = useState('blog page')
  useEffect(()=>{
    console.log('useEffect--blog')
  })
  const list=[
    {
      "name":"A",
      "id":1,
      "list":[
        {
          "name":"this is a1",
          "p_id":1,
          "id":11
        },
        {
          "name":"this is a2",
          "p_id":1,
          "id":12
        },
        {
          "name":"this is a3",
          "p_id":1,
          "id":13
        }
      ]
    },
    {
      "name":"B",
      "id":2,
      "list":[
        {
          "name":"this is b1",
          "p_id":2,
          "id":21
        },
        {
          "name":"this is b2",
          "p_id":2,
          "id":22
        },
        {
          "name":"this is b3",
          "p_id":2,
          "id":23
        }
      ]
    }
  ]
  const change=()=>{
    setMsg('update blog page msg')
  }
  const getData=()=>{
    Taro.request({
      url:'/link_setting/v1/link_setting/get'
    }).then(res=>{
      console.log(res,'res')
    }).catch(err=>{
      console.log(err,'err')
    })
  }
  return (
    <View>
      <View>{msg}</View>
      <Button onClick={change}>更新</Button>
      <Button onClick={()=>{Taro.navigateBack()}}>返回上一页</Button>
      <Button onClick={getData}>获取远程数据</Button>
    </View>
  )

}
export default Blog