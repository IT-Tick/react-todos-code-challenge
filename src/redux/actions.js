export const addTodo = todo => ({
    type: "ADD_TODO",
    payload: todo
})

export const removeTodo = id => ({
    type: "REMOVE_TODO",
    payload: id
})

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    payload: id
})