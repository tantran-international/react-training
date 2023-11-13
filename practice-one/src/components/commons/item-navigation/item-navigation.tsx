import { TListItem } from '@src/types/TListItem';
import './item-navigation.css';

export const ItemNavigation = ({ icon, content, onClick }: TListItem) => {
  return (
    <li className='list-item' onClick={onClick}>
      <span className='list-icon-wrapper'>
        <img className='list-icon' src={`${icon}`} />
      </span>
      <p className='list-item-content'>{content}</p>
    </li>
  );
};
