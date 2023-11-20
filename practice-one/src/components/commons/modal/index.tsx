import { createPortal } from 'react-dom';
import './modal.css';

// Components
import { Button } from '@components/commons/Button/index';

// Types
import { TModal } from '@/types/TModal';

// Icons
import iconClose from '@assets/images/icons/icon-close.svg';


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
              <div className={`modal-${additionalClass}-header`}>
                {modalTitle && <h2 className='modal-title'>{modalTitle}</h2>}
                {modalDescription && (
                  <p className='modal-description'>{modalDescription}</p>
                )}
                <Button
                  icon={iconClose}
                  additionalClass='close'
                  onClick={onClose}
                />
              </div>
              <div className={`modal-${additionalClass}-body`}>
                {children}
                {btnTextPrimary && (
                  <Button
                    content={btnTextPrimary}
                    additionalClass='primary button-save'
                    onClick={onClickBtnPrimary}
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
