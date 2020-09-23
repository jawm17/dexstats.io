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
                    <div id="one" className="exchange">
                        <img id="uniswapIcon" className="icon" src="https://research.binance.com/static/images/projects/uniswap/logo.png" alt="uniswap icon"></img>
                        Uniswap
                    </div>
                    <div className="exchange">
                        <img id="kyberIcon" className="icon" src="https://assets.coingecko.com/coins/images/947/large/kyber-logo.png?1547034806" alt="kyber icon"></img>
                        Kyber Network
                    </div>
                    <div className="exchange">
                        <img id="zrxIcon" className="icon" src="https://assets.coingecko.com/coins/images/863/large/0x.png?1547034672" alt="zero x icon"></img>
                        0x Protocol
                    </div>
                    <div className="exchange">
                        <img id="bancorIcon" className="icon" src="https://www.worldcryptoindex.com/wp-content/uploads/2018/06/bancor-logo.jpg" alt="bancor icon"></img>
                        bancor
                    </div>
                    <div className="exchange">
                    </div>
                    <div className="exchange">
                    </div>
                    <div className="exchange">
                    </div>
                    <div className="exchange">
                    </div>
                </div>
            </div>
        </div>
    );
}