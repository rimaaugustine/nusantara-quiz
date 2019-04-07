import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor:'#b53d2a'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    right: 0,
    margin: '0 auto',
    backgroundColor:'#4e0000'
  }
});

class StatusQuiz extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position='fixed' color='primary' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton color='inherit' aria-label='Open drawer'>
              <AccountCircle />
              <Typography variant='h6' color='inherit'>
                Bear -
              </Typography>
             
              <Typography variant='h6' color='inherit' style={{marginLeft:5}}>
                 score: 0
              </Typography>
            </IconButton>
            <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <NavigateNext />
          </Fab>
           
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

StatusQuiz.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatusQuiz);
