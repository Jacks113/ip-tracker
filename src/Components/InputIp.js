import { useState } from "react";

function InputIp (props){

    const [ipAddress, setIpAddress] = useState("");

    const handleInput = (e) => {
        setIpAddress(e.target.value);
        console.log(ipAddress);
    }

    const handleSend = e => {
        e.preventDefault();
        if (ipAddress !== "" && ipAddress !== null && ipAddress.length >= 10){
            props.newIp(ipAddress);
            setIpAddress("");
        }
    }
    return <form className="address" onSubmit={handleSend}>
                <h2>IP Address Tracker</h2>
                <input value={ipAddress} onChange={e=>handleInput(e)} placeholder="1.1.1.1" />
                <button >
                    <img alt="button-arrow-icon" src="/images/icon-arrow.svg" />
                </button>
           </form>
}

export default InputIp;