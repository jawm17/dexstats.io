import React, { useEffect, useState } from 'react';
import exchanges from "../exchanges.json";
import "./exchangePageStyle.css";

export default function ExchangePage(props) {
    const [name, setName] = useState("");
    const [src, setSrc] = useState("");

    useEffect(() => {
        switch (props.match.params.exchange) {
            case "uniswap":
                initUniswap();
                break;
            case "kyber":
                initKyber();
                break;
            case "zrx":
                initZrx();
                break;
            case "bancor":
                initBancor();
                break;
            case "curve":
                initCurve();
                break;
            case "tokenlon":
                initTokenlon();
                break;
            default:
                window.location.href = "/";
        }
    });

    function initUniswap() {
        setName("Uniswap");
        setSrc(exchanges[0].logo);
    }

    function initKyber() {
        setName("kyber");
        setSrc(exchanges[1].logo);
    }

    function initZrx() {
        setName("0x Protocol");
        setSrc(exchanges[2].logo);
    }

    function initBancor() {
        setName("Bancor");
        setSrc(exchanges[3].logo);
    }

    function initCurve() {
        setName("Curve Finance");
        setSrc(exchanges[4].logo);
    }

    function initTokenlon() {
        setName("Tokenlon");
        setSrc(exchanges[5].logo);
    }


    return (
        <div>
            <div className="homeOuter">
                <div className="header">
                    <div className="headerCenter">
                        <div className="nameAndIcon">
                            <img id={name} className="mainIcon" src={src} alt="icon"></img>
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