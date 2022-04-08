import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


function getIP (setIp, setIpError, ipAddress){

   const apiKey = "a455b6a010bbf47fa1f4cb9f7bc01173ecff98dbae47ac460e38e458";

    let ip =( "https://api.ipdata.co/" + ipAddress + "?api-key=" + apiKey).toString();

    fetch(ip)
        .then(res => res.json())
            .then(
                (ipData) => {
                    setIp(ipData)
                }, 
                (error) => {
                    setIpError(error)
                }
            )
}



export {getIP};
