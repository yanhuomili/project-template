import React, { useState } from 'react'
export default function Home() {
  const [msg, setMsg] = useState('home page')
  return (
    <div>
      <p>{msg}</p>
      <button onClick={() => setMsg('update home page msg' + new Date())}>
        Home更新
      </button>
    </div>
  )
}
