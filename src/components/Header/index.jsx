import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "reactstrap";

function Header({ title }) {
  return (
    <Navbar color="warning" light>
      <NavbarBrand href="/" className="mr-auto">
        {title}
      </NavbarBrand>
    </Navbar>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "React Todos",
};

export default Header;
