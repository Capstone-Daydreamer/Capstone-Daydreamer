'use strict';
import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_EVENTFUL = 'GET_EVENTFUL'
const POST_EVENTFUL = 'POST_EVENTFUL'

/**
 * ACTION CREATORS
 */
const getEventful = option => ({ type: GET_EVENTFUL, option })
const postEventful = option => ({ type: POST_EVENTFUL, option })

/**
 * THUNK CREATORS
 */
export const eventfulSearch = () => dispatch => {
  axios.get('/api/eventful/categories')
    .then(res => dispatch(getEventful(res.data)))
    .catch(e => console.error(e))
}

export const eventfulPost = (category, location, keywords, date) => dispatch => {
  axios.post('/api/eventful', {category, location, keywords, date})
    .then(res => dispatch(postEventful(res.data)))
    .catch(e => console.error(e))
}

/**
 * REDUCER
 */
export default function (eventfulrecommend = [], action){
  switch (action.type){
    case GET_EVENTFUL:
      return action.option
    case POST_EVENTFUL:
      return [...eventfulrecommend, action.option]
    default:
      return eventfulrecommend
  }
}
