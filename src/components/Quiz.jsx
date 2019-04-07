import React, { Component } from 'react'
import QuizLayout from './QuizLayout.js'
import StatusQuiz from './StatusQuiz'

export default class Quiz extends Component {
  render() {
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
