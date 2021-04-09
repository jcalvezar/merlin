import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./Login";
import ForgetPage from "./Forget";
import RegisterPage from "./Register";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/merlin.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const { loggedIn } = useSelector((state) => state.authReducer);
  let history = useHistory();
  let { path } = useRouteMatch();

  useEffect(() => {
    if (loggedIn) {
      history.push("/home");
    }
  }, [loggedIn]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
    </Grid>
  );
}
