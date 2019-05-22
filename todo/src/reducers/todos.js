// defining todos reducer switch
const todos = (state = [], action) => {
    // start switch with cases
    switch (action.type) {
        // case ADD_TODO has id and text off of action. The default status of the item is set to false.
        case 'ADD_TODO':
            return [
                // using spread state to make copy and set id/text to action.
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        // case TOGGLE_TODO maps over the state, if the one you clicked matches the one in the spread state, then it sets
        // completed to true.
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todos