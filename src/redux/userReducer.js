import axios from "axios";

const initialState = {
  loading: false,
  user: {}
}

const GET_USER = 'GET_USER'

export function getUser(){
  const user = axios
    .get('https://randomuser.me/api/')
    .then((res) => res.data.results[0])
    return {
      type: GET_USER,
      payload: user
    }
}

function userReducer(state = initialState, action){
  switch(action.type){
    case GET_USER + '_PENDING':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default userReducer