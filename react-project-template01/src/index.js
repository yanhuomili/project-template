import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const App = React.lazy(() => import('./App'))
const TodoList = React.lazy(() => import('./views/todoList'))
const Home = React.lazy(() => import('./views/home'))
const Home1 = React.lazy(() => import('./views/home/home1'))
const Home2 = React.lazy(() => import('./views/home/home2'))
const Test = React.lazy(() => import('./views/home/test'))
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
      <Suspense fallback={<div>加载中。。。</div>}>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/todo" component={TodoList}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/home/home1" component={Home1}></Route>
        <Route exact path="/home/home2" component={Home2}></Route>
        <Route exact path="/test" component={Test}></Route>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
