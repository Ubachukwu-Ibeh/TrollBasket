import React from "react";
import BuyLandingPage from "./pages/Buy/components/BuyLandingPage/BuyLandingPage";
import DetailsLandingPage from "./pages/Details/components/DetailsLandingPage/DetailsLandingPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={BuyLandingPage} />
          <Route
            path="/details-landing-page/:id"
            component={DetailsLandingPage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
