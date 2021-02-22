import { func } from 'prop-types';
import { connect } from 'react-redux';
import { setCategory as setCategoryAlias } from '../../actions';
import {
  CATEGORY_ALL,
  CATEGORY_COMPLETED,
  CATEGORY_PENDING,
} from '../../globals';

export const Filter = (props) => {
  const { setCategory } = props;
  return (
    <div>
      <button onClick={() => setCategory(CATEGORY_ALL)}>ALL</button>
      <button onClick={() => setCategory(CATEGORY_PENDING)}>Pending</button>
      <button onClick={() => setCategory(CATEGORY_COMPLETED)}>Completed</button>
    </div>
  );
};

Filter.propTypes = {
  setCategory: func.isRequired,
};

export const mapDispatch = {
  setCategory: setCategoryAlias,
};

export default connect(null, mapDispatch)(Filter);
