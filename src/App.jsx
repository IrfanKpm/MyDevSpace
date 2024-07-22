import './Style.css';
import Header from'./components/Header';

function App() {
  let name = "IrfanKpm"
  return (
     <div>
            <Header data={name}/>
            <h2 style={{color:'red'}}>Hello World</h2>
            <Ptag/>
     </div>
  );
}

function Ptag(){
  let data = " React Malayalam Tutorial | Brototype malayalam";
  return(
    <p className='hello'>{data}</p>
  );
}

export default App;
