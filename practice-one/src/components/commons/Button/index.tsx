import { TButton } from '@/types/TButton';
import '@/components/commons/Button/Button.css';

export function Button({
  additionalClass,
  icon,
  content,
  onClick
}: TButton) {
  if (icon) {
    return (
      <button
        className={`button-icon ${additionalClass}`}
        type="button"
        onClick={onClick}
      >
        <span className={`icon-wrapper`}>
          <img
            className={`icon`}
            src={icon}
            alt="button-icon"
          />
        </span>
      </button>
    );
  }

  return (
    <button
      className={`button ${additionalClass}`}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  );
}
