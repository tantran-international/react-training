import { TButton } from '@src/types/TButton';
import './button.css';

export function Button({ isPrimary, className, image, content, onClick }: TButton) {
  // If have isPrimary prop => render primary || secondary button
  // If have image prop => render button-icon
  if (isPrimary == true || isPrimary == false) {
    return (
      <button
        className={isPrimary == true ? 'button button-primary' : 'button button-secondary'}
        type='button'
        onClick={onClick}
      >
        {content}
      </button>
    );
  } else {
    return (
      <button className={'button-icon' + ' ' + className} type='button' onClick={onClick}>
        <img src={image} alt='button-icon' />
      </button>
    );
  }
}
