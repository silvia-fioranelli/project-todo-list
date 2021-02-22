import { shallow } from 'enzyme';
import Todo from '../../../components/TodoList/Todo';

describe('Todo', () => {
  const defaultProps = {
    deleteTodo: jest.fn(),
    item: { content: 'mock content', id: 'mock id' },
    toggleTodo: jest.fn(),
  };

  const render = (props) => shallow(<Todo {...defaultProps} {...props} />);

  describe('rendering', () => {
    test('should render item', () => {
      const wrapper = render();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    test('should toggle todo', () => {
      const props = {
        toggleTodo: jest.fn(),
      };
      const wrapper = render(props);
      wrapper.find('button').at(1).simulate('click');
      expect(props.toggleTodo).toBeCalledTimes(1);
      expect(props.toggleTodo).toBeCalledWith(defaultProps.item.id);
    });

    test('should delete todo', () => {
      const props = {
        deleteTodo: jest.fn(),
      };
      const wrapper = render(props);
      wrapper.find('button').at(0).simulate('click');
      expect(props.deleteTodo).toBeCalledTimes(1);
      expect(props.deleteTodo).toBeCalledWith(defaultProps.item.id);
    });
  });
});
