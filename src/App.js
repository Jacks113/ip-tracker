import './App.css';
import { useEffect, useState } from "react";

import { getIP, getGeoData } from './Services/getIP';
import InputIp from './Components/InputIp';
import Info from './Components/Info';
import Map from './Components/Map';


function App() {  

  const [ip, setIp] = useState(undefined);
  const [ipError, setIpError] = useState(false);
  const [location , setLocation] = useState([51, -0.11]);


  const newIp = ipAddress =>{
    getIP(setIp, setIpError, ipAddress);
    // getGeoData();
    if (!ip){
      setIpError(true);
    }

    else if (ip){
      setIpError(true);
    }
  }

  useEffect (() =>{
    if (ip && ip.latitude !== "" && ip.latitude !== undefined & ip.latitude !== null && ip.longitude !== "" && ip.longitude !== undefined & ip.longitude !== null){
      setLocation([ip.latitude, ip.longitude]);
    }

}, [ip])

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
