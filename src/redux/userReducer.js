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
      payloadd: user
    }
}

function userReducer(state = initialState, action){
  return state
}

export default userReducer