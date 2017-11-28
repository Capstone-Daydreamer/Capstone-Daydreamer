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

export const addDay = (event, groupId, cats) => dispatch => {
  console.log('looking for event', event)
  const currentDay = { name: event.name.value, 
                start: event.startDate.value, 
                end: event.endDate.value,
                duration: event.Duration.value
              }
  return axios.post(`/api/days`, {currentDay, cats})
    .then(res => res.data)
    .then((day) => {
      axios.post(`/api/days/groups`, {dayId: day.id, groupId})
      dispatch(newDay(day))
      history.push(`/user-groups/${groupId}/${day.id}`)
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
