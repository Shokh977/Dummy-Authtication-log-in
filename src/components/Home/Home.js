import React, { Component, useContext } from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../context/authContext";

const Home = () => {
  const AuthCon = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={AuthCon.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
