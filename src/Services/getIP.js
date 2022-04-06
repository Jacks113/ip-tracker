function getIP (setIp, setIpError, ipAddress){

    const ip =( "https://geo.ipify.org/api/v2/country?apiKey=at_HjbheGiDT8oRKMUnd851jb4cpqBx6&ipAddress=" + ipAddress).toString();

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
