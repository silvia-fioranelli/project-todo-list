import { ADD_TODO, DELETE_TODO, SET_CATEGORY, TOGGLE_TODO } from '../actions';

// global ID to simulate database
let id = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    }

    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    }

    case ADD_TODO: {
      return {
        todos: state.todos.concat({
          content: action.content,
          completed: false,
          id: ++id,
        }),
      };
    }

    case SET_CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }

    default:
      return state;
  }
};

export default reducer;
