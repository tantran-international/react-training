import { FormEvent } from 'react';

import '@/components/commons/TextArea/TextArea.css';

/* Types */
interface ITextArea {
  additionalClass?: string;
  onDetailsChange: (value: string) => void;
  value?: string;
};

export const TextArea = ({
  additionalClass,
  onDetailsChange,
  value
}: ITextArea) => {

  /**
   * Update fullName state of TextField on change
   * @param event - event onChane of input
   */
  const handleDetailsChange = (event: FormEvent<HTMLTextAreaElement>) => {
    onDetailsChange?.(event.currentTarget.value);
  };

  return (
    <textarea
      id="userDetail"
      name="userDetail"
      className={`text-area ${additionalClass}`}
      onChange={handleDetailsChange}
      value={value}
    ></textarea>
  );
};
