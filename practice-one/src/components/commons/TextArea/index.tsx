import './TextArea.css';

/* Types */
import { TTextArea } from '@src/types/TTextArea';

export const TextArea = ({ additionalClass }: TTextArea) => {
  return (
    <textarea
      className={`text-area ${additionalClass}`}
      autoFocus
    ></textarea>
  );
};
