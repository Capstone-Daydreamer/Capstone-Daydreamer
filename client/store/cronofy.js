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
export const fetchAvailability = groupId => dispatch => {
  axios.get(`/api/cronofy/availability/${groupId}`)
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
