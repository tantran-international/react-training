import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '@/components/commons/Popper/Popper.css';

// Components
import { Modal } from '@/components/commons/Modal';
import { TextField } from '@/components/commons/TextField';

export function Popper() {
  /* Handle show/hide (btn-popper) */
  const [showOption, setShowOption] = useState(false);
  /* Handle show/hide Modal */
  const [isOpenModal, setOpenModal] = useState(false);

  /* Define useRef.current as button element and set initial value */
  const ref = useRef<HTMLButtonElement>(null);

  /* Click outside to hide (btn-popper) */
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

  /* Helpers */
  const handleClickPopper = () => {
    setShowOption(true);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="popper-wrapper">
      <button
        className="btn-cta btn-add"
        type="button"
        onClick={handleClickPopper}
        ref={ref}
      >
        <span className="btn-add-symbol">&#43;</span> New
      </button>

      {showOption &&
        createPortal(
          <button
            className="btn-cta btn-popper"
            type="button"
            onClick={handleOpenModal}
          >
            Add new user
          </button>,
          document.querySelector(".popper-wrapper") as HTMLElement
        )}

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          additionalClass="modal-add-new"
          onClose={handleCloseModal}
          modalDescription="Enter user name"
          btnTextPrimary="Save"
        >
          <TextField additionalClass="text-field-add" />
        </Modal>
      )}
    </div>
  );
}
