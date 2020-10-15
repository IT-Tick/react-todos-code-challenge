import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Button, ButtonGroup, Input } from "reactstrap";
import { todosAction } from "../../redux/actions";

import styles from "./styles.module.sass";

function TodoItem({ todoData, deleteTodo, editTodo, setTodoComplete }) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [todo, setTodo] = useState(todoData.title);
  const exitEditMode = (e) => {
    if (e.keyCode === 27) {
      setTodo(todoData.title);
      setIsEditMode(true);
    }
    if (e.keyCode === 13) {
      editTodo(todoData.id, todo);
      setIsEditMode(true);
    }
  };

  const editTodoData = () => {
    setIsEditMode(!isEditMode);
    editTodo(todoData.id, todo);
  };

  return (
    <Card
      body
      inverse
      style={{
        backgroundColor: "#333",
        borderColor: "#333",
        marginBottom: "25px",
      }}
    >
      <Input
        type="text"
        className={isEditMode ? styles.title__disabled : styles.title__enabled}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={exitEditMode}
        disabled={isEditMode}
      />
      <ButtonGroup>
        <Button
          color={todoData.isCompleted ? "success" : "warning"}
          onClick={() => setTodoComplete(todoData.id, !todoData.isCompleted)}
        >
          {todoData.isCompleted ? "Completed" : "UnComplete"}
        </Button>
        <Button color="info" onClick={editTodoData}>
          Edit
        </Button>
        <Button color="danger" onClick={() => deleteTodo(todoData.id)}>
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(todosAction.deleteTodo(id)),
  editTodo: (id, todo) => dispatch(todosAction.editTodo(id, todo)),
  setTodoComplete: (id, isCompleted) =>
    dispatch(todosAction.setTodoComplete(id, isCompleted)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
