import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '@/components/commons/Popper/Popper.css';

/* Components */
import { Modal } from '@/components/commons/Modal';
import { TextField } from '@/components/commons/TextField';
import { addUsers } from '@/services/usersService';

/* Types */
interface IPopper {
  onModalSubmit: () => void;
}

export function Popper({ onModalSubmit }: IPopper) {
  /* Handle show/hide (btn-popper) */
  const [showOption, setShowOption] = useState(false);

  /* Handle show/hide Modal */
  const [isOpenModal, setOpenModal] = useState(false);

  /* Handle change value of TextField */
  const [userName, setUserName] = useState('');

  /* Handle value of Textfield when update initial value */
  const handleUserNameChange = (value: string) => {
    setUserName(value);
  };

  /* Show all Options buttons below Popper button */
  const handleClickPopperBtn = () => {
    setShowOption(true);
  };

  /* Open modal when clicked on Add new button */
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  /* Close modal when click on close icon button */
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  /* Update data when Save button is clicked */
  const handleClickPrimaryBtn = async () => {
    const { error } = await addUsers(userName);
    {
      error && alert('Something went wrong');
    }
    onModalSubmit();
    setOpenModal(false);
  };

  /* Define useRef.current as button element and set initial value */
  const ref = useRef<HTMLButtonElement>(null);

  /* Implement feature click outside to hide (btn-popper) */
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
    <div className="popper-wrapper">
      <button
        className="btn-cta btn-add"
        type="button"
        onClick={handleClickPopperBtn}
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
          onBtnPrimaryClick={handleClickPrimaryBtn}
        >
          <TextField
            id="input-add-user"
            name="input-add-user"
            isAutoFocus={true}
            additionalClass="text-field-add"
            onInputChange={handleUserNameChange}
          />
        </Modal>
      )}
    </div>
  );
}
