import { TModal } from '@src/types/TModal';
import { Button } from '@components/commons/button/button';
import iconClose from '@assets/images/icons/icon-close.svg';
import { createPortal } from 'react-dom';
import './modal.css';

export function Modal({
  onClose,
  modalTitle,
  modalDescription,
  additionalClass,
  isOpen,
  btnTextPrimary,
  onClickBtnPrimary,
  children
}: TModal) {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className='modal-wrapper'>
            <div className={`modal modal-${additionalClass}`}>
              {modalTitle && <h2 className='modal-Title'>{modalTitle}</h2>}
              {modalDescription && <p>{modalDescription}</p>}
              <Button
                icon={iconClose}
                additionalClass='close'
                onClick={onClose}
              />
              {children}
              {btnTextPrimary && (
                <Button
                  content={btnTextPrimary}
                  additionalClass='primary'
                  onClick={onClickBtnPrimary}
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
