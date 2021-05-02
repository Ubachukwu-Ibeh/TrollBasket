import React from "react";
import BuyLandingPage from "./pages/Buy/components/BuyLandingPage/BuyLandingPage";
import DetailsLandingPage from "./pages/Details/components/DetailsLandingPage/DetailsLandingPage";
import CartLandingPage from "./pages/Cart/components/CartLandingPage/CartLandingPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={Routes.Buy} exact component={BuyLandingPage} />
          <Route
            path={`${Routes.Details}/:id`}
            component={DetailsLandingPage}
          />
          <Route path={Routes.Cart} component={CartLandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
