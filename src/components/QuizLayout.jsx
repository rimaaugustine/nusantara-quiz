import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import ImageQuestion from '../styles/jakarta.jpeg'

//redux
import compose from 'recompose/compose';
import { connect } from "react-redux";
import {addScore, fetchQuiz} from "../actions/quizAction";


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


class QuizLayout extends Component   {
  constructor(props){
    super(props);
    this.state ={
     
    }
  }

 
  onHandleAnswer = (e) => {
   const answer = e.currentTarget.id
    if( answer === this.props.answer){
      this.props.addScore(10)
      alert("true")
    }else{
    alert("false")
    }
    console.log(this.compare())
    this.props.getCompareData(this.compare())
    
  }

 compare = () => {
  const { quiz, oldQuestions, questionState} = this.props;
  const oldQuestionsId = oldQuestions.map(question => question.sys.id)
  const questionId = questionState.sys.id
  console.log(oldQuestionsId)
    let quizFiltered;
    if(quiz.length !== 0){   
       quizFiltered = quiz.filter(entry => !oldQuestionsId.includes(entry.sys.id) && entry.sys.id !== questionId )

    }
    return quizFiltered

  
  }
  

  render(){
    const { classes, choices, question } = this.props;
  return (
    <div className={classes.root}>
    
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>{question}</h2>
          <img src={ImageQuestion} height="120" alt="img-choice" />
          </Paper>
        </Grid>
        {choices? choices.map((choice, i) =>  <Grid key={i} item xs={12} sm={6}>
          <Paper onClick={this.onHandleAnswer} id={choice} className={classes.paper} style={{ backgroundColor:"#fff",color:"black"}}>{choice}</Paper>
        </Grid> ) : []}
       
      </Grid>
    </div>)
  }
  
 
}

QuizLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  //from ../reducers/index
  quiz: state.data.quiz,
  questionState: state.data.question,
  oldQuestions: state.data.oldQuestions,
}); 



export default compose(
  withStyles(styles),
  connect(mapStateToProps, { addScore, fetchQuiz})
)(QuizLayout);
