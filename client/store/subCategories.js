import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SUBCATEGORIES = 'GET_SUBCATEGORIES'

/**
 * INITIAL STATE
 */
const defaultSubCategories = []

/**
 * ACTION CREATORS
 */
const getSubCategories = subCategories => ({ type: GET_SUBCATEGORIES, subCategories })


/**
 * THUNK CREATORS
 */
export const fetchSubCategories = () =>
  dispatch =>
    axios.get('/api/subCategories')
      .then(res =>
        dispatch(getSubCategories(res.data)))
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultSubCategories, action) {
  switch (action.type) {
    case GET_SUBCATEGORIES:
      return action.subCategories
    default:
      return state
  }
}