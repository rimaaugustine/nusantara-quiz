export const ADD_USERNAME = "ADD_USERNAME";


export const addUsername = username => dispatch => {
    dispatch({
        type: ADD_USERNAME,
        username
    })
}