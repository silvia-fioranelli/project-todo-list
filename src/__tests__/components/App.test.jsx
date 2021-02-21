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
        { content: 'mock', id: '1' },
      ]);
    });
  });
});
