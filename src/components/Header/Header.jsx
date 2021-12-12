import React from "react";
import {useNavigate, Link} from "react-router-dom"
import classes from "./Header.module.css";

const Header = () => {
  const history = useNavigate();
  const goToCarthandler = () => {
    history("/cart");
  }
  return (
    <div className={classes.header}>
      <Link to="/">Flipkart clone</Link>
      <button type="button" onClick={goToCarthandler}>Cart</button>
    </div>
  );
};

export default Header;
