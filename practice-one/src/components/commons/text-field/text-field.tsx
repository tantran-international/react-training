import { TInput } from '@src/types/TInput';
import './text-field.css';

export function TextField({ additionalClass, placeholder, onChange }: TInput) {
  return (
    <input
      className={`text-field text-field-${additionalClass}`}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
