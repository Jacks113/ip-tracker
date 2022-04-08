import './App.css';
import { useState } from "react";

import { getIP, getGeoData } from './Services/getIP';
import InputIp from './Components/InputIp';
import Info from './Components/Info';
import Map from './Components/Map';


function App() {  

  const [ip, setIp] = useState("");
  const [ipError, setIpError] = useState("");

  const newIp = ipAddress =>{
    getIP(setIp, setIpError, ipAddress);
    // getGeoData();
  }

  if (ipError){
    alert("The ip address was invalid, please enter a new address.")
  }

 console.log("New ip got\n", " Ip data: \t", ip);
  
  return (
    <div className="App">
      <header>
        <InputIp newIp = {newIp} />
      </header>

      <Info ipData={ip} />

      <Map id="map"/>
      
    </div>
    

  )

  

}

export default App;
