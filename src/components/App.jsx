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

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  toggleTodo = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    this.setState({ todos });
  };

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
        <TodoList
          items={todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
