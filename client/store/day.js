import axios from 'axios'
/**
* ACTION TYPES
*/
const GET_DAY = 'GET_DAY'

/**
* ACTION CREATORS
*/
const getDay = day => ({ type: GET_DAY, day })

/**
* THUNK CREATORS
*/
export const fetchDay = id => dispatch => {
 axios.get(`/api/days/${id}`)
   .then(res =>
     dispatch(getDay(res.data)))
   .catch(err => console.log(err))
}
/**
* REDUCER
*/
export default function (days = [], action) {
 switch (action.type) {
   case GET_DAY:
     return action.day
   default:
     return days
 }
}