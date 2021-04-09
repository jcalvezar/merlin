import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPage from "./components/auth";
import HomePage from "./components/home";
import LandingPage from "./components/landing";
import Layout from "./components/Layout";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <ProtectedRoute path="/home" exact>
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
