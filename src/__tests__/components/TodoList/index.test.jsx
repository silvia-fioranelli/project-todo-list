import { shallow } from 'enzyme';
import TodoList from '../../../components/TodoList';

describe('TodoList', () => {
  describe('rendering', () => {
    test('should render items', () => {
      const props = {
        items: [
          { content: 'mock 1', id: 'id 1' },
          { content: 'mock 2', id: 'id 2' }
        ],
      };
      const wrapper = shallow(<TodoList {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
