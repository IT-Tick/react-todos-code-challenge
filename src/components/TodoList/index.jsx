import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

function TodoList({ list }) {
  const redneredList = list.map((item) => { return <TodoItem item={item} key={item.id} /> });

  if (redneredList.length !== 0) {
    return <div>{redneredList} </div>
  } else {
    return <h1>Your List is Empty</h1>
  }

}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(TodoList);
