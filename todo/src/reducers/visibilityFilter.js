import { VisibilityFilters } from '../actions'

// this sets the state to VisibilityFilters.SHOW_ALL which comes from the actions section.
const visibilityFilters = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    };
}

export default visibilityFilters;