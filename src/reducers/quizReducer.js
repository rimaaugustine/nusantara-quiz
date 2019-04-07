import {ADD_USERNAME} from '../actions/quizAction'

const initialState = {
   username: ""
  };
  
export default function quizReducer(state = initialState, action) {
    switch (action.type){
        case ADD_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }
}
