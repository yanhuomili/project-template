import React, { useState } from 'react'
export default function Index() {
  const [msg, setMsg] = useState('Index page -- 默认页面')
  return (
    <div>
      <p>{msg}</p>
    </div>
  )
}
