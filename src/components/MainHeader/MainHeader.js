import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../context/authContext";

const MainHeader = () => {
  const AuthCon = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>MyApp</h1>
      <Navigation onLogout={AuthCon.onLogout} />
    </header>
  );
};

export default MainHeader;
