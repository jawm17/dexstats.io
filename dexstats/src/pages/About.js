import React, { useEffect, useState } from 'react';
import "./aboutStyle.css";

export default function About() {

    useEffect(() => {
        document.getElementById("container").setAttribute("style", "display:none");
    }, []);


    return (
        <div>
            <div className="aboutPage">
                <div className="largeHeader">
                    <div className="headerCenter">
                        <div className="title">
                            About
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
                <div className="aboutCenter">
                    <p>
                        Dexstats is here to provide you with the most accurate and up to date decentralized cryptocurrency exchange statistics.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Our website is made possible with data from the Dexstats <a href="/data">api</a>.
                    </p>
                    <br></br>
                    <br></br>
                    <p className="titleAPI">
                        Dexstats API
                    </p>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    );
}
