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
                    </div>
                    <div className="exchange">
                    </div>
                    <div className="exchange">
                    </div>
                    <div className="exchange">
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