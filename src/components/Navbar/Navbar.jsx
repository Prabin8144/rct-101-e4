import React from "react";
import {Link} from "react-router-dom"



const Navbar = () => {
  return (
    <div data-cy="navbar">
      <div>
        <Link to="/home" data-cy="navbar-home-link">logo</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">cart</div>
        <button data-cy="navbar-login-logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
