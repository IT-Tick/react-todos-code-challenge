import * as types from '../types';

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

function setTodoComplete(todoId, isCompleted) {
    return {
        type: types.SET_TODO_COMPLETE,
        payload: {
            todoId,
            isCompleted,
        },
    };
}

export default {
    addTodo,
    editTodo,
    deleteTodo,
    setTodoComplete,
};
