import React, { useState } from 'react'
export default function Blog() {
  const [msg, setMsg] = useState('blog page')
  return (
    <div>
      <p>{msg}</p>
      <button onClick={() => setMsg('update blog page msg' + new Date())}>
        Blog更新
      </button>
    </div>
  )
}
