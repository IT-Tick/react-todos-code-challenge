src / components / TodoForm / index.jsx;

import React, { useState } from "react";
import { connect } from "react-redux";
import { todosAction } from "../../redux/actions";

import styles from "./styles.module.sass";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const saveTodo = (e) => {
    if (e.keyCode === 13 && todo !== "") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="What do you have to do? (Press Enter to add todo)"
        className={styles.input}
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={saveTodo}
        value={todo}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(todosAction.addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
