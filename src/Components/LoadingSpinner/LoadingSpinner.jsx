import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-3 mb-5 h-80" data-testid="loading-spinner">
      <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-sky-400" />
    </div>
  );
}

export default LoadingSpinner;
