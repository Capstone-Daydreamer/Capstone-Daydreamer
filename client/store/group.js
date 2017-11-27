import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_GROUP = 'GET_GROUP'
const NEW_GROUP = 'NEW_GROUP'
const UPDATE_GROUP = 'UPDATE_GROUP'

/**
 * ACTION CREATORS
 */
const getGroup = group => ({ type: GET_GROUP, group })
const newGroup = group => ({type: NEW_GROUP, group})
const updateGroup = group => ({type: UPDATE_GROUP, group})

/**
 * THUNK CREATORS
 */
export const fetchGroup = id => dispatch => {
  axios.get(`/api/groups/${id}`)
    .then(res =>
      dispatch(getGroup(res.data)))
    .catch(err => console.log(err))
}

export const removeUser = (group, userId) => dispatch => {
  console.log('made it to thunk');
  axios.delete(`/api/groups/${group.id}/${userId}`)
    .then(() =>
      axios.get(`/api/groups/${group.id}`))
      .then(res =>
        dispatch(updateGroup(res.data)))
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (group = {}, action) {
  console.log('looking for groups', group)
  switch (action.type) {
    case GET_GROUP:
      return action.group
    case UPDATE_GROUP:
      return action.group
    default:
      return group
  }
}
