import './Avatar.css';

/* Types */
interface IAvatar {
  additionalClass?: string;
  src?: string | null;
  alt: string;
  bgColor?: string;
  variant: 'rounded' | 'square';
}

export const Avatar = ({
  additionalClass,
  src,
  alt,
  bgColor,
  variant
}: IAvatar) => {

  /* Get first Letter of alt */
  const initialLetter = alt.charAt(0);

  /**
   *
   * @returns - HTMLElement || string
   */
  const renderAvatar = () => {
    return (
      src
      ? <img
          className="avatar-image"
          src={src}
          alt={alt}
        />
      : initialLetter
    )
  };

  return (
    <div
      className={
        variant == 'rounded'
          ? `avatar avatar-rounded ${additionalClass}`
          : `avatar ${additionalClass}`
      }
      style={{ backgroundColor: bgColor }}
    >
      {renderAvatar()}
    </div>
  );
};
