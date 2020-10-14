import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import history from './history';
import Home from "./pages/Home";
import ExchangePage from "./pages/ExchangePage";
import About from "./pages/About";
import Data from "./pages/Data";
import Copyright from "./pages/Copyright";

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/exchange/:exchange" component={ExchangePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/copyright" component={Copyright} />
      </div>
    </Router>
  );
}

export default App;
