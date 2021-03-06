/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Footer} from './footer'
export { default as SingleGroup } from './single-group'
export { default as UserGroups } from './user-groups'
export { default as UserProfile } from './user-profile'
export { default as NewDay } from './newDay'
export { default as SingleDay } from './singleDay'
export { default as SingleDaySchedule } from './singleDaySchedule'
export { default as Landing } from './landing'
export { default as NewGroup } from './newGroup'
export { default as Events } from './events'
export {Login, Signup} from './auth-form'
