import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/login";
import HomePage from "./components/home";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact>
          <HomePage />
        </ProtectedRoute>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
