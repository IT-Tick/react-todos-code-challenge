/* eslint-disable linebreak-style */
import React from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoForm />
        <TodoList />
      </main>
    </>
  );
}

export default App;
