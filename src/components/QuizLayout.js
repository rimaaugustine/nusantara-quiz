import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ImageQuestion from '../styles/jakarta.jpeg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function QuizLayout(props) {
  const { classes, choices, question } = props;

  return (
    <div className={classes.root}>
    
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>{question}</h2>
          <img src={ImageQuestion} height="120" alt="img-choice" />
          </Paper>
        </Grid>
        {choices.map((choice, i) =>  <Grid key={i} item xs={12} sm={6}>
          <Paper  className={classes.paper} style={{backgroundColor:choice.color, color:"white"}}>{choice.content}</Paper>
        </Grid> )}
       
      </Grid>
    </div>
  );
}

QuizLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizLayout);