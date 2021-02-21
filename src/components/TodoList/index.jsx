import { arrayOf, shape } from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  const { items } = props;

  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={`todo-${item.id}`}>
            <Todo item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
};

TodoList.propTypes = {
  items: arrayOf(shape({})).isRequired,
};

export default TodoList;
