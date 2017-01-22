
export default function(reducer, state = reducer(undefined, { type: 'INIT' })) {
  const subscribers = new Set();
  return {
    dispatch: (action) => {
      state = reducer(state, action);
      subscribers.forEach(sub => sub());
    },
    getState: () => state,

    subscribe: (func) => {
      subscribers.add(func);
      return () => subscribers.delete(func);
    }
  }
}
