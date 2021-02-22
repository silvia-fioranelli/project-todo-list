import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  describe('rendering', () => {
    test('should render simple todo list', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('callbacks', () => {
    test('handleOnSubmit should add todo', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().handleOnSubmit('mock');
      expect(wrapper.instance().state.todos).toEqual([
        {
          content: 'mock',
          completed: false,
          id: '1',
        },
      ]);
    });

    test('setCategory should set given category', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().setCategory('mock');
      expect(wrapper.instance().state.filterType).toEqual('mock');
    });

    describe('getTodos', () => {
      const todos = [
        { completed: false, id: '1' },
        { completed: true, id: '2' },
      ];

      test('should return all todos', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ todos });
        const result = wrapper.instance().getTodos();
        expect(result).toEqual(todos);
      });

      test('should return pending todos', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ todos, filterType: 'pending' });
        const result = wrapper.instance().getTodos();
        expect(result).toEqual([todos[0]]);
      });

      test('should return completed todos', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ todos, filterType: 'completed' });
        const result = wrapper.instance().getTodos();
        expect(result).toEqual([todos[1]]);
      });
    });
  });
});
