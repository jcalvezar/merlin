import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./Login";
import ForgetPage from "./Forget";
import RegisterPage from "./Register";

export default function SignInSide() {
  const { loggedIn } = useSelector((state) => state.authReducer);
  let history = useHistory();
  let { path } = useRouteMatch();

  useEffect(() => {
    if (loggedIn) {
      history.push("/home");
    }
  }, [loggedIn]);

  return (
    <Grid container component="main">
      <CssBaseline />
      <Switch>
        <Route exact path={path}>
          <LoginPage />
        </Route>
        <Route path={`${path}/registro`}>
          <RegisterPage />
        </Route>
        <Route path={`${path}/recupero`}>
          <ForgetPage />
        </Route>
      </Switch>
    </Grid>
  );
}
