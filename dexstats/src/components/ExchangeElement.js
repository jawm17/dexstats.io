import React, { Link, useEffect, useState } from "react";
import "./exchangeElementStyle.css";

export default function ExchangeElement(props) {
    const [name, setName] = useState("uniswap");

    useEffect(() => {
        if(props.name === "Kyber") {
            setName("Kyber Network");
        } else if(props.name === "zrx") {
            setName("0x Protocol");
        } else  {
            setName(props.name)
        }
    }, [])

    const style = {

    }

    return (
        <div id="one" className="exchange" onClick={() => (window.location.href = "/exchange/" + props.name.toLowerCase())}>
            <Link to="/about">fuck </Link>
            <div className="nameAndIcon">
                <img id={props.name} className="icon" src={props.src} alt="exchange icon"></img>
                <div className="name">
                    {name}
                </div>
            </div>
            <div id="volume2" className="volume">
            24hr volume
                <p className="amount">$420,678,000</p>
            </div>
            <div id="liquidity2" className="liquidity">
            Total liquidity
                <p className="amount">$200 M</p>
            </div>
        </div>
    );
}