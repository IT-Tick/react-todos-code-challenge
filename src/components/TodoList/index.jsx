import React from 'react';

import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

function TodoList({ todos }) {
  return (
    <div>
      {
        todos?.map(todo => <TodoItem key={todo.id} {...todo} />)
      }
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array
};

const mapStateToProps = state => ({
  todos: state
})

export default connect(mapStateToProps)(TodoList);
