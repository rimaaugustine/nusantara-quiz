import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Choices from './Choices';
//redux
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { addScore, fetchQuiz } from '../actions/quizAction';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#fff'
  },
  paperHov: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: '#b71c1c',
    color: '#fff'
  }
});


class QuizLayout extends Component {
  onHandleAnswer = (e) => {
    const answer = e.currentTarget.id;
    if (answer === this.props.answer) {
      this.props.addScore(10);
      alert('true');
    } else {
      this.props.addScore(0);
      alert('false');
    }

    this.props.getCompareData(this.compare());
  };

  
  compare = () => {
    const { questionEntries, prevQuestions, currentQuestion } = this.props;
    const oldQuestionsId = prevQuestions.map((question) => question.sys.id);
    const questionId = currentQuestion.sys.id;

    let quizFiltered;
    if (questionEntries.length !== 0) {
      quizFiltered = questionEntries.filter(
        (entry) =>
          !oldQuestionsId.includes(entry.sys.id) && entry.sys.id !== questionId
      );
    }
    return quizFiltered;
  };

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    const { classes, choices, question, imageTitle, imageUrl } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>{question}</h2>
              <img style={{maxWidth:'20%', height:'auto'}} src={imageUrl} alt={imageTitle} />
            </Paper>
          </Grid>
          {choices
            ? this.shuffle(choices).map((choice, i) => (
                <Grid key={i} item xs={12} sm={6}>
                  <Choices
                    onClick={this.onHandleAnswer}
                    paperclass={classes.paper}
                    paperclasshov={classes.paperHov}
                    id={choice}
                  >
                    {choice}
                  </Choices>
                </Grid>
              ))
            : []}
        </Grid>
        <br/>
        <br/>
      </div>
    );
  }
}

QuizLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  //from ../reducers/index
  questionEntries: state.data.questionEntries,
  currentQuestion: state.data.currentQuestion,
  prevQuestions: state.data.prevQuestions
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { addScore, fetchQuiz }
  )
)(QuizLayout);
