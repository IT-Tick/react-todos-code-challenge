import React from "react";
import { connect } from "react-redux";
import { todosAction } from "../../redux/actions";

import styles from "./styles.module.sass";

function TodoItem({ todoText, todoId, deleteTodo }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{todoText}</h2>
      <button className={styles.completeBtn}>Complete</button>
      <button className={styles.deleteBtn} onClick={() => deleteTodo(todoId)}>
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(todosAction.deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
