export type TModal = {
  onClose?: () => void;
  modalTitle?: string;
  modalDescription?: string;
  additionalClass?: string;
  isOpen: boolean;
  btnTextPrimary?: string;
  onClickBtnPrimary?: () => {};
  children?: JSX.Element[] | JSX.Element;
};
