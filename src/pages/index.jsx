import React from "react";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from "./styles.module.sass";
function IndexPage() {
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

export default IndexPage;
