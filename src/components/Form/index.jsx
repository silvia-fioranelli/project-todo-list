import { func } from 'prop-types';
import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { inputText } = this.state;
    
    if (!inputText) return;
    
    onSubmit(inputText);
    this.setState({
      inputText: '',
    });
  };

  render() {
    const { inputText } = this.state;

    return (
      <form>
        <input
          label="Add todo"
          value={inputText}
          type="text"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: func.isRequired,
};

export default Form;
