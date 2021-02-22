import { shallow } from 'enzyme';
import { Filter, mapDispatch } from '../../../components/Filter';
import {
  CATEGORY_ALL,
  CATEGORY_COMPLETED,
  CATEGORY_PENDING,
} from '../../../globals';

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
      expect(props.setCategory).toBeCalledWith(CATEGORY_ALL);
    });

    test('should set filter type with pending', () => {
      const props = {
        setCategory: jest.fn(),
      };
      const wrapper = shallow(<Filter {...props} />);
      wrapper.find('button').at(1).simulate('click');
      expect(props.setCategory).toBeCalledTimes(1);
      expect(props.setCategory).toBeCalledWith(CATEGORY_PENDING);
    });

    test('should set filter type with completed', () => {
      const props = {
        setCategory: jest.fn(),
      };
      const wrapper = shallow(<Filter {...props} />);
      wrapper.find('button').at(2).simulate('click');
      expect(props.setCategory).toBeCalledTimes(1);
      expect(props.setCategory).toBeCalledWith(CATEGORY_COMPLETED);
    });
  });

  describe('mapDispatch', () => {
    test('should inject props', () => {
      expect(mapDispatch).toHaveProperty('setCategory');
    });
  });
});
