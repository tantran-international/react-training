import '@/components/commons/Avatar/Avatar.css';

/* Types */
interface IAvatar {
  src?: string | null;
  alt: string;
  bgColor?: string;
  variant: 'rounded' | 'square';
  additionalClass?: string;
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

  /* Handle render Avatar */
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
