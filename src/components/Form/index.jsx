import { func } from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

export class Form extends Component {
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
        <div className="input-group mb-3">
          <input
            placeholder="Add todo here"
            value={inputText}
            type="text"
            onChange={this.handleChange}
          />
          <div class="input-group-append">
            <button
              className="btn btn-primary btn-sm"
              onClick={this.handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export const mapDispatch = {
  onSubmit: addTodo,
};

Form.propTypes = {
  onSubmit: func.isRequired,
};

export default connect(null, mapDispatch)(Form);
