import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_LIKES_SUBCATEGORIES = 'GET_USER_LIKES_SUBCATEGORIES'
const GET_USER_DISLIKES_SUBCATEGORIES = 'GET_USER_DISLIKES_SUBCATEGORIES'
const UPDATE_USER_LIKES = 'UPDATE_USER_LIKES'
const UPDATE_USER_DISLIKES = 'UPDATE_USER_DISLIKES'
const CREATE_USER_LIKES = 'CREATE_USER_LIKES'
const CREATE_USER_DISLIKES = 'CREATE_USER_DISLIKES'

/**
 * INITIAL STATE
 */
const userSubCategories = {
  like: [],
  dislike: []
}

/**
 * ACTION CREATORS
 */
const getUserLikesSubCategories = likes => ({ type: GET_USER_LIKES_SUBCATEGORIES, likes })
const getUserDislikesSubCategories = dislikes => ({ type: GET_USER_DISLIKES_SUBCATEGORIES, dislikes })
const updateUserLikes = likes => ({ type: UPDATE_USER_LIKES, likes })
const updateUserDislikes = dislikes => ({ type: UPDATE_USER_DISLIKES, dislikes })
const createUserLikesSubCategories = likes => ({ type: CREATE_USER_LIKES, likes })
const createUserDislikesSubCategories = dislikes => ({ type: CREATE_USER_DISLIKES, dislikes })

/**
 * THUNK CREATORS
 */
export const fetchUserSubCategories = id => dispatch => {
  axios.get(`/api/subCategories/likes/${id}`)
    .then(res => dispatch(getUserLikesSubCategories(res.data)))
    .catch(e => console.log(e))
  axios.get(`/api/subCategories/dislikes/${id}`)
    .then(res => dispatch(getUserDislikesSubCategories(res.data)))
    .catch(e => console.log(e))
}


export const addInterest = (userId, subCategoryId) => dispatch => {
  return axios.post('/api/users/add/love', { userId, subCategoryId, love: true })
    .then(res => dispatch(createUserLikesSubCategories(res.data)))
    .catch(e => console.log(e))
}

export const updateInterest = (userId, subCategoryId) => dispatch => {
  return axios.put('/api/users/love', { userId, subCategoryId, love: true, dislike: false })
    .then(res => {
      dispatch(updateUserLikes(res.data))})
    .catch(e => console.log(e))
}

export const updateDisinterest = (userId, subCategoryId) => dispatch => {
  return axios.put('/api/users/hate', { userId, subCategoryId, love: false, dislike: true })
    .then(res => dispatch(updateUserDislikes(res.data)))
    .catch(e => console.log(e))
}

export const addDisinterest = (userId, subCategoryId) => dispatch => {
  return axios.post('/api/users/add/dislike', { userId, subCategoryId, dislike: true })
    .then(res => dispatch(createUserDislikesSubCategories(res.data)))
    .catch(e => console.log(e))
}
/**
* REDUCER
*/
export default function (state = userSubCategories, action) {
  switch (action.type) {
    case GET_USER_LIKES_SUBCATEGORIES:
      return Object.assign({}, state, { like: action.likes })
    case GET_USER_DISLIKES_SUBCATEGORIES:
      return Object.assign({}, state, { dislike: action.dislikes })
    case UPDATE_USER_LIKES:
      return {like: [...state.like, action.likes], dislike: state.dislike.filter(item => {
        return item.subCategoryId !== action.likes.subCategoryId
      })}
    case UPDATE_USER_DISLIKES:
    return {dislike: [...state.dislike, action.dislikes], like: state.like.filter(item => {
      return item.subCategoryId !== action.dislikes.subCategoryId
    })}
    case CREATE_USER_LIKES:
      return {like: [...state.like, action.likes], dislike: state.dislike}
    case CREATE_USER_DISLIKES:
      return {like: state.like, dislike:[...state.dislike, action.dislikes]}
    default:
      return state
  }
}
