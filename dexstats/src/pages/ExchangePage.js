import React, { useEffect, useState } from 'react';
import "./exchangeStyle.css";

export default function ExchangePage(props) {
    const [name, setName] = useState("");

    useEffect(() => {
        // if url has a user parameter
        if (props.match.params.exchange) {
            setName(props.match.params.exchange);
        }
    });

    return (
        <div>
            <div className="homeOuter">
                <div className="header">
                    <div className="headerCenter">
                        <div className="nameAndIcon">
                            <img className="icon" src="https://research.binance.com/static/images/projects/uniswap/logo.png" alt="uniswap icon"></img>
                            {name}
                        </div>
                        <div id="volume1" className="volume">
                            24hr Volume
                            <p className="amount">$332,000,000</p>
                        </div>
                        <div id="liquidity1" className="liquidity">
                            Total Liquidity
                            <p className="amount">$1.92 B</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}