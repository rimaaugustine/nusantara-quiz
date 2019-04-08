import React, { Component } from 'react'
import QuizLayout from './QuizLayout.js'
import StatusQuiz from './StatusQuiz'

//redux

import { connect } from "react-redux";
import {fetchQuiz} from "../actions/quizAction";


class Quiz extends Component {

componentDidMount(){
  this.props.fetchQuiz()
}
  render() {
    console.log(this.props.quiz)
    return (
      <div>
        <div style={{margin:20}}>
        <QuizLayout question="What is the capital city of Indonesia?" choices={[{"content":"Surabaya", "color":"#ff5252"}, {"content":"Jakarta", "color":"#3949ab"}, {"content":"Bandung", "color":"#ffa000"},{"content":"Yogyakarta", "color":"#388e3c"}]} />
        </div>
       <StatusQuiz/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //from ../reducers/index
  quiz: state.data.quiz
}); 


export default 
  connect(mapStateToProps, { fetchQuiz })(Quiz);



