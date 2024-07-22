import { useEffect } from "react"

function Counter3() {
  useEffect(()=>{
     console.log('mounting...')
     return ()=>{
       console.log('unmounting...')
     }
  },[])
  return (
    <div>
      <h2>message from Counter3</h2>
    </div>
  )
}

export default Counter3
