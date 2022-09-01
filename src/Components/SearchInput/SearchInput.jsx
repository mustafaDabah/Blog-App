import React from 'react';
import { MdSearch } from 'react-icons/md';

function SearchInput({ handleInputChanges }) {
  return (
    <form className="flex mb-3">
      <input
        type="text"
        placeholder="search for post"
        className="p-3 rounded-md w-full "
        onChange={(e) => handleInputChanges(e)}
      />
      <button
        type="button"
        className="bg-primary p-3 rounded-md ml-1"
      >
        <MdSearch color="white" fontSize={22} />
      </button>
    </form>
  );
}

export default SearchInput;
export const SearchInputMemo = React.memo(SearchInput);
