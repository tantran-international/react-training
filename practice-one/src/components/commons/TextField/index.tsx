import '@/components/commons/TextField/TextField.css';
import { FormEvent } from 'react';

/* Types */
interface IInput {
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onInputChange?: (value: string) => void;
  additionalClass?: string;
}

export function TextField({
  label,
  id,
  name,
  placeholder,
  value,
  onInputChange,
  additionalClass
}: IInput) {

  /**
   * Update fullName state of TextField when it's changed
   * @param event - event onChane of input
   */
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    console.log(typeof event);
    onInputChange?.(event.currentTarget.value);
  };

  return (
    <>
      <label htmlFor={id} className={`label-${additionalClass}`}>
        {label}
      </label>

      <input
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`text-field ${additionalClass}`}
      />
    </>
  );
}
