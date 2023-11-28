import { FormEvent } from 'react';
import './TextArea.css';

/* Types */
type TTextArea = {
  additionalClass?: string;
  onDetailsChange: (value: string) => void;
  value?: string;
};

export const TextArea = ({
  additionalClass,
  onDetailsChange,
  value
}: TTextArea) => {

  /**
   * Update fullName state of TextField when it's changed
   * @param event - event onChane of input
   */
  const handleDetailsChange = (event: FormEvent<HTMLTextAreaElement>) => {
    onDetailsChange?.(event.currentTarget.value);
  };

  return (
    <textarea
      id='userDetail'
      name='userDetail'
      className={`text-area ${additionalClass}`}
      onChange={handleDetailsChange}
      value={value}
    ></textarea>
  );
};
