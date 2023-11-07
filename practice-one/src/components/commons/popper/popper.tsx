import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './popper.css';

export function AddNewPopper() {
  const [showOption, setShowOption] = useState(false);

  // Define useRef.current as button element and set initial value
  const ref = useRef<HTMLButtonElement>(null);

  // Perform side effect handleClickOutSide in popper component, when event.target != ref.current
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setShowOption(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className='btn-cta btn-add' type='button' onClick={() => setShowOption(true)} ref={ref}>
        &#43; New
      </button>
      {showOption &&
        createPortal(
          <button
            className='btn-cta btn-popper'
            type='button'
            onClick={() => {
              console.log('tannga');
            }}
          >
            Add new user
          </button>,
          document.querySelector('.popper-wrapper') as HTMLElement
        )}
    </div>
  );
}