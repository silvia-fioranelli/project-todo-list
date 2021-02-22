import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteTodo as deleteTodoAlias,
  toggleTodo as toggleTodoAlias,
} from '../../actions';

export const Todo = (props) => {
  const { item, toggleTodo, deleteTodo } = props;

  return (
    <div>
      <button
        className="btn btn-danger btn-sm mt-1 mr-1"
        onClick={() => deleteTodo(item.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-success btn-sm mt-1 mr-3"
        onClick={() => toggleTodo(item.id)}
      >
        Toggle
      </button>
      <span
        style={{
          textDecoration: item.completed ? 'line-through' : '',
        }}
      >
        {item.content}
      </span>
    </div>
  );
};

Todo.propTypes = {
  deleteTodo: func.isRequired,
  toggleTodo: func.isRequired,
  item: shape({
    content: string.isRequired,
  }),
};

export const mapDispatch = {
  deleteTodo: deleteTodoAlias,
  toggleTodo: toggleTodoAlias,
};

export default connect(null, mapDispatch)(Todo);
