import '@/components/commons/TextField/TextField.css';

import { FormEvent } from 'react';

/* Types */
interface IInput {
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  onInputChange?: (value: string) => void;
  additionalClass?: string;
  isAutoFocus?: boolean;
  onInputSearch?: (event: FormEvent<HTMLInputElement>) => void;
}

export function TextField({
  label,
  id,
  name,
  placeholder,
  value,
  onInputChange,
  additionalClass,
  isAutoFocus,
  onInputSearch
}: IInput) {

  /**
   * Update fullName state of TextField when it's changed
   * @param event - event onChane of input
   */
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    onInputChange?.(event.currentTarget.value);
    onInputSearch?.(event);
  };

  return (
    <>
      <label htmlFor={id} className={`label-${additionalClass}`}>
        {label}
      </label>

      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`text-field ${additionalClass}`}
        autoFocus={
          isAutoFocus == true
            ? true
            : false
        }
      />
    </>
  );
}
