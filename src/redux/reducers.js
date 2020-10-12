import { v4 as uuid } from "uuid"

const InitalTodoState = []

export const TodoReducer = (state = InitalTodoState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: uuid(), todo: action.payload, completed: false }]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload)
        case "TOGGLE_TODO":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}
