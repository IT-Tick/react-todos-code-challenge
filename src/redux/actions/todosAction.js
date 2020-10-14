import * as types from '../types';

function fetchTodos() {
    return {
        type: types.FETCH_TODOS,
    };
}

function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        payload: todo,
    };
}

function editTodo(todoId, todo) {
    return {
        type: types.EDIT_TODO,
        payload: {
            todoId,
            todo,
        },
    };
}

function deleteTodo(todoId) {
    return {
        type: types.DELETE_TODO,
        payload: todoId,
    };
}

export default {
    fetchTodos,
    addTodo,
    editTodo,
    deleteTodo,
};
