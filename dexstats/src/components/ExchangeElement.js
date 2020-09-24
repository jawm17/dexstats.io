import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import "./exchangeElementStyle.css";

export default function ExchangeElement(props) {
    const [name, setName] = useState("uniswap");

    useEffect(() => {
        if(props.name === "Kyber") {
            setName("Kyber Network");
        } else if(props.name === "0x") {
            setName("0x Protocol");
        } else  {
            setName(props.name)
        }
    }, [])

    const style = {

    }

    return (
        <div id="one" className="exchange" onClick={() => (window.location.href = "/exchange/" + props.name.toLowerCase())}>
            <div className="nameAndIcon">
                <img id="uniswapIcon" className="icon" src={props.src} alt="exchange icon"></img>
                {name}
            </div>
            <div id="volume2" className="volume">
                <p className="amount">$420,678,000</p>
            </div>
            <div id="liquidity2" className="liquidity">
                <p className="amount">$200 M</p>
            </div>
        </div>
    );
}