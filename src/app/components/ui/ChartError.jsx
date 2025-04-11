import React from 'react';

const ChartError = ({ message, onRetry }) => {
  return (
    <div className="chart-error">
      <p>{message || 'Failed to load chart data'}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
};

export default ChartError;