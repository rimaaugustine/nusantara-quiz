
import * as contentful from 'contentful'


var client = contentful.createClient({
  space: '381el0fe1wnr',
  accessToken: '79049fa3e3330fdad5efc9cfaa8108947ba665833011e56217e3d9c44882bf74' })


export const ADD_USERNAME = 'ADD_USERNAME';
export const FETCH_QUIZ = 'FETCH_QUIZ';

export const addUsername = (username) => (dispatch) => {
  dispatch({
    type: ADD_USERNAME,
    username
  });
};

export const fetchQuiz = () =>  (dispatch) => {
    client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        dispatch({
          type: FETCH_QUIZ,
          payload: entry.fields
        })
      }
    })
  }).catch(error => {
    console.error('error fetch the content', error)
  })
     
  
};
