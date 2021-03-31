import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/auth/actions";
import CasinosTable from "./Tabla";
import Copyright from "../Copyright";
import SysName from "../SysName";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  separador: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  email: {
    paddingRight: theme.spacing(2),
  },
}));

export default function Album() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const handloLogout = () => {
    dispatch(authLogout());
    history.replace("/");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Container maxWidth="lg">
          <Toolbar>
            <FlashOnIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              <SysName />
            </Typography>
            <div className={classes.separador}></div>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.email}
            >
              {user.lastName + ", " + user.firstName}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handloLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* Tabla */}
          <CasinosTable />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
