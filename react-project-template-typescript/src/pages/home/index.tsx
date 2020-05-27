import React, { useState } from 'react'
import store from '../../store'

type Iproduct = {
  id: string | number | null
  n: number
  name: string
  price: number
}

const Home: any = function() {
  const [msg, setMsg] = useState('typescript')
  const [product, setProduct] = useState<Iproduct>({
    id: 123,
    n: 10,
    name: 'dfsfsf',
    price: 20,
  })
  const list = Object.values(product)
  console.log(list, 'list')
  let addAction = {
    type: 'add',
  }
  let reduceAction = {
    type: 'reduce',
  }
  const add = () => {
    console.log('add')
    store.dispatch(addAction)
  }
  const reduce = () => {
    console.log('reduce')
    store.dispatch(reduceAction)
  }
  let init = store.getState()
  console.log(init, 'init')
  const [sa, setSa] = useState(init.n)
  /* 如果不用Provider，则需要在仓库变化之后手动更新视图 */
  store.subscribe(() => {
    let s = store.getState().n
    console.log(s, 'sssss')
    setSa(s)
  })
  return (
    <div>
      <h2>react hook typescript</h2>
      <div>state:{msg}</div>
      <hr />
      <div>{sa}</div>
      <button onClick={add}>增加</button>
      <button onClick={reduce}>减小</button>
      <hr />
      <div>{product.price}</div>
      <div>
        {list.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
      <div>
        {Object.values(product).map((item, index: number) => {
          return (
            <span key={index} style={{ padding: '0 20px' }}>
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}
export default Home
