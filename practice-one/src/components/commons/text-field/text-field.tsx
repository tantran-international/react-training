import { TInput } from '@src/types/TInput';
import './text-field.css';

export function TextField({ className, placeholder, onChange }: TInput) {
  return <input className={'text-field' + ' ' + className} type='text' placeholder={placeholder} onChange={onChange} />;
}
