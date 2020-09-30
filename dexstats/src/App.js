import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import history from './history';
import Home from "./pages/Home";
import ExchangePage from "./pages/ExchangePage";
import About from "./pages/About";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/"}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/exchange/:exchange" component={ExchangePage} />
        <Route exact path="/about" component={About} />
      </div>
    </HashRouter>
  );
}

export default App;
