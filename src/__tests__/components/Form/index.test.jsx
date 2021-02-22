import { shallow } from 'enzyme';
import Form from '../../../components/Form';

describe('Form', () => {
  const defaultProps = {
    onSubmit: jest.fn(),
  };

  const render = (props) => shallow(<Form {...defaultProps} {...props} />);

  describe('rendering', () => {
    test('should render text form', () => {
      const wrapper = render();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    test('should handle onChange event', () => {
      const wrapper = render();
      wrapper.instance().handleChange = jest.fn();
      // needed by enzyme to register mock callback
      wrapper.instance().forceUpdate(); 
      
      wrapper.find('input').simulate('change');
      expect(wrapper.instance().handleChange).toBeCalledTimes(1);
    });

    test('should handle onClick event', () => {
      const wrapper = render();
      wrapper.instance().handleSubmit = jest.fn();
      // needed by enzyme to register mock callback
      wrapper.instance().forceUpdate(); 
      
      wrapper.find('button').simulate('click');
      expect(wrapper.instance().handleSubmit).toBeCalledTimes(1);
    });
  });

  describe('callbacks', () => {
    test('handleChange should set state', () => {
      const instance = render().instance();
      const event = { target: { value: 'mock' } };
      instance.handleChange(event);
      expect(instance.state.inputText).toEqual('mock');
    });

    test('handleSubmit should not set todo', () => {
      const props = {
        onSubmit: jest.fn(),
      };
      const event = {
        preventDefault: jest.fn(),
      };
      const instance = render(props).instance();
      instance.setState({ inputText: '' });
      instance.handleSubmit(event);

      expect(event.preventDefault).toBeCalledTimes(1);
      expect(props.onSubmit).toBeCalledTimes(0);
    });

    test('handleSubmit should set todo', () => {
      const props = {
        onSubmit: jest.fn(),
      };
      const event = {
        preventDefault: jest.fn(),
      };
      const instance = render(props).instance();
      instance.setState({ inputText: 'mock' });
      instance.handleSubmit(event);

      expect(event.preventDefault).toBeCalledTimes(1);
      expect(props.onSubmit).toBeCalledTimes(1);
      expect(props.onSubmit).toBeCalledWith('mock');
      expect(instance.state.inputText).toEqual('');
    });
  });
});
