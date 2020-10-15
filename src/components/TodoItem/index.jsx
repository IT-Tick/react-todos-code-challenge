import React, { useState } from "react";
import { connect } from "react-redux";
import { todosAction } from "../../redux/actions";

import styles from "./styles.module.sass";

function TodoItem({ todoText, todoId, deleteTodo, editTodo }) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [todo, setTodo] = useState(todoText);
  const exitEditMode = (e) => {
    if (e.keyCode === 27) {
      setTodo(todoText);
      setIsEditMode(true);
    }
    if (e.keyCode === 13) {
      editTodo(todoId, todo);
      setIsEditMode(true);
    }
  };
  return (
    <div className={styles.card}>
      <input
        type="text"
        className={isEditMode ? styles.title__disabled : styles.title__enabled}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={exitEditMode}
        disabled={isEditMode}
      ></input>
      <button className={styles.completeBtn}>Complete</button>
      <button className={styles.deleteBtn} onClick={() => setIsEditMode(false)}>
        Edit
      </button>
      <button className={styles.deleteBtn} onClick={() => deleteTodo(todoId)}>
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(todosAction.deleteTodo(id)),
  editTodo: (id, todo) => dispatch(todosAction.editTodo(id, todo)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
