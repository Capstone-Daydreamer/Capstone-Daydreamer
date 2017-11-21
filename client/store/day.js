import axios from 'axios'
import history from '../history'
/**
* ACTION TYPES
*/
const GET_DAY = 'GET_DAY'
const NEW_DAY = 'NEW_DAY'

/**
* ACTION CREATORS
*/
const getDay = day => ({ type: GET_DAY, day })
const newDay = day => ({type: NEW_DAY, day})

/**
* THUNK CREATORS
*/
export const fetchDay = id => dispatch => {
 axios.get(`/api/days/${id}`)
   .then(res =>
     dispatch(getDay(res.data)))
   .catch(err => console.log(err))
}

export const addDay = (name, groupId, cats) => dispatch => {
  return axios.post(`/api/days`, {name, cats})
    .then(res => res.data)
    .then((day) => {
      axios.post(`api/days/groups`, {dayId: day.id, groupId})
      dispatch(newDay(day))
      history.push(`/user-groups/group/${groupId}`)
    })
    .catch()
}
/**
* REDUCER
*/
export default function (days = [], action) {
 switch (action.type) {
   case GET_DAY:
     return action.day
  case NEW_DAY:
     return [...days, action.day]
   default:
     return days
 }
}
