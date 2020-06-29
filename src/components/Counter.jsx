import React from 'react';
import PropTypes from 'prop-types';

function Counter({
  value, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync,
}) {
  return (
    <p>
      Clicked:
      {' '}
      {value}
      {' '}
      times
      {' '}
      <button type="button" onClick={onIncrement}>
        +
      </button>
      {' '}
      <button type="button" onClick={onDecrement}>
        -
      </button>
      {' '}
      <button type="button" onClick={onIncrementIfOdd}>
        Increment if odd
      </button>
      {' '}
      <button type="button" onClick={onIncrementAsync}>
        Increment async
      </button>
    </p>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;
