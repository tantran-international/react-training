import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '@/components/commons/Popper/Popper.css';

/* Components */
import { Modal } from '@/components/commons/Modal';
import { TextField } from '@/components/commons/TextField';
import { addUsers } from '@/services/usersService';

/* Types */
interface TPopper {
  onModalSubmit: () => void;
}

export function Popper({ onModalSubmit }: TPopper) {
  /* Handle show/hide (btn-popper) */
  const [showOption, setShowOption] = useState(false);

  /* Handle show/hide Modal */
  const [isOpenModal, setOpenModal] = useState(false);

  /* Handle change value of TextField */
  const [userName, setUserName] = useState('');

  /* Helpers */
  const handleUserNameChange = (value: string) => {
    setUserName(value);
  };

  const handleClickPopper = () => {
    setShowOption(true);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  /**
   * Implement addUsers (post method) when Save button is clicked
   */
  const handleClickPrimaryBtn = async () => {
    const { error } = await addUsers(userName);
    {
      error && alert('Something when wrong');
    }
    onModalSubmit();
    setOpenModal(false);
  };

  /* useRef: Define useRef.current as button element and set initial value */
  const ref = useRef<HTMLButtonElement>(null);

  /* useEffect: Implement feature click outside to hide (btn-popper) */
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
    <div className='popper-wrapper'>
      <button
        className='btn-cta btn-add'
        type='button'
        onClick={handleClickPopper}
        ref={ref}
      >
        <span className='btn-add-symbol'>&#43;</span> New
      </button>

      {showOption &&
        createPortal(
          <button
            className='btn-cta btn-popper'
            type='button'
            onClick={handleOpenModal}
          >
            Add new user
          </button>,
          document.querySelector('.popper-wrapper') as HTMLElement
        )}

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          additionalClass='modal-add-new'
          onClose={handleCloseModal}
          modalDescription='Enter user name'
          btnTextPrimary='Save'
          onBtnPrimaryClick={handleClickPrimaryBtn}
        >
          <TextField
            id='input-add-user'
            name='input-add-user'
            isAutoFocus={true}
            additionalClass='text-field-add'
            onInputChange={handleUserNameChange}
          />
        </Modal>
      )}
    </div>
  );
}
