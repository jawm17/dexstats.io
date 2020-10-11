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
                        <div id="clickable" className="title" onClick={() => (window.location.href = "/")}>
                            dexstats.io
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
                    <p className="titleMini">
                        About
                    </p>
                    <br></br>
                    <p>
                        Dexstats is here to provide you with the most accurate and up to date decentralized cryptocurrency exchange statistics.
                        Dexstats is here to provide you with the most accurate and up to date decentralized cryptocurrency exchange statistics.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Our website is made possible with data from the <a href="/data">Dexstats API</a>.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="titleMini">
                        Our Story
                    </p>
                    <br></br>
                    <p>
                        Dexstats came naturally from the demand for a reliable and trustworthy source for decentralized exhange info. 
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="titleMini">
                        Road Map
                    </p>
                    <br></br>
                    <p>
                        Because we all need one.
                    </p>
                    <br></br>
                    <br></br>
                    <img className="roadmap" src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16411242_quantized.png" alt="roadmap"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <div className="footer">
                        <a id="about" className="footerEl" onClick={() => (window.location.href = "/about")}>
                            about
                        </a>
                        <a id="copyright" className="footerEl" onClick={() => (window.location.href = "/copyright")}>
                            copyright
                        </a>
                        <a id="data" className="footerEl" onClick={() => (window.location.href = "/data")}>
                            data
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
