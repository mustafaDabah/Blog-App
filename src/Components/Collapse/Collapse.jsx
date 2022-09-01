import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ButtonCollapse from '../ButtonCollapse/ButtonCollapse';

function Collapse({ title, children, defaultExpanded = true }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <button type="button" onClick={toggleExpanded} className="w-full">
        {expanded
          ? (
            <ButtonCollapse title={`hidden ${title}`} Component={IoIosArrowUp} />
          )
          : (
            <ButtonCollapse title={`show ${title}`} Component={IoIosArrowDown} />
          )}
      </button>

      <section className={`bg-third rounded-lg p-1 h-full ${expanded ? 'block animate-according-animation-in' : ' animate-according-animation-out hidden'} `}>
        {children}
      </section>
    </>
  );
}

export default Collapse;
export const CollapseMemo = React.memo(Collapse);
