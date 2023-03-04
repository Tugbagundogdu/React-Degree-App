import { useState } from 'react';
import './App.css';
import Celcius from './components/Celcius';
import Fahrenheit from './components/Fahrenheit';
import Kelvin from './components/Kelvin';


function App() {

  const [degree , setDegree] = useState(0);
  const [fahrenheit , setFahrenheit] = useState(32)
  const [kelvin , setKelvin] = useState(273)

  const arttir = ()=>{
    setDegree(degree + 1)
    setFahrenheit(fahrenheit + 3)
    setKelvin(kelvin + 15)
  }
  return (
    <div className="App">
      <div className='appHeader'>
      <h3 className='appTitle'>Hava Nasıl ?</h3>   
      <p>Şuan sıcaklık {degree} derece</p>
      <button className='buton' onClick={arttir}>Sıcaklık Arttır</button>
      </div>
      
      <div className='degrees'>
      <p>3 Birimde Sıcaklık Ölçümü</p>
      <div className='appDegree'>
      <Celcius derece= {degree}/>
      <Fahrenheit fahrenheit = {fahrenheit}/>
      <Kelvin kelvin = {kelvin}/>
      </div>
      </div>

    </div>
  );
}

export default App;
