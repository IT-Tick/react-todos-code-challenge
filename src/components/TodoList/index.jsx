import React from 'react';
import TodoItem from '../TodoItem';

import { connect } from "react-redux";

function TodoList({ todos }) {
  return (
    <div>
      {
        todos?.map(todo => <TodoItem key={todo.id} {...todo} />)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state
})

export default connect(mapStateToProps)(TodoList);
