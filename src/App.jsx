/* eslint-disable linebreak-style */
import React from 'react';

import Container from '@material-ui/core/Container';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='md'>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
