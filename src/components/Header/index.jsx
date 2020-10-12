/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// eslint-disable-next-line no-unused-vars
import styles from './styles.module.scss';

function Header({title}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'React Todos App',
};

export default Header;
