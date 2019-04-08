import {ADD_USERNAME, FETCH_QUIZ} from '../actions/quizAction'

const initialState = {
   username: "",
   quiz: []
  };
  
export default function quizReducer(state = initialState, action) {
    switch (action.type){
        case ADD_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case FETCH_QUIZ:
            return {
                ...state,
                quiz: action.payload
            }
        default:
            return state;
    }
}
