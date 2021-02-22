import { shallow } from 'enzyme';
import Filter from '../../../components/Filter';

describe('Filter', () => {
  describe('rendering', () => {
    test('should render', () => {
      const props = {
        setCategory: jest.fn(),
      };
      const wrapper = shallow(<Filter {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    test('should reset filter type', () => {
      const props = {
        setCategory: jest.fn(),
      };
      const wrapper = shallow(<Filter {...props} />);
      wrapper.find('button').at(0).simulate('click');
      expect(props.setCategory).toBeCalledTimes(1);
      expect(props.setCategory).toBeCalledWith('');
    });

    test('should set filter type with pending', () => {
      const props = {
        setCategory: jest.fn(),
      };
      const wrapper = shallow(<Filter {...props} />);
      wrapper.find('button').at(1).simulate('click');
      expect(props.setCategory).toBeCalledTimes(1);
      expect(props.setCategory).toBeCalledWith('pending');
    });

    test('should set filter type with completed', () => {
      const props = {
        setCategory: jest.fn(),
      };
      const wrapper = shallow(<Filter {...props} />);
      wrapper.find('button').at(2).simulate('click');
      expect(props.setCategory).toBeCalledTimes(1);
      expect(props.setCategory).toBeCalledWith('completed');
    });
  });
});
