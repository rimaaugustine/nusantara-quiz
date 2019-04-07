import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';

import { NavLink } from 'react-router-dom';


const styles = (theme) => ({
  container: {
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: '#fff'
  },
  button:{
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[500],
    },
  }
});

class NameField extends Component {
  state = {
    name: 'Cat in the Hat'
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
    console.log(name);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          id='outlined-textarea'
          label='Fill your name'
          placeholder='username'
          error
          className={classes.textField}
          margin='normal'
          variant='outlined'
        />
        <div>
          <Button
            variant='contained'
            color='inherit'
            className={classNames(classes.button)}
            size="large"
            component={NavLink}
            to="/quiz"
          >
            Ready to Quiz??
          </Button>
        </div>
      </div>
    );
  }
}

NameField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NameField);
