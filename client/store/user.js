import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const updateUser = (user) => ({ type: UPDATE_USER, user })

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method, name) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password, name })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      })
      .catch(error =>
        dispatch(getUser({ error })))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

export const fb = (email, name, fbId) => dispatch => {
  axios.post(`/auth/fb`, { email, name, fbId })
    .then(res => {
      dispatch(getUser(res.data))
      history.push('/home')
    })
    .catch(error =>
      dispatch(getUser({ error })))
}

export const addInterest = (userId, subCategoryId) => dispatch => {
  return axios.post('/api/users/add', { userId, subCategoryId })
    .then(res => res.data.userId)
    .then((userId) => {
      axios.get(`/api/users/${userId}`)
        .then(res => res.data)
        .then((user) => {
          const action = updateUser(user);
          dispatch(action);
        })
        .catch();
    })
    .catch()
}

export const destroyInterest = (userId, subCategoryId) => dispatch => {
  return axios.delete(`/api/users/remove/${userId}/${subCategoryId}`)
    .then(() => {
      axios.get(`/api/users/${userId}`)
        .then(res => res.data)
        .then((user) => {
          const action = updateUser(user);
          dispatch(action);
        })
        .catch();
    })
    .catch()
}

export const postNewGroup = (name, leader, users) => dispatch => {
  axios.post('api/groups/', { name, leader: leader.id })
    .then(res => res.data)
    .then(group => {
      let userArr = users.map(user => {
        return { userId: user, groupId: group.id }
      })
      userArr.push({ userId: leader.id, groupId: group.id })
      axios.post('api/groups/new', { userArr })
        .then(() => {
          axios.get(`/api/users/${leader.id}`)
            .then(res => res.data)
            .then(user => {
              dispatch(updateUser(user))
              history.push(`/user-groups/${group.id}`)
            })
        })
        .catch()
    })
}


/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}
