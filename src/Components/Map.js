import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import { useEffect } from 'react';


function Map(props){

    
    const { location } = props;
    const map = useMap;
    
    useEffect(()=>{
        console.log("Location data changed, new data: ", location);
    }, [location])
    

    const changePosition = (newLocation) => {
        map.setView(newLocation, 9);
        map.panTo(newLocation, 7);
    }

    return <MapContainer center={[51, -0.11]} zoomControl={false} zoom={3}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
            <Popup>
                You are here. 
            </Popup>
            </Marker>
            <ZoomControl position='bottomright'/>
        </MapContainer>
        
       changePosition(location);

    
}

export default Map;