import React, { useEffect, useState } from 'react'
import First from './First'

function Hoc() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    const s=setTimeout(()=>setCount(count+1),5000)
  })
  return (
    <>
    {count !=0 && <First/>}
    <h1>{count} in HOC</h1>
    </>
  )
}

export default Hoc