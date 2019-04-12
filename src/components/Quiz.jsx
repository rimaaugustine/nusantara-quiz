import React, { Component } from 'react';
import QuizLayout from './QuizLayout';
import StatusQuiz from './StatusQuiz';
import FinalPage from './FinalPage';
import Loading from './loading';
//redux
import { connect } from 'react-redux';
import {
  fetchQuiz,
  getPrevQuestions,
  getNextQuestion
} from '../actions/quizAction';


class Quiz extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading : false
    }
  }
  componentDidMount() {
    //invoke the fetch API action 
    this.props.fetchQuiz();
  
  }

  componentWillUpdate(nextProps) {
    //what happened after user click the answer, counter is changed
    if (nextProps.counter !== this.props.counter) {
      //then invoke the action to put the question into prevQuestions array
      this.props.getPrevQuestions(this.props.currentQuestion);
    }
  }

  getCompareData = (data) => {
    this.props.getNextQuestion(data);
  };

  //after answer
  oldQuestionsArray = () => {
    const { currentQuestion } = this.props;
    this.props.getPrevQuestions(currentQuestion);
  };

  render() {
    const { isFetching, currentQuestion, counter } = this.props;
    console.log(currentQuestion)
    let mapQuestion;
    let mapChoices;
    let mapAnswer;
    let imageUrl;
    let imageTitle;
    if (currentQuestion.fields) {
        mapQuestion = currentQuestion.fields.question 
        mapAnswer = currentQuestion.fields.answer
        mapChoices =  currentQuestion.fields.choices
        imageUrl = currentQuestion.fields.imageQuestion.fields.file.url
        imageTitle = currentQuestion.fields.imageQuestion.fields.file.title
    } else {
      console.log("loading")
    }
   

    return (
      <div>
         {isFetching? (
          <Loading/>
        ) : (
          <React.Fragment>
            {counter <= 10 ? (
               <React.Fragment>
              <div style={{ margin: 20 }}>
              <QuizLayout
                question={mapQuestion}
                choices={mapChoices}
                answer={mapAnswer}
                getCompareData={this.getCompareData}
                imageTitle={imageTitle}
                imageUrl={imageUrl}
              />
            </div>
            <StatusQuiz />
            </React.Fragment>
            ) : (
              <FinalPage/>
            )}
         </React.Fragment>
        )}
     
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //from ../reducers/index
  isFetching: state.data.isFetching,
  currentQuestion: state.data.currentQuestion,
  counter: state.data.counter
});

export default connect(
  mapStateToProps,
  { fetchQuiz, getPrevQuestions, getNextQuestion }
)(Quiz);
