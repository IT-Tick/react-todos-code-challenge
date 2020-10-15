import React, { useEffect } from "react";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from "./styles.module.sass";
import { connect } from "react-redux";
import { todosAction } from "../redux/actions";
function IndexPage({ fetchTodos }) {
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <main className={styles}>
      <Header />
      <ContentContainer>
        <TodoForm />
        <TodoList />
      </ContentContainer>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(todosAction.fetchTodos()),
});

export default connect(null, mapDispatchToProps)(IndexPage);
