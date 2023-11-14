import { ItemNavigation } from '../item-navigation/item-navigation';
import iconUserSelected from '@assets/images/icons/icon-user-selected.svg';
import iconUser from '@assets/images/icons/icon-user.svg';
import { useState } from 'react';

export const ListNavigation = () => {
  const [isSelected, setSelected] = useState(true);

  const handleClickedItem = () => {
    setSelected(true);
  };

  return (
    <ul className='list-navigation'>
      <ItemNavigation
          additionalClass={isSelected ? 'selected' : ''}
          icon={isSelected ? iconUserSelected : iconUser}
          content='Users'
          onClick={handleClickedItem}
        />
    </ul>
  );
};
