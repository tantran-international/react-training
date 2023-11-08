import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '@components/parts/modals/modal';
import { TextField } from '../text-field/text-field';
import './popper.css';

export function AddNewPopper() {
  const [showOption, setShowOption] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

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

  const handleClickButtonPopper = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <button
        className='btn-cta btn-add'
        type='button'
        onClick={() => setShowOption(true)}
        ref={ref}
      >
        &#43; New
      </button>
      {showOption &&
        createPortal(
          <button
            className='btn-cta btn-popper'
            type='button'
            onClick={handleClickButtonPopper}
          >
            Add new user
          </button>,
          document.querySelector('.popper-wrapper') as HTMLElement
        )}
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => setOpenModal(false)}
          modalDescription='Enter user name'
          btnTextPrimary='Save'
        >
          <TextField />
        </Modal>
      )}
    </div>
  );
}
