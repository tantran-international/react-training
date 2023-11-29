import { useState } from 'react';

// Components
import { ItemNavigation } from '@/components/commons/ItemNavigation';

// Icons
import iconUserSelected from '@/assets/images/icons/icon-user-selected.svg';
import iconUser from '@/assets/images/icons/icon-user.svg';

export const ListNavigation = () => {
  const [isSelected, setSelected] = useState(true);

  /**
   * Update state of list-navigation to update styles
   * @param {function} setSelected - function name used for update state.
   */
  const handleClickedItem = () => {
    setSelected(true);
  };

  return (
    <ul className='list-navigation'>
      <ItemNavigation
          additionalClass={
            isSelected
              ? 'selected'
              : ''
          }
          icon={
            isSelected
              ? iconUserSelected
              : iconUser
          }
          content="Users"
          onClick={handleClickedItem}
        />
    </ul>
  );
};
