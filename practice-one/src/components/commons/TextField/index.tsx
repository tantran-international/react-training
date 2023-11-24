import { TInput } from '@/types/TInput';
import '@/components/commons/TextField/TextField.css';

export function TextField({
  additionalClass,
  placeholder,
  onChange
}: TInput) {
  return (
    <input
      className={`text-field ${additionalClass}`}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      autoFocus
    />
  );
}
