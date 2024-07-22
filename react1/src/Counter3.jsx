import Counter3 from './components/Counter3';
import './Style.css';
import { useState } from 'react';


function Counter_3(){
    const [state_n,setState] = useState(false);
    return(
        <div className='part'>
            <button onClick={()=>setState(!state_n)}>click here</button>
            {state_n && <Counter3 />}
        </div>
    )
}

export default Counter_3