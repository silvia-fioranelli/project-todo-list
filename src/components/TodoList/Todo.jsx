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
        className="btn btn-sm mt-1 mr-1"
        onClick={() => deleteTodo(item.id)}
      >
        <i className="fa fa-trash" />
      </button>
      <button
        className="btn btn-sm mt-1 mr-3"
        onClick={() => toggleTodo(item.id)}
      >
        <i className={`fa ${item.completed ? 'fa-undo' : 'fa-check-circle'}`} />
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
