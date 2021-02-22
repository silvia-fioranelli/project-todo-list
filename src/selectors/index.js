import { CATEGORY_COMPLETED, CATEGORY_PENDING } from '../globals';

export const getTodos = (state) => {
  const { todos, category } = state;

  switch (category) {
    case CATEGORY_PENDING: {
      return todos.filter((todo) => !todo.completed);
    }

    case CATEGORY_COMPLETED: {
      return todos.filter((todo) => todo.completed);
    }

    default:
      return todos;
  }
};
