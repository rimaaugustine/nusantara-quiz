import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';

import { NavLink } from 'react-router-dom';
//redux
import compose from 'recompose/compose';
import { connect } from "react-redux";
import {addUsername} from "../actions/quizAction";

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
  

  handleChange = (event) => {
    this.props.addUsername(event.target.value)
    
  };

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    const { classes, username } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <TextField
          id='outlined-textarea'
          label='Fill your name'
          placeholder='username'
          error
          className={classes.textField}
          margin='normal'
          variant='outlined'
          value={username}
          onChange={this.handleChange}
        />
        <div>
          <Button
            variant='contained'
            color='inherit'
            className={classNames(classes.button)}
            size="large"
            component={NavLink}
            type="submit"
            to="/quiz"
          >
            Ready to Quiz??
          </Button>
        </div>
        </form>
      </div>
    );
  }
}

NameField.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};


const mapStateToProps = state => ({
  //from ../reducers/index
  username: state.data.username
}); 


export default compose(
  withStyles(styles),
  connect(mapStateToProps, { addUsername })
)(NameField);


