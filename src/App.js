import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const AlertBtn = ({ alertFunction, btnMsg})=>{
return(
<>
  <button onClick={alertFunction}>{btnMsg}</button>
</>

);};



function App() {
const [mostrar, setmostrar] = useState(false);
const mostrarAlerta = ()=>{
alert('You clicked me!');


};


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>



<div className="carta">
  {mostrar && <p>Boo!</p>}
  <button onClick={()=> setmostrar((mostrar) => !mostrar)} className='clickclick'>Cl1ck m3!</button>
  <AlertBtn
  
  alertFunction={mostrarAlerta}
  btnMsg={'mostrar alerta'}
  
  
  ></AlertBtn>
</div>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
