'use strict';
import axios from 'axios'

/**
 * ACTION TYPES
 */
const POST_YELP = 'POST_YELP'

/**
 * ACTION CREATORS
 */
const postYelp = option => ({ type: POST_YELP, option })

/**
 * THUNK CREATORS
 */
export const yelpSearch = (term, location, categories) => dispatch => {
  axios.post('/api/yelp', {term, location, categories})
    .then(res => dispatch(postYelp(res.data)))
    .catch(e => console.error(e))
}

/**
 * REDUCER
 */
export default function (yelprecommend = [], action){
  switch (action.type){
    case POST_YELP:
      return [...yelprecommend, action.option]
    default:
      return yelprecommend
  }
}
