export default function Info(props){

    const {ipData} = props;

    return  <div className="info-container">
                <h3>Ip address</h3>
                {ipData !== "" ? <p>{ipData.ip}</p> : <p></p>}

                <h3>Location</h3>
                {(ipData !== "" && ipData.location.region !== undefined) ? <p>{ipData.location.region}, {ipData.location.country}</p> : <p></p>}

                <h3>Time zone</h3>
                {ipData !== "" ? <p>{ipData.location.timezone}</p> : <p></p>}

                <h3>Isp</h3>
                {ipData !== "" ? <p>{ipData.isp}</p> : <p></p>}

            </div>
}