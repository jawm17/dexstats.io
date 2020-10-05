import React, { useEffect, useState } from 'react';
import ExchangeElement from "../components/ExchangeElement";
import exchanges from "../exchanges.json";
import "./homeStyle.css";

export default function Home() {
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
            <div className="homeOuter">
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
                <div className="exchanges">
                    {
                        exchanges.map(exchange => (
                            <ExchangeElement
                                name={exchange.name}
                                src={exchange.logo}
                            />
                        ))
                    }
                    <div className="footer">
                        <a id="about" className="footerEl" onClick={() => (window.location.href = "/about")}>
                            about
                        </a>
                        <a id="copyright" className="footerEl" onClick={() => (window.location.href = "/copyright")}>
                            copyright
                        </a>
                        <a id="data" className="footerEl" onClick={() => (window.location.href = "/data")}>
                            data
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}