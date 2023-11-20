import { TInput } from '@src/types/TInput';
import './TextField.css';

export function TextField({ additionalClass, placeholder, onChange }: TInput) {
  return (
    <input
      className={`text-field text-field-${additionalClass}`}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      autoFocus
    />
  );
}
