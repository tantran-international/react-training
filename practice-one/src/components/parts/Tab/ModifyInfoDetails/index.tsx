import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import '@/components/parts/Tab/ModifyInfoDetails/ModifyInforDetails.css';

/* Components */
import { Button } from '@/components/commons/Button';
import { TextField } from '@/components/commons/TextField';
import { ImageUploader } from '@/components/commons/ImageUploader';
import { Switch } from '@/components/commons/Switch';
import { Status } from '@/components/commons/Status';
import { TextArea } from '@/components/commons/TextArea';
import { Modal } from '@/components/commons/Modal';

/* Types */
import { IData } from '@/types/IDatas';
interface IModyfiInfoDetails<T> {
  activeTab: string;
  dataItem: T;
  onSubmitForm: (dataItem: IData) => void;
  onDeleteUser: (id: string) => void;
}

/* Helpers */
import { renderDate } from '@/helpers/renderDate';

export const ModifyInfoDetails = ({
  activeTab,
  dataItem,
  onSubmitForm,
  onDeleteUser
}: IModyfiInfoDetails<IData>) => {
  const [avatar, setAvatar] = useState(dataItem.avatar);
  const [fullName, setFullname] = useState(dataItem.fullName);
  const [email, setEmail] = useState(dataItem.email);
  const [status, setStatus] = useState(dataItem.isActive);
  const [details, setDetails] = useState(dataItem.details);
  const [isOpenModal, setOpenModal] = useState(false);

  /* Get updated value of full-name */
  const handleFullNameChange = (value: string) => {
    setFullname(value);
  };

  /* Get updated value of email */
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  /* Get updated value of switch component */
  const handleSwitchChange = () => {
    setStatus(!status);
  };

  /* Get updated value of details */
  const handleDetailsChange = (value: string) => {
    setDetails(value);
  };

  /* Get updated avatar's source */
  const handleAvatarChange = (value: string) => {
    setAvatar(value);
  };

  /* Generate updated dataItem object and pass to App component */
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date();
    const currentDate = date.toString();
    const updatedItem = {
      id: dataItem.id,
      avatar: avatar,
      fullName: fullName,
      email: email,
      isActive: status,
      registeredDate: dataItem.registeredDate,
      lastVisitedDate: currentDate,
      details: details,
      bgColor: dataItem.bgColor
    };
    onSubmitForm(updatedItem);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleDeleteButton = () => {
    setOpenModal(false);
    onDeleteUser(dataItem.id);
  };

    /* Close modal when click on close icon button */
    const handleCloseModal = () => {
      setOpenModal(false);
    };

  /* Update the initial value of TextField && TextArea && Switch && Status
  components and re-render when the dataItem prop has changed */
  useEffect(() => {
    setFullname(dataItem.fullName);
    setEmail(dataItem.email);
    setStatus(dataItem.isActive);
    setDetails(dataItem.details);
    setAvatar(dataItem.avatar);
  }, [dataItem]);

  switch (activeTab) {
    case 'General':
      return (
        <>
          <div className='tab-toolbar'>
            <Button
              type='button'
              additionalClass='button-secondary'
              content='Delete'
              onClick={handleOpenModal}
            />
            <Button
              type='submit'
              form='form-edit-user'
              additionalClass='button-primary button-primary-edit'
              content='Save'
            />
          </div>

          {isOpenModal &&
            createPortal(
              <Modal
                additionalClass="modal-confirm"
                isOpen={isOpenModal}
                onClose={handleCloseModal}
                modalTitle='Delete'
                modalDescription='Are you sure to delete this user?'
                btnTextSecondary='Cancel'
                btnTextPrimary='Delete'
                onBtnPrimaryClick={handleDeleteButton}
              />,
              document.querySelector('.popper-wrapper') as HTMLElement
            )}

          <form
            id='form-edit-user'
            className='form-edit-user'
            onSubmit={handleFormSubmit}
          >
            <div className='form-edit-item'>
              <TextField
                label='Full Name'
                id='edit-name'
                name='edit-name'
                value={fullName}
                onInputChange={handleFullNameChange}
                additionalClass='edit-input'
              />
            </div>

            <div className='form-edit-item'>
              <TextField
                label='Email'
                id='edit-email'
                name='edit-email'
                value={email}
                onInputChange={handleEmailChange}
                additionalClass='edit-input'
              />
            </div>

            <ImageUploader
              dataItem={dataItem}
              onAvatarChange={handleAvatarChange}
            />

            <div className='form-edit-item-status'>
              <span className='form-edit-label'>Status</span>
              <Switch
                onChange={handleSwitchChange}
                checked={status}
                additionalClass='form-edit-switch'
              />
              <div className='status-wrapper'>
                <Status isActive={status} />
              </div>
            </div>

            <div className='form-edit-item form-edit-item-date'>
              <span className='form-edit-label'>Resistered</span>
              <p className='form-edit-content'>
                {dataItem.registeredDate == null
                  ? 'Unknown'
                  : renderDate(dataItem.registeredDate)}
              </p>
            </div>

            <div className='form-edit-item form-edit-item-date'>
              <span className='form-edit-label'>Last visited</span>
              <p className='form-edit-content'>
                {dataItem.lastVisitedDate == null
                  ? 'Unknown'
                  : renderDate(dataItem.lastVisitedDate)}
              </p>
            </div>

            <div className='form-edit-item form-edit-item-details'>
              <span className='label-edit-input'>Details</span>
              <TextArea onDetailsChange={handleDetailsChange} value={details} />
            </div>
          </form>
        </>
      );

    default:
      break;
  }
};
