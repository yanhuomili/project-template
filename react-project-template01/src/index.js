import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TodoList from './views/todoList'
import Home from './views/home'
import Home1 from './views/home/home1'
import Home2 from './views/home/home2'
import Test from './views/home/test'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const routeConfig = [
  {
    path: '/',
    exact: true,
    component: App,
    indexRoute: { component: TodoList },
    childRoutes: [{ path: '/todo', component: TodoList }],
  },
  {
    path: '/home',
    component: Home,
    childRoutes: [
      { path: '/home/home1', component: Home1 },
      {
        path: '/home/home2',
        component: Home2,
        childRoutes: [{ path: '/home/home2/test', component: Test }],
      },
    ],
  },
]

const renderRoutes = function (routes) {
  let arr = []
  routes.map((item, index) => {
    if (item.childRoutes) {
      renderRoutes(item.childRoutes)
    }
    arr.push(
      <Route key={index} path={item.path} component={item.component}></Route>
    )
  })
  console.log(arr, 'arr')
  return arr
}
console.log(renderRoutes(routeConfig), '递归配置路由')
console.log(<Route path="/todo" component={TodoList}></Route>, '1111')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/todo" component={TodoList}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/home1" component={Home1}></Route>
      <Route exact path="/home2" component={Home2}></Route>
      <Route exact path="/test" component={Test}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
