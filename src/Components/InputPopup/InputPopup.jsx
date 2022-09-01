import React from 'react';

function InputPopup({ name, value, id, handleInput }) {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="capitalize text-third">{name}</span>
      <input
        type="text"
        id={id}
        className="border-2 border-cyan-800 rounded-md p-2 mt-2 mb-3 font-light"
        value={value}
        onChange={(e) => handleInput(e)}
      />
    </label>
  );
}

export default InputPopup;
export const InputPopupMemo = React.memo(InputPopup);
