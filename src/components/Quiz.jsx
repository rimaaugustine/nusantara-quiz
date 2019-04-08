import React, { Component } from 'react';
import QuizLayout from './QuizLayout';
import StatusQuiz from './StatusQuiz';

//redux
import { connect } from 'react-redux';
import { fetchQuiz, getOldQuestions, getNextQuestion } from '../actions/quizAction';

class Quiz extends Component {
  
  componentDidMount() {
    this.props.fetchQuiz();
    // this.props.getOldQuestions(this.props.question)
  }

  // componentDidUpdate(nextProps){
  //   if(nextProps.question !== this.props.question)
  //     if(this.props.question !== null){
  //      console.log(this.props.question)
  //     }
  //   }
  
  componentWillUpdate(nextProps){
  if(nextProps.counter !== this.props.counter){
    this.props.getOldQuestions(this.props.question)
  }
   
  
  }

  getCompareData = (data) =>{
    this.props.getNextQuestion(data)
  }

  //after answer
  oldQuestionsArray = () => {
    const {question} = this.props;

    this.props.getOldQuestions(question)
    
  }


  render() {
    const {isFetching,question} = this.props;

    const mapQuestion = Object.keys(question).map( key => question[key].question)[1]

    //const mapImages = Object.keys(question).map( key => question[key].imageQuestion)[1]
    const mapChoices = Object.keys(question).map( key => question[key].choices)[1]
    const mapAnswer = Object.keys(question).map( key => question[key].answer)[1]
  
    return (
      <div>
        {isFetching ? <p>loading...</p> : 
           <div style={{ margin: 20 }}>
           <QuizLayout
             question={mapQuestion}
             choices={mapChoices}
              answer={mapAnswer}
              getCompareData={this.getCompareData}
           />
         </div>
        }
       
        <StatusQuiz />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //from ../reducers/index
  quiz: state.data.quiz,
  isFetching: state.data.isFetching,
  oldQuestions: state.data.oldQuestions,
  question: state.data.question,
  counter: state.data.counter
});

export default connect(
  mapStateToProps,
  { fetchQuiz, getOldQuestions, getNextQuestion }
)(Quiz);