import { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';

// temp global ID
let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  handleOnSubmit = (content) => {
    const todo = {
      content,
      id: String(++id),
    };
    const todos = this.state.todos.concat(todo);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <h1>TODO List</h1>
        <Form onSubmit={this.handleOnSubmit} />
        <TodoList items={todos} />
      </div>
    );
  }
}

export default App;
