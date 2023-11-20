import './Avatar.css';

/* Types */
import { TAvatar } from '@/types/TAvatar';

export const Avatar = ({
  additionalClass,
  src,
  alt,
  bgColor,
  variant
}: TAvatar) => {

  /* Get first Letter of alt */
  const initialLetter = alt.charAt(0);

  /**
   * Render image for avatar component
   * @param src - url of images
   * @param alt - name of user
   * @param initialLetter - first letter of alt
   */
  const renderAvatar = () => {
    return (
      src
      ? <img
          className='avatar-image'
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
