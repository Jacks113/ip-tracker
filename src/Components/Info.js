export default function Info(props){

    const {ipData} = props;

    if (ipData){
        console.log(ipData.time_zone.offset);
    }

    return  <div className="info-container">
                <div className="infos">
                    <h3>Ip address</h3>
                        {ipData !== "" ? <p>{ipData.ip}</p> : <p></p>}
                </div>
                <hr/>
                <div className="infos">
                    <h3>Location</h3>
                    {(ipData !== "" && ipData.country_code !== undefined) ? <p>{ipData.country_code}, {ipData.postal}</p> : <p></p>}
                </div>
                <hr/>

                <div className="infos">
                    <h3>Time zone</h3>
                    {(ipData) ? <p>{ipData.time_zone.offset}</p> : <p></p>}
                </div>
                <hr/>

               <div className="infos">
                    <h3>Isp</h3>
                    {(ipData) ? <p>{ipData.asn.name}</p> : <p></p>}
                </div>
            </div>
}