import * as types from '../types';

const initialState = {
    todosData: [],
    isTodosFetched: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_TODOS:
            return { ...state, todosData: action.payload, isTodosFetched: true };

        case types.ADD_TODO:
            return { ...state, todosData: state.todosData.concat({ id: state.todosData.length, title: action.payload }) }

        case types.EDIT_TODO:
            const updatedTodos = state.todosData.map(todo => {
                if (todo.id === action.payload.todoId) return { ...todo, title: action.payload.todo }
                return todo
            })
            return { ...state, todosData: updatedTodos }

        case types.DELETE_TODO:
            const newTodos = state.todosData.filter(todo => todo.id !== action.payload)
            return { ...state, todosData: newTodos }

        default:
            return state;
    }
}