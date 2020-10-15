import React from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem";

function TodoList({ todos }) {
  const renderTodos = todos.map((todo) => (
    <TodoItem todoData={todo} key={todo.id} />
  ));
  return <div>{renderTodos}</div>;
}
const mapStateToProps = (state) => ({
  todos: state.todos.todosData,
});

export default connect(mapStateToProps)(TodoList);
