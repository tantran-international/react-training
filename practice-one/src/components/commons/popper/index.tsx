import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '@/components/commons/Popper/Popper.css';

// Components
import { Modal } from '@/components/commons/Modal';
import { TextField } from '@/components/commons/TextField';

export function Popper() {
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

  /* Update state of popper to show / hide popper button */
  const handleClickButtonPopper = () => {
    setOpenModal(true);
  };

  return (
    <div className="popper-wrapper">
      <button
        className="btn-cta btn-add"
        type="button"
        onClick={() => setShowOption(true)}
        ref={ref}
      >
        <span className='btn-add-symbol'>&#43;</span> New
      </button>
      {showOption &&
        createPortal(
          <button
            className="btn-cta btn-popper"
            type="button"
            onClick={handleClickButtonPopper}
          >
            Add new user
          </button>,
          document.querySelector(".popper-wrapper") as HTMLElement
        )}
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          additionalClass="add-new"
          onClose={() => setOpenModal(false)}
          modalDescription="Enter user name"
          btnTextPrimary="Save"
        >
          <TextField additionalClass="add" />
        </Modal>
      )}
    </div>
  );
}
