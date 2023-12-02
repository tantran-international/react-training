import { createPortal } from 'react-dom';

import '@/components/commons/Modal/Modal.css';

/* Components */
import { Button } from '@/components/commons/Button';

/* Types */
interface IModal {
  onClose?: () => void;
  modalTitle?: string;
  modalDescription?: string;
  additionalClass?: string;
  isOpen: boolean;
  btnTextPrimary?: string;
  btnTextSecondary?: string;
  onBtnPrimaryClick?: () => void;
  onBtnSecondaryClick?: () => void;
  children?: JSX.Element[] | JSX.Element;
}

/* Icons */
import iconClose from '@/assets/images/icons/icon-close.svg';

export function Modal({
  onClose,
  modalTitle,
  modalDescription,
  additionalClass,
  isOpen,
  btnTextPrimary,
  btnTextSecondary,
  onBtnPrimaryClick,
  children
}: IModal) {
  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className={`modal-wrapper ${additionalClass}-wrapper`}
            onClick={onClose}
          >
            <div
              className={`modal ${additionalClass}`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={`${additionalClass}-header`}>
                {modalTitle ? (
                  <>
                    <h2 className="modal-title">{modalTitle}</h2>
                    <p className="modal-description">{modalDescription}</p>
                  </>
                ) : (
                  <>
                    <p className="modal-description">{modalDescription}</p>
                    <Button
                      icon={iconClose}
                      additionalClass="button-icon-close"
                      onClick={onClose}
                    />
                  </>
                )}
              </div>

              <div className={`${additionalClass}-body`}>
                {modalTitle ? (
                  <>
                    <Button
                      content={btnTextSecondary}
                      additionalClass="button-secondary button-save"
                      onClick={onClose}
                    />
                    <Button
                      content={btnTextPrimary}
                      additionalClass="button-primary button-save"
                      onClick={onBtnPrimaryClick}
                    />
                  </>
                ) : (
                  <>
                    {children}
                    <Button
                      content={btnTextPrimary}
                      additionalClass="button-primary button-save"
                      onClick={onBtnPrimaryClick}
                    />
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
