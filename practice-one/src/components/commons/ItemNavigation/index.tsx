import { TListItem } from '@src/types/TListItem';
import './item-navigation.css';

export const ItemNavigation = ({
  additionalClass,
  icon,
  content,
  onClick
}: TListItem) => {
  return (
    <li
      className={`list-item list-item-${additionalClass}`}
      onClick={onClick}
    >
      <span className='list-icon-wrapper'>
        <img
          className='list-icon'
          src={`${icon}`}
        />
      </span>
      <p className='list-item-content'>{content}</p>
    </li>
  );
};
