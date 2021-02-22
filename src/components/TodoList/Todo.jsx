import { func, shape, string } from 'prop-types';

const Todo = (props) => {
  const { item, toggleTodo, deleteTodo } = props;

  return (
    <div>
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
      <button onClick={() => toggleTodo(item.id)}>Toggle</button>
      <p>{item.content}</p>
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

export default Todo;
