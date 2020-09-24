import React from 'react';
import "./homeStyle.css";

export default function Home() {


    return (
        <div>
            <div className="homeOuter">
                <div className="header">
                    <div className="headerCenter">
                        <div className="title">
                            dexstats.io
                        </div>
                        <div className="slogan">
                            Decentralized exchange statistics
                        </div>
                        <div className="volumeTotal">
                            24hr volume
                            <div className="vol">
                                $455,332,091
                            </div>
                        </div>
                        <div className="liquidityTotal">
                            Total liquidity
                            <div className="liq">
                                $2.8 B
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exchanges">




                    <div id="one" className="exchange" onClick={() => (window.location.href = "/exchange/uniswap")}>
                        <div className="nameAndIcon">
                            <img id="uniswapIcon" className="icon" src="https://research.binance.com/static/images/projects/uniswap/logo.png" alt="uniswap icon"></img>
                            Uniswap
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








                    <div id="two" className="exchange">
                        <div className="nameAndIcon">
                            <img id="kyberIcon" className="icon" src="https://assets.coingecko.com/coins/images/947/large/kyber-logo.png?1547034806" alt="kyber icon"></img>
                            Kyber Network
                        </div>
                        <div id="volume2" className="volume">
                            24hr Volume
                                <p className="amount">$42,678,000</p>
                        </div>
                        <div id="liquidity2" className="liquidity">
                            Total Liquidity
                                <p className="amount">$200 M</p>
                        </div>
                    </div>







                    <div className="exchange">
                        <div className="nameAndIcon">
                            <img id="zrxIcon" className="icon" src="https://assets.coingecko.com/coins/images/863/large/0x.png?1547034672" alt="zero x icon"></img>
                             0x Protocol
                        </div>
                        <div id="volume3" className="volume">
                            24hr Volume
                                <p className="amount">$332,000,000</p>
                        </div>
                        <div id="liquidity3" className="liquidity">
                            Total Liquidity
                                <p className="amount">$1.92 B</p>
                        </div>
                    </div>





                    <div className="exchange">
                        <div className="nameAndIcon">
                            <img id="bancorIcon" className="icon" src="https://www.worldcryptoindex.com/wp-content/uploads/2018/06/bancor-logo.jpg" alt="bancor icon"></img>
                            bancor
                        </div>
                        <div id="volume4" className="volume">
                            24hr Volume
                                <p className="amount">$332,000,000</p>
                        </div>
                        <div id="liquidity4" className="liquidity">
                            Total Liquidity
                                <p className="amount">$1.92 B</p>
                        </div>
                    </div>






                    <div id="exchange1" className="exchange">
                    </div>

                    <div className="footer">
                        <a>
                            terms
                        </a>
                        <a>
                            copyright 2020
                        </a>
                        <a>
                            API
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}