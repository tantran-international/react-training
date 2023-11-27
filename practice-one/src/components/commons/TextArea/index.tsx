import './TextArea.css';

/* Types */
type TTextArea = {
  additionalClass: string;
  onChange: () => void;
  value: string;
};

export const TextArea = ({ additionalClass, onChange, value }: TTextArea) => {

  return (
    <textarea
      id='userDetail'
      name='userDetail'
      className={`text-area ${additionalClass}`}
      onChange={onChange}
      value={value}
      autoFocus
    ></textarea>
  );
};
