import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: '#7f0000'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 20,
    color: 'white'
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position='static'>
        <Toolbar variant='dense'>
          <NavLink to='/'>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
          </NavLink>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            Nusantara-Quiz
          </Typography>
            <Button component={NavLink} to="/about" color='inherit'>About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
