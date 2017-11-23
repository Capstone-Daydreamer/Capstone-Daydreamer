import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_GROUP = 'GET_GROUP'
const NEW_GROUP = 'NEW_GROUP'

/**
 * ACTION CREATORS
 */
const getGroup = group => ({ type: GET_GROUP, group })
const newGroup = group => ({type: NEW_GROUP, group})

/**
 * THUNK CREATORS
 */
export const fetchGroup = id => dispatch => {
  axios.get(`/api/groups/${id}`)
    .then(res =>
      dispatch(getGroup(res.data)))
    .catch(err => console.log(err))
}

export const fetchGroupInt = id => dispatch => {
  axios.get(`/api/groups/recommendations/${id}`)
    .catch(err => console.log(err))
}
/**
 * REDUCER
 */
export default function (groups = [], action) {
  switch (action.type) {
    case GET_GROUP:
      return action.group
    case NEW_GROUP:
      return groups.concat(action.group)
    default:
      return groups
  }
}
