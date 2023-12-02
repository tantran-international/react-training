import '@/components/commons/Button/Button.css';

import { MouseEventHandler } from 'react';

/* Types */
interface IButton {
  type: "button" | "submit" | "reset";
  form?: string;
  additionalClass?: string;
  icon?: string;
  content?: string;
  onClick?: MouseEventHandler;
};

export function Button({
  type,
  additionalClass,
  icon,
  content,
  form,
  onClick
}: IButton) {
  if (icon) {
    return (
      <button
        type={type}
        form={form}
        className={`button-icon ${additionalClass}`}
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
      type={type}
      form={form}
      className={`button ${additionalClass}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
