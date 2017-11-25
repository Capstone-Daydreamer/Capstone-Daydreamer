import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ACTIVITIES = 'GET_ACTIVITIES'

/**
 * ACTION CREATORS
 */
const getActivities = (activities) => ({ type: GET_ACTIVITIES, activities })


/**
 * THUNK CREATORS
 */
export const fetchActivities = id => dispatch => {
  axios.get(`/api/activities/${id}`)
    .then(res =>
      dispatch(getActivities(res.data)))
    .catch(err => console.log(err))
}


/**
 * REDUCER
 */
export default function (activities = [], action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return action.activities
    default:
      return activities
  }
}
