export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const SET_CATEGORY = 'SET_CATEGORY';

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    content,
  };
};

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  };
};
