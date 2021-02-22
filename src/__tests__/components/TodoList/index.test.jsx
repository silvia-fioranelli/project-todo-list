import { shallow } from 'enzyme';
import TodoList from '../../../components/TodoList';

describe('TodoList', () => {
  describe('rendering', () => {
    test('should render items', () => {
      const props = {
        deleteTodo: jest.fn(),
        items: [
          { content: 'mock 1', id: 'id 1' },
          { content: 'mock 2', id: 'id 2' }
        ],
        toggleTodo: jest.fn(),
      };
      const wrapper = shallow(<TodoList {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
