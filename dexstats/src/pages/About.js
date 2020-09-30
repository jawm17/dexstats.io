import React, { useEffect, useState } from 'react';
import "./aboutStyle.css";

export default function About() {
    const [header, setHeader] = useState("largeHeader");

    useEffect(() => {
        document.getElementById("container").setAttribute("style", "display:none");
        document.addEventListener("scroll", () => {
            let name = window.scrollY < 10 ? "largeHeader" : "smallHeader";
            setHeader(name);
        });
    }, []);


    return (
        <div>
            <div className="aboutPage">
                <div className={header}>
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
                <div className="aboutCenter">
                    <p>
                        Dexstats is here to provide you with the most accurate and up to date decentralized cryptocurrency exchange statistics.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu. Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Ut minim occaecat commodo dolor eu.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Our website is made possible with data from the dexstats api. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu. Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Ut minim occaecat commodo dolor eu.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu. Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu. Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Elit culpa veniam tempor eu magna id ullamco labore. Ut minim occaecat commodo dolor eu.
                        Sunt ullamco est ea deserunt qui nisi labore eiusmod consequat. Ut minim occaecat commodo dolor eu.
                    </p>
                </div>
            </div>
        </div>
    );
}
