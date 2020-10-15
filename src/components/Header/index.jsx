import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "reactstrap";

import styles from "./styles.module.sass";

function Header({ title }) {
  return (
    <Navbar color="faded" light color="warning">
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
