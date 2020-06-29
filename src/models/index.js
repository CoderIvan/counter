export default {
  namespace: 'count',
  state: 0,
  reducers: {
    increment(count) {
      return count + 1;
    },
    decrement(count) {
      return count - 1;
    },
    incrementIfOdd(count) {
      if (count % 2 !== 0) {
        return count + 1;
      }
      return count;
    },
  },
  effects: {
    * incrementAsync(count, { put }) {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      yield put({ type: 'increment' });
    },
  },
};
