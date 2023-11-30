import { useEffect, useState } from 'react';

/* Components */
import { ItemNavigation } from '@/components/commons/ItemNavigation';

/* Icons */
import iconUserSelected from '@/assets/images/icons/icon-user-selected.svg';
import iconUser from '@/assets/images/icons/icon-user.svg';

/* Types */
interface IListNavigation {
  types: string[];
  onItemClick: (key: string) => void;
}

/* Helpers */
import { toCapitalizeFirstLetter } from '@/helpers/toCapitalize';

export const ListNavigation = ({
  types,
  onItemClick
}: IListNavigation) => {
  const [itemSelected, setItemSelected] = useState<number | null>(null);

  /* Update styles for listItem when selected
  and get differece types of data base on keyItem */
  const handleClickedItem = (
    itemKey: string,
    index: number
  ) => {
    setItemSelected(index);
    onItemClick(itemKey);
  };

  /* Render difference listIcons for difference listItems */
  const renderListIcon = (
    type: string,
    index: number
  ) => {
    switch (type) {
      case 'users':
        const condition = (itemSelected == index)
          ? iconUserSelected
          : iconUser;
        return condition;
        break;

      default:
        break;
    }
  };

  /* Auto selected listItem has type "users" as default */
  useEffect(() => {
    handleClickedItem('list-item-users', 0);
  }, []);

  return (
    <ul className='list-navigation'>
      {types.map((type, index) => (
        <ItemNavigation
          key={`list-item-${type}`}
          additionalClass={
            itemSelected == index
            ? 'list-item-selected'
            : ''
          }
          icon={renderListIcon(
            type,
            index
          )}
          content={toCapitalizeFirstLetter(type)}
          onItemClick={() => handleClickedItem(
            `list-item-${type}`,
            index
          )}
        />
      ))}
    </ul>
  );
};
