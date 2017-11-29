import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ACTIVITIES = 'GET_ACTIVITIES'
const POST_SELECTED_ACTIVITES = 'POST_SELECTED_ACTIVITES'
/**
 * ACTION CREATORS
 */
const getActivities = (activities) => ({ type: GET_ACTIVITIES, activities })
const postActivities = activities => ({type: POST_SELECTED_ACTIVITES, activities})

/**
 * THUNK CREATORS
 */
export const fetchActivities = id => dispatch => {
  axios.get(`/api/activities/${id}`)
    .then(res =>
      dispatch(getActivities(res.data)))
    .catch(err => console.log(err))
}

export const postSelectedYelpActivities = (name, location, dayId, [ratPri], image, category) => dispatch => {
  axios.post('/api/activities', {name, location, rating: ratPri[0], price: ratPri[1], image, category})
  .then(res => res.data)
  .then(activity =>{
      axios.post('/api/activities/days', {dayId, activityId: activity.id})
      dispatch(postActivities(activity))
    })
    .catch(err => console.log(err))
}

export const postSelectedEventfulActivities = (name, location, dayId, venueName, time) => dispatch => {
  axios.post('/api/activities', {name, location, venueName, time})
  .then(res => res.data)
  .then(activity =>{
      axios.post('/api/activities/days', {dayId, activityId: activity.id})
      dispatch(postActivities(activity))
    })
    .catch(err => console.log(err))
}


/**
 * REDUCER
 */
export default function (activities = [], action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return action.activities
    case POST_SELECTED_ACTIVITES:
      return action.activities
    default:
      return activities
  }
}
