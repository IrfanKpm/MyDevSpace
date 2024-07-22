import { useState } from 'react';
import Counterh2 from './components/Counterh2';
import Employee from './components/Employee';
import './Style.css';


function Counter() {
  const [count,setCount] = useState(0);
  const addCount = ()=>{
     setCount(count + 1);
  }
  const subCount = ()=>{
    setCount(count - 1);
  }

  let obj2 = {n:'2',count};
  let staffs = [
    {name:"irfan",age:20},
    {name:"salman",age:21}
  ]
  return (
    <div className='part'>
      <button className='count-btn' onClick={addCount}>+</button>
      <button className='count-btn' onClick={subCount}>-</button>
      <Counterh2 count={count} n='1'/>
      <Counterh2 {...obj2}/>
      {
        staffs.map((staff)=>{
            return(
                <Employee name={staff.name} age={staff.age} />
            )
        })
      }

    </div>
  )
}

export default Counter
