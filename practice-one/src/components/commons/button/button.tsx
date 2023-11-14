import { TButton } from '@src/types/TButton';
import './button.css';

export function Button({ additionalClass, icon, content, onClick }: TButton) {
  if (icon) {
    return (
      <button
        className={`button-icon button-${additionalClass}`}
        type='button'
        onClick={onClick}
      >
        <span className={`icon-wrapper icon-wrapper-${additionalClass}`}>
          <img
            className={`icon icon-${additionalClass}`}
            src={icon}
            alt='button-icon'
          />
        </span>
      </button>
    );
  }

  return (
    <button
      className={`button button-${additionalClass}`}
      type='button'
      onClick={onClick}
    >
      {content}
    </button>
  );
}
