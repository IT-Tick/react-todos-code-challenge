import React from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Store from '../Redux/store'
function IndexPage() {
  return (
    <main>
      <Store>
        <Header />
        <ContentContainer>
          <TodoForm />
          <TodoList />
        </ContentContainer>
      </Store>
    </main>
  );
}

export default IndexPage;
