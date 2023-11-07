import { TButton } from '@src/types/TButton';
import './button.css';

export function ButtonPrimary({ content, onClick }: TButton) {
  return (
    <button className='button button-primary' type='button' onClick={onClick}>
      {content}
    </button>
  );
}
