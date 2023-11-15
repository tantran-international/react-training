import { useState } from 'react';
import './avatar.css';

// Types
import { TAvatar } from '@src/types/TAvatar';

export const Avatar = ({ additionalClass, user, variant }: TAvatar) => {
  const initialLetter = user.name.charAt(0);
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const [color, setRandomColor] = useState(`#${randomColor}`)

  return (
    <div
      className={
        variant == 'rounded'
          ? `avatar avatar-rounded avatar-${additionalClass} avatar-${user.key}`
          : `avatar avatar-${additionalClass}`
      }
      style={{backgroundColor: color}}
    >
      {user.avatar
        ? ( <img className='avatar-image' src={user.avatar} alt={`${user.name}-avatar`} /> )
        : ( initialLetter )
      }
    </div>
  );
};
