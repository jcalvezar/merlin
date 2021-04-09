import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function Pricing(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
