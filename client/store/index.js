import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import categories from './categories'
import subCategories from './subCategories'
import yelprecommend from './yelp'

const reducer = combineReducers({user, categories, subCategories, yelprecommend})

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
