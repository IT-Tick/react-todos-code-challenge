import React from 'react';

import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

function TodoList({ completedTodos, notCompletedTodos }) {
  return (
    <div>
      {
          notCompletedTodos.length > 0 && <>
          <h3>Todos</h3>
          {notCompletedTodos?.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </>
      }
      {
        completedTodos.length > 0 && <>
          <h3>Completed Todos</h3>
          {completedTodos?.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </>
      }
    </div>
  );
}

TodoList.propTypes = {
  completedTodos: PropTypes.array,
  notCompletedTodos: PropTypes.array
};

const mapStateToProps = state => {
  console.log("state", state)
  return {
    notCompletedTodos: state.filter(todo => !todo.completed),
    completedTodos: state.filter(todo => todo.completed === true)
  }
}

export default connect(mapStateToProps)(TodoList);
