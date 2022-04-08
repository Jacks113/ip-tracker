import { useState, useEffect } from "react";

export default function Info(props){

    const {ipData} = props;
    const ipDataJSON = JSON.stringify(ipData);
    const [validIp, setValidIp] = useState(false);

    console.log("Ip data is:" + ipData);

    useEffect(()=>{
        if (ipData && ipData !== "" && ipData !== undefined ){
            setValidIp(true);
        }

        if (ipData){
            if (ipData.message){
                alert(ipData.message);
            }
        }
       
        
    }, [ipData])
    

    return  <div className="info-container">
                <div className="infos">
                    <h3>Ip address</h3>
                        {validIp  ? <p>{ipData.ip}</p> : <p></p>}
                </div>
                <hr/>
                <div className="infos">
                    <h3>Location</h3>
                    {validIp && ipData.country_code != undefined ? <p>{ipData.country_code}, {ipData.postal}</p> : <p></p>}
                </div>
                <hr/>

                <div className="infos">
                    <h3>Time zone</h3>
                    {validIp  && ipData.time_zone !== undefined ? <p>{ipData.time_zone.offset}</p> : <p></p>}
                </div>
                <hr/>

               <div className="infos">
                    <h3>Isp</h3>
                    {validIp  && ipData.asn !== undefined? <p>{ipData.asn.name}</p> : <p></p>}
                </div>
            </div>
}