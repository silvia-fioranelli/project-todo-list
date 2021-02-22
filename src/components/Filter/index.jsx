import { func } from 'prop-types';

const Filter = (props) => {
  const { setCategory } = props;
  return (
    <div>
      <button onClick={() => setCategory('')}>ALL</button>
      <button onClick={() => setCategory('pending')}>Pending</button>
      <button onClick={() => setCategory('completed')}>Completed</button>
    </div>
  );
};

Filter.propTypes = {
  setCategory: func.isRequired,
};

export default Filter;
