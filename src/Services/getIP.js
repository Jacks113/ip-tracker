import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


function getIP (setIp, setIpError, ipAddress){

    let ip =( "https://geo.ipify.org/api/v2/country?apiKey=at_HjbheGiDT8oRKMUnd851jb4cpqBx6&ipAddress=" + ipAddress).toString();

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




function getGeoData(loc){
    

    let address = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + loc.toString() + ".json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiamFzMTIiLCJhIjoiY2wxb3N1bDdkMDJzdzNrcXV1aWEwNThybSJ9.tqNy9WQdPHVV5Kocma2QJw";


    fetch(address)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

export {getIP, getGeoData};
