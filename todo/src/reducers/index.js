import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// combineReducers allows you to create a single reducing function from the split up functions which you can then pass
// into createStore

export default combineReducers({
    todos,
    visibilityFilter
})