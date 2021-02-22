import {
  addTodo,
  ADD_TODO,
  deleteTodo,
  DELETE_TODO,
  setCategory,
  SET_CATEGORY,
  toggleTodo,
  TOGGLE_TODO,
} from '../../actions';

describe('actions', () => {
  test('deleteTodo should create action', () => {
    const result = deleteTodo('mock');
    expect(result).toEqual({
      type: DELETE_TODO,
      id: 'mock',
    });
  });

  test('toggleTodo should create action', () => {
    const result = toggleTodo('mock');
    expect(result).toEqual({
      type: TOGGLE_TODO,
      id: 'mock',
    });
  });

  test('addTodo should create action', () => {
    const result = addTodo('mock');
    expect(result).toEqual({
      type: ADD_TODO,
      content: 'mock',
    });
  });

  test('setCategory should create action', () => {
    const result = setCategory('mock');
    expect(result).toEqual({
      type: SET_CATEGORY,
      category: 'mock',
    });
  });
});
