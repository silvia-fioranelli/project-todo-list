import {
  CATEGORY_ALL,
  CATEGORY_COMPLETED,
  CATEGORY_PENDING,
} from '../../globals';
import { getTodos } from '../../selectors';

describe('selectors', () => {
  const todos = [
    {
      text: 'mock1',
      completed: false,
    },
    {
      text: 'mock2',
      completed: true,
    },
  ];

  describe('getTodos', () => {
    test('should return completed todos', () => {
      const state = {
        todos,
        category: CATEGORY_COMPLETED,
      };

      const expected = [
        {
          text: 'mock2',
          completed: true,
        },
      ];
      const res = getTodos(state);
      expect(res).toEqual(expected);
    });

    test('should return pending todos', () => {
      const state = {
        todos,
        category: CATEGORY_PENDING,
      };

      const expected = [
        {
          text: 'mock1',
          completed: false,
        },
      ];
      const res = getTodos(state);
      expect(res).toEqual(expected);
    });

    test('should return all todos', () => {
      const state = {
        todos,
        category: CATEGORY_ALL,
      };

      const expected = [
        {
          text: 'mock1',
          completed: false,
        },
        {
          text: 'mock2',
          completed: true,
        },
      ];
      const res = getTodos(state);
      expect(res).toEqual(expected);
    });
  });
});
