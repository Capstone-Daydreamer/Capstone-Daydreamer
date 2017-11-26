import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_GROUP_RECOMMENDATIONS = 'GET_GROUP_RECOMMENDATIONS'

/**
 * ACTION CREATORS
 */
const getGroupRecs = recommendation => ({type: GET_GROUP_RECOMMENDATIONS, recommendation})

/**
 * THUNK CREATORS
 */
export const fetchGroupInt = id => dispatch => {
  axios.get(`/api/groups/recommendations/${id}`)
    .then(res => dispatch(getGroupRecs(res.data)))
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (recommendations = {}, action) {
  switch (action.type) {
    case GET_GROUP_RECOMMENDATIONS:
      return action.recommendation
    default:
      return recommendations
  }
}