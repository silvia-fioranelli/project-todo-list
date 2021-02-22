import { arrayOf, func, shape } from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  const { items, deleteTodo, toggleTodo } = props;

  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={`todo-${item.id}`}>
            <Todo item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          </li>
        ))}
      </ol>
    </div>
  );
};

TodoList.propTypes = {
  deleteTodo: func.isRequired,
  items: arrayOf(shape({})).isRequired,
  toggleTodo: func.isRequired,
};

export default TodoList;
