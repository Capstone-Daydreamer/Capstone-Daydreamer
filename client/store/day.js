import axios from 'axios'
import history from '../history'
/**
* ACTION TYPES
*/
const GET_DAY = 'GET_DAY'
const NEW_DAY = 'NEW_DAY'
const UPDATE_DAY = 'UPDATE_DAY'

/**
* ACTION CREATORS
*/
const getDay = day => ({ type: GET_DAY, day })
const newDay = day => ({type: NEW_DAY, day})
const updateDay = day => ({type: UPDATE_DAY, day})

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
  const currentDay = { name: event.name.value, 
                start: event.startDate.value, 
                end: event.endDate.value,
                duration: event.Duration.value,
                location: event.location.value
              }
  return axios.post(`/api/days`, {currentDay, cats})
    .then(res => res.data)
    .then((day) => {
      axios.post(`/api/days/groups`, {dayId: day.id, groupId})
      dispatch(newDay(day))
      history.push(`/user-groups/${groupId}/${day.id}`)
    })
    .catch(e => console.log(e))
}

export const putDay = (date, dayId, groupId) => {
  return function (dispatch) {
      axios.put(`/api/days/${dayId}`, { date })
          .then(() => {
              axios.get(`/api/days/${dayId}`)
                  .then(res => res.data)
                  .then((day) => {
                      //const action = updateStudent({ id: studentid, name: newStudent, email: email, campusId: campusid });
                      const action = updateDay(day);
                      dispatch(action);
                      history.push(`/user-groups/${groupId}`);
                  })
                  .catch(e => console.log(e))
          })
          .catch(e => console.log(e))
  }
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
  case UPDATE_DAY:
     return action.day
   default:
     return days
 }
}

