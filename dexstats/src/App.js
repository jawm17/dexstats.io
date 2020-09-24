import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import Home from "./pages/Home";
import ExchangePage from "./pages/ExchangePage";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/exchange" component={ExchangePage} />
        {/* <Route path="/">
          <NoMatchPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
