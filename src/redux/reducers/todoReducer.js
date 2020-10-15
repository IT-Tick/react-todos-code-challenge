import * as types from '../types';

const initialState = {
    todosData: [],
};

const saveToLocalStorage = function (state) {
    localStorage.setItem('todos', state);
}

export default function (state = initialState, action) {
    let newState;
    switch (action.type) {
        case types.ADD_TODO:
            newState = { ...state, todosData: state.todosData.concat({ id: state.todosData.length, title: action.payload, isCompleted: false }) }
            saveToLocalStorage(newState)
            return newState

        case types.EDIT_TODO:
            const updatedTodos = state.todosData.map(todo => {
                if (todo.id === action.payload.todoId) return { ...todo, title: action.payload.todo }
                return todo
            })
            newState = { ...state, todosData: updatedTodos }
            saveToLocalStorage(newState)
            return newState

        case types.DELETE_TODO:
            const newTodos = state.todosData.filter(todo => todo.id !== action.payload)
            newState = { ...state, todosData: newTodos }
            saveToLocalStorage(newState)
            return newState

        case types.SET_TODO_COMPLETE:
            const updatedTodosComplete = state.todosData.map(todo => {
                if (todo.id === action.payload.todoId) return { ...todo, isCompleted: action.payload.isCompleted }
                return todo
            })

            newState = { ...state, todosData: updatedTodosComplete }
            saveToLocalStorage(newState)
            return newState

        default:
            return state;
    }
}