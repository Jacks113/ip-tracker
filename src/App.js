import './App.css';
import { useEffect, useState } from "react";

import { getIP, getGeoData } from './Services/getIP';
import InputIp from './Components/InputIp';
import Info from './Components/Info';
import Map from './Components/Map';


function App() {  

  const [ip, setIp] = useState("");
  const [ipError, setIpError] = useState("");
  const [location , setLocation] = useState([51, -0.11]);


  const newIp = ipAddress =>{
    getIP(setIp, setIpError, ipAddress);
    // getGeoData();
  }

  useEffect (() =>{
    if (ip.latitude !== "" && ip.latitude !== undefined & ip.latitude !== null && ip.longitude !== "" && ip.longitude !== undefined & ip.longitude !== null){
      setLocation([ip.latitude, ip.longitude]);
    }
}, [ip])


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

      <Map location={location} id="map"/>
      
    </div>
    

  )

  

}

export default App;
