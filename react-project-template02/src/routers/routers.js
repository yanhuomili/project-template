import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routerConfig from './modules'
/* 路由配置 */
const Routers = (
  <Router>
    {routerConfig.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        ></Route>
      )
    })}
  </Router>
)
export default Routers
