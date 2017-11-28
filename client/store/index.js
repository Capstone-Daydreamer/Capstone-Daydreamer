import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import categories from './categories'
import subCategories from './subCategories'
import yelprecommend from './yelp'
import groups from './group'
import days from './day'
import recommendations from './recommendation'
import users from './users'
import activity from './activity'
import eventfulrecommend from './eventful'
import cronofy from './cronofy'
import userSubCategories from './userSubcats'

const reducer = combineReducers({ user,
                                  days,
                                  users,
                                  groups,
                                  cronofy,
                                  activity,
                                  categories,
                                  subCategories,
                                  yelprecommend,
                                  recommendations,
                                  eventfulrecommend,
                                  userSubCategories})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store
export * from './cronofy'
export * from './user'
export * from './categories'
export * from './subCategories'
export * from './yelp'
export * from './group'
export * from './day'
export * from './recommendation'
export * from './users'
export * from './activity'
export * from './userSubcats'
export * from './eventful'
