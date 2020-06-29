import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      onIncrementIfOdd={() => {
        if (store.getState() % 2 !== 0) {
          store.dispatch({ type: 'INCREMENT' });
        }
      }}
      onIncrementAsync={() => {
        setTimeout(() => {
          store.dispatch({ type: 'INCREMENT' });
        }, 1000);
      }}
    />,
    document.getElementById('root'), // eslint-disable-line no-undef
  );
};

render();
store.subscribe(render);
