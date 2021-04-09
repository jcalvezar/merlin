import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { tryLogin } from "../../redux/auth/actions";
import SysName from "../common/SysName";
import md5 from "md5";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const user = { email: "", password: "" };
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    user.email = e.target.value;
  };

  const handlePasswordChange = (e) => {
    user.password = md5(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("LOGIN ", user);
    dispatch(tryLogin(user));
  };

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingreso al <SysName />
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Dirección de Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordar Ingreso"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleButtonClick}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/auth/recupero" variant="body2">
                Olvidó la clave?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/auth/registro" variant="body2">
                {"No tiene cuenta? Registrarse"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
