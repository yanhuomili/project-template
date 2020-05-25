import React, { useState, useEffect } from 'react'
import './index.css'
import { Route, Switch, Link } from 'react-router-dom'
import routers from '@/routers/index'

export default function Layout() {
  useEffect(() => {
    console.log(this, 'props')
  })
  return (
    <div className="layout">
      <div className="layout-aside">
        <h2>菜单栏</h2>
        <ul>
          <li>
            <Link to="/layout">layout</Link>
          </li>
          <li>
            <Link to="/layout/home">home</Link>
          </li>
          <li>
            <Link to="/layout/blog">blog</Link>
          </li>
          <li>菜单二</li>
          <li>菜单三</li>
          <li>菜单四</li>
          <li>菜单五</li>
        </ul>
      </div>
      <div className="layout-container">
        <div className="layout-tabs">
          <ul className="tab-list">
            <li>tab1</li>
            <li>tab1</li>
            <li>tab1</li>
            <li>tab1</li>
            <li>tab1</li>
          </ul>
        </div>
        <div className="layout-content">
          <Switch>
            {routers.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                ></Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </div>
  )
}
