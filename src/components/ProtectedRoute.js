import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//import { isAuthenticated } from "../services/AuthService";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function ProtectedRoute({ children, ...rest }) {
  const { loggedIn } = useSelector((state) => state.authReducer);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
