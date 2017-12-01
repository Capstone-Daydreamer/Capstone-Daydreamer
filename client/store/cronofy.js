import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_AVAILABILITY = 'GET_AVAILABILITY'

/**
 * ACTION CREATORS
 */
const getAvailability = cronofyInfo => ({ type: GET_AVAILABILITY, cronofyInfo })

/**
 * THUNK CREATORS
 */
export const fetchAvailability = (event, groupId) => dispatch => {
<<<<<<< HEAD
  axios.get(`/api/cronofy/availability/${groupId}`)
||||||| merged common ancestors
  axios.post(`/api/cronofy/availability/${groupId}`, event)
=======
  axios.get(`/api/cronofy/availability/${groupId}`, event)
>>>>>>> 0c4ea3006857242c1ebb64d19c2e31d98ff9259e
    .then(res =>
      dispatch(getAvailability(res.data)))
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (cronofyInfo = [], action) {
  switch (action.type) {
    case GET_AVAILABILITY:
      return action.cronofyInfo
    default:
      return cronofyInfo
  }
}
