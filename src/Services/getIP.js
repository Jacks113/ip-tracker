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


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
		'X-RapidAPI-Key': '12fd189607msh5aab80fadacaf12p129a74jsne25b07624d52'
	}
};



function getGeoData(){

    fetch('https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=Grad%20Zagreb&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

export {getIP, getGeoData};
