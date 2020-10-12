/* eslint-disable linebreak-style */
import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: {},
  },
  reducers: {
    addTodo: (state, {payload}) => {
      state.list[payload.id] = payload;
    },
    updateTodo: (state, {payload}) => {
      state.list[payload.id] = payload;
    },
    removeTodo: (state, {payload}) => {
      delete state.list[payload.id];
    },
    toggleCompleted: (state, {payload}) => {
      state.list[payload.id].completed = !state.list[payload.id].completed;
    },
  },
});

export const actions = {...todosSlice.actions};
export default todosSlice.reducer;
