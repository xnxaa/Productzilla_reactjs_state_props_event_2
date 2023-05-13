import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div
        className={`count-text ${count % 2 === 0 ? 'count-even' : 'count-odd'}`}
      >
        Count: {count}
      </div>
      <div className="button-container">
        <button onClick={handleIncrement}>Tambah</button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Kurang
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default Counter;
