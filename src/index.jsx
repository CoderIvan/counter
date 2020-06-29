import React from 'react';
import dva, { connect } from 'dva';

import Counter from './components/Counter';

import countModel from './models';

const App = connect(({ count }) => ({
  count,
}))(({ dispatch, count }) => (
  <Counter
    value={count}
    onIncrement={() => { dispatch({ type: 'count/increment' }); }}
    onDecrement={() => { dispatch({ type: 'count/decrement' }); }}
    onIncrementIfOdd={() => { dispatch({ type: 'count/incrementIfOdd' }); }}
    onIncrementAsync={() => { dispatch({ type: 'count/incrementAsync' }); }}
  />
));

const app = dva();

app.model(countModel);

app.router(() => <App />);

app.start('#root');
