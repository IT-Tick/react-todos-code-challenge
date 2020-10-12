/* eslint-disable linebreak-style */
import React from 'react';

import {useSelector} from 'react-redux';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import TodoItem from '../TodoItem';

function TodosHeader() {
  const {all, remaining, completed} = useSelector((state) => {
    const todos = Object.values(state.todos.list);
    return {
      all: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      remaining: todos.filter((todo) => !todo.completed).length,
    };
  });
  return (
    <Paper className='flex-between p-05 my-1'>
      <Chip
        color='default'
        variant="outlined"
        avatar={<Avatar>{all}</Avatar>}
        label='All'
      />
      <Chip
        color='secondary'
        variant="outlined"
        avatar={<Avatar>{remaining}</Avatar>}
        label='remaining'
      />
      <Chip
        color='primary'
        variant="outlined"
        avatar={<Avatar>{completed}</Avatar>}
        label='completed'
      />
    </Paper>
  );
}

function TodoList() {
  const todos = useSelector((state) => Object.values(state.todos.list));
  return (
    <>
      <TodosHeader />
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </>
  );
}

export default TodoList;
