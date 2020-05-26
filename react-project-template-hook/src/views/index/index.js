import React, { useState } from 'react'
import { Button, DatePicker, version } from 'antd'
export default function Index() {
  const [msg, setMsg] = useState('Index page -- 默认页面')
  const [date, setDate] = useState(null)
  const change = (value) => {
    let date = `${value ? value.format('YYYY年MM月DD日') : '未选择'}`
    setDate(date)
  }
  return (
    <div>
      <p>{msg}</p>
      <h3>antd version :{version}</h3>
      <div>选择的日期是：{date}</div>
      <DatePicker onChange={change}></DatePicker>
      <Button type="primary" style={{ marginLeft: 15 }}>
        默认按钮
      </Button>
    </div>
  )
}
