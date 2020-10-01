import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from './history';
import Home from "./pages/Home";
import ExchangePage from "./pages/ExchangePage";
import About from "./pages/About";

function App() {
  return (
    <Router history={history} basename={"/dexstats.io/dexstats"}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/exchange/:exchange"} component={ExchangePage} />
        <Route exact path={"/about"} component={About} />
        {/* <Route path="/">
          <NoMatchPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
