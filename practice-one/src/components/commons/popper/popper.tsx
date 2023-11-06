import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './popper.css';

export function AddNewPopper() {
  const [showOption, setShowOption] = useState(false);

  return (
    <>
      <button className='btn-cta btn-add' type='button' onClick={() => setShowOption(!showOption)}>
        &#43; New
      </button>
      {showOption &&
        createPortal(
          <button className='btn-cta btn-popper' type='button'>
            Add new user
          </button>,
          document.querySelector('.popper-wrapper') as HTMLElement
        )}
    </>
  );
}
