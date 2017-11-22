import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import categories from './categories'
import subCategories from './subCategories'
import yelprecommend from './yelp'
import groups from './group'
import days from './day'
import users from './users'

const reducer = combineReducers({user, categories, subCategories, yelprecommend, groups, days, users})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './categories'
export * from './subCategories'
export * from './yelp'
export * from './group'
export * from './day'
export * from './users'

