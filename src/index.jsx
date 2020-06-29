import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Counter from './components/Counter';

import counter from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => { store.dispatch({ type: 'INCREMENT' }); }}
      onDecrement={() => { store.dispatch({ type: 'DECREMENT' }); }}
      onIncrementIfOdd={() => { store.dispatch({ type: 'INCREMENT_IF_ODD' }); }}
      onIncrementAsync={() => { store.dispatch({ type: 'INCREMENT_ASYNC' }); }}
    />,
    document.getElementById('root'), // eslint-disable-line no-undef
  );
};

render();
store.subscribe(render);
