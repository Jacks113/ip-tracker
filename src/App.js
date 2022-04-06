import './App.css';
import {useState, useEffect} from "react";

import { getIP } from './Services/getIP';
import InputIp from './Components/InputIp';
import Info from './Components/Info';


function App() {  

  const [ip, setIp] = useState("");
  const [ipError, setIpError] = useState("");

  const newIp = ipAddress =>{
    getIP(setIp, setIpError, ipAddress);
   
  }
 console.log("New ip got\n", " Ip data: \t", ip);
  
  return (
    <div className="App">
      <header>
        <InputIp newIp = {newIp} />
      </header>

      <Info ipData={ip} />

      
    </div>
  );
}

export default App;
