import { Component } from 'react';
import Filter from './Filter';
import Form from './Form';
import TodoList from './TodoList';

// temp global ID
let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterType: '',
    };
  }

  handleOnSubmit = (content) => {
    const todo = {
      content,
      id: String(++id),
      completed: false,
    };
    const todos = this.state.todos.concat(todo);
    this.setState({ todos });
  };

  setCategory = (filterType) => {
    this.setState({
      filterType,
    });
  };

  getTodos = () => {
    const { todos, filterType } = this.state;
    switch (filterType) {
      case 'pending': {
        return todos.filter((todo) => !todo.completed);
      }

      case 'completed': {
        return todos.filter((todo) => todo.completed);
      }

      default: {
        return todos;
      }
    }
  };

  render() {
    const todos = this.getTodos();

    return (
      <div className="container">
        <h1>TODO List</h1>
        <Form onSubmit={this.handleOnSubmit} />
        <Filter setCategory={this.setCategory} />
        <TodoList items={todos} />
      </div>
    );
  }
}

export default App;
