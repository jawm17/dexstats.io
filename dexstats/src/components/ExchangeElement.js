import React from "react";
import "./exchangeElementStyle.css";

export default function ExchangeElement() {

    return (
        <div id="two" className="exchange" >
            <div className="nameAndIcon">
                <img id="kyberIcon" className="icon" src="https://assets.coingecko.com/coins/images/947/large/kyber-logo.png?1547034806" alt="kyber icon"></img>
                Kyber Network
            </div>
            <div id="volume2" className="volume">
                <p className="amount">$42,678,000</p>
            </div>
            <div id="liquidity2" className="liquidity">
                <p className="amount">$200 M</p>
            </div>
        </div>
    );
}