import React from "react";
import { Switch, Router, Route, Link } from "react-router-dom";
import LoginPage from "../pages/login/index";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
          <Link to="/">Log-off</Link>
        </Route>
        <Route exact path="/">
            <Link to="/login">Login</Link>
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
