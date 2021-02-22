import {
  ADD_TODO,
  DELETE_TODO,
  SET_CATEGORY,
  TOGGLE_TODO,
} from '../../actions';
import reducer from '../../reducers';

describe('reducers', () => {
  test('should handle DELETE_TODO action', () => {
    const initialState = {
      todos: [
        {
          content: 'mock1',
          id: 1,
        },
        {
          content: 'mock2',
          id: 2,
        },
      ],
    };

    const action = {
      type: DELETE_TODO,
      id: 1,
    };
    const res = reducer(initialState, action);
    expect(res).toEqual({
      todos: [
        {
          content: 'mock2',
          id: 2,
        },
      ],
    });
  });

  test('should handle TOGGLE_TODO action', () => {
    const initialState = {
      todos: [
        {
          content: 'mock1',
          id: 1,
          completed: false,
        },
        {
          content: 'mock2',
          id: 2,
          completed: false,
        },
      ],
    };

    const action = {
      type: TOGGLE_TODO,
      id: 1,
    };
    const res = reducer(initialState, action);
    expect(res).toEqual({
      todos: [
        {
          content: 'mock1',
          id: 1,
          completed: true,
        },
        {
          content: 'mock2',
          id: 2,
          completed: false,
        },
      ],
    });
  });

  test('should handle ADD_TODO action', () => {
    const initialState = {
      todos: [],
    };
    const action = {
      type: ADD_TODO,
      content: 'mock',
    };
    const res = reducer(initialState, action);
    expect(res).toEqual({
      todos: [
        {
          content: 'mock',
          id: 1,
          completed: false,
        },
      ],
    });
  });

  test('should handle SET_CATEGORY action', () => {
    const initialState = {
      category: '',
    };
    const action = {
      type: SET_CATEGORY,
      category: 'completed',
    };
    const res = reducer(initialState, action);
    expect(res).toEqual({
      category: 'completed',
    });
  });
});
