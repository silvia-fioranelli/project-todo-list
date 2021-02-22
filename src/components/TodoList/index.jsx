import { arrayOf, shape } from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
        <Todo key={`todo-${item.id}`} item={item} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  items: arrayOf(shape({})).isRequired,
};

export default TodoList;
