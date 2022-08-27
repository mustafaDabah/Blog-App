import React from 'react';

function ButtonCollapse({ title, Component }) {
  return (
    <div className="bg-third rounded-lg p-3 w-full flex justify-between items-center mb-3">
      <p className="text-forth">{title}</p>
      <Component color="#fff" size={22} />
    </div>
  );
}

export default ButtonCollapse;
export const ButtonCollapseMemo = React.memo(ButtonCollapse);
