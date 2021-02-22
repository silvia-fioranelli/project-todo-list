import { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../selectors';
import Filter from './Filter';
import Form from './Form';
import TodoList from './TodoList';

export const App = (props) => {
  const { todos } = props;

  return (
    <div className="container">
      <h1>TODO List</h1>
      <Form />
      <Filter />
      <TodoList items={todos} />
    </div>
  );
};

export const mapState = (state) => ({
  todos: getTodos(state),
});

export default connect(mapState)(App);
