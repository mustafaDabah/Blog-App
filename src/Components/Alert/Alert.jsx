import React from 'react';

function Alert({ title }) {
  return (
    <div data-testid="alert-error" className="absolute top-[48px] right-0 bg-red-500 w-full p-2">
      <p className="text-forth text-center">{title}</p>
    </div>
  );
}

export default Alert;
