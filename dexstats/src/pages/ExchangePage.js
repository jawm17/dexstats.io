import React, { useEffect, useState } from 'react';
import MainChart from "../components/MainChart";
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
        setName("Kyber");
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
            <div className="exchangePage">
                <div className="center">
                    <div className="exchangePageHeader">
                        <div className="nameNIcon">
                            <img id={name + "Page"} className="mainIcon" src={src} alt="icon"></img>
                            <div className="exchangeTitle">
                                {name}
                            </div>
                        </div>
                        <div className="volumeLabel">
                            24hr Volume
                            <p className="amount">$332,000,000</p>
                        </div>
                        <div className="liquidityLabel">
                            Total Liquidity
                            <p className="amount">$1.92 B</p>
                        </div>
                    </div>
                </div>
            </div>
            <MainChart />
        </div>

    );
}