import { shallow } from 'enzyme';
import { App, mapState } from '../../components/App';

describe('App', () => {
  describe('rendering', () => {
    test('should render simple todo list', () => {
      const props = {
        todos: [],
      };
      const wrapper = shallow(<App {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapState', () => {
    test('should inject props', () => {
      const injectedProps = mapState({});
      expect(injectedProps).toHaveProperty('todos');
    });
  });
});
