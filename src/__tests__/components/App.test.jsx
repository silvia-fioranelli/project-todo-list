import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  describe('rendering', () => {
    test('should render simple todo list', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    })
  })
})
