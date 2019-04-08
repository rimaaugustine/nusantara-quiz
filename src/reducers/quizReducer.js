import {
  ADD_USERNAME,
  GET_OLD_QUESTIONS,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  ADD_SCORE,
  RESET_SCORE,
  GET_NEXT_QUESTION
} from '../actions/quizAction';

const initialState = {
  username: '',
  quiz: [],
  oldQuestions: [],
  question: {},
  score: 0,
  counter: 0,
  isFetching: false,
  error: false,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case FETCH_QUIZ_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        isFetching: false, 
        quiz: action.payload,
        question: action.payload1,
        oldQuestions:  [...state.oldQuestions, action.payload1]
      }; 
    case FETCH_QUIZ_FAILURE:
      return {
        ...state,
        isFetching: false, 
        error: action.payload
      }; 
    case GET_NEXT_QUESTION:
      return {
        ...state,
        quiz:  action.payload,
        question: action.payload1

      };   
    case GET_OLD_QUESTIONS:
      return {
        ...state,
        oldQuestions:   [...state.oldQuestions, action.payload]
      }; 
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score,
        counter: state.counter + 1
      }; 
    case RESET_SCORE:
      return {
        ...state,
        score: 0,
        counter: 0,
        quiz: [],
        question: {},
        oldQuestions: []
      }; 
    default:
      return state;
  }
}
