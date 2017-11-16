'use strict';
import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_YELP = 'GET_YELP'

/**
 * ACTION CREATORS
 */
const getYelp = option => ({ type: GET_YELP, option })

/**
 * THUNK CREATORS
 */
export const yelpSearch = (term, location, categories) => dispatch => {
  axios.post('/api/yelp', {term, location, categories})
    .then(res => dispatch(getYelp(res.data)))
    .catch(e => console.error(e))
}

/**
 * REDUCER
 */
export default function (yelprecommend = [], action){
  switch (action.type){
    case GET_YELP:
      return action.option
    default:
      return yelprecommend
  }
}
