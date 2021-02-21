import { shallow } from 'enzyme';
import Todo from '../../../components/TodoList/Todo';

describe('Todo', () => {
  describe('rendering', () => {
    test('should render item', () => {
      const props = {
        item: { content: 'mock content', id: 'mock id' },
      };
      const wrapper = shallow(<Todo {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
