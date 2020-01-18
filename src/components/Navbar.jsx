import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingCartIcon from "mdi-react/ShoppingCartIcon";
import MenuIcon from "mdi-react/MenuIcon";
import Navbar from "react-materialize/lib/Navbar";
import NavItem from "react-materialize/lib/NavItem";

const NavbarComponent = ({ itemsCount }) => {
  return (
    <Navbar
      fixed
      alignLinks="right"
      brand={<Link to="/"> Магазин</Link>}
      menuIcon={<MenuIcon />}
      options={{}}
    >
      <NavItem>
        <Link to="/cart" className="cart-icon">
          <ShoppingCartIcon />
          <span class="badge">{itemsCount}</span>
        </Link>
      </NavItem>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    itemsCount: state.addedItems.length
  };
};

export default connect(mapStateToProps)(NavbarComponent);
