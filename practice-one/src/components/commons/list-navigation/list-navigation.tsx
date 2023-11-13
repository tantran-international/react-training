import { ItemNavigation } from '../item-navigation/item-navigation';
import iconSelectedUser from '@assets/images/icons/icon-user-selected.svg';
import iconUser from '@assets/images/icons/icon-user.svg';
import './list.navigation.css';
import { useState } from 'react';

export const ListNavigation = () => {
  const [isSelected, setSelected] = useState(false);

  const handleClickedItem = () => {
    setSelected(!isSelected);
  };

  return (
    <ul className='list-navigation'>
      {isSelected ? (
        <ItemNavigation
          additionalClass='selected'
          icon={iconSelectedUser}
          content='Users'
          onClick={handleClickedItem}
        />
      ) : (
        <ItemNavigation
          icon={iconUser}
          content='Users'
          onClick={handleClickedItem}
        />
      )}
    </ul>
  );
};
