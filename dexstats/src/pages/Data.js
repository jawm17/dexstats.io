import React, { useEffect, useState } from 'react';
import "./dataStyle.css";

export default function Data() {

    useEffect(() => {
        document.getElementById("container").setAttribute("style", "display:none");
    }, []);


    return (
        <div>
            <div className="dataPage">
                <div className="largeHeader">
                    <div className="headerCenter">
                        <div className="title">
                            Data
                        </div>
                        <div className="subTitle">
                            Dexstats.io
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
                <div className="dataCenter">
                    <p>
                        Dexstats is here to provide you with the most accurate and up to date decentralized cryptocurrency exchange statistics.
                    </p>
                </div>
            </div>
        </div>
    );
}
