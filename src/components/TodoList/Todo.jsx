import { shape, string } from 'prop-types';

const Todo = (props) => {
  const { item } = props;
  return <div>{item.content}</div>;
};

Todo.propTypes = {
  item: shape({
    content: string.isRequired,
  }),
};

export default Todo;
