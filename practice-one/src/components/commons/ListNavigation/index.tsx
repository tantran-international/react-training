import { useEffect, useState } from 'react';

/* Components */
import { ItemNavigation } from '@/components/commons/ItemNavigation';

/* Icons */
import iconUserSelected from '@/assets/images/icons/icon-user-selected.svg';
import iconUser from '@/assets/images/icons/icon-user.svg';

/* Types */
interface IListNavigation {
  listItems: string[];
  onItemClick: (key: string) => void;
}

/* Helpers */
import { toCapitalizeFirstLetter } from '@/helpers/toCapitalize';

export const ListNavigation = ({
  listItems,
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
    listItem: string,
    index: number
  ) => {
    switch (listItem) {
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

  /* useEffect: auto selected listItem "users" as default */
  useEffect(() => {
    handleClickedItem('list-item-users', 0);
  }, []);

  return (
    <ul className='list-navigation'>
      {listItems.map((listItem, index) => (
        <ItemNavigation
          key={`list-item-${listItem}`}
          additionalClass={
            itemSelected == index
            ? 'list-item-selected'
            : ''
          }
          icon={renderListIcon(
            listItem,
            index
          )}
          content={toCapitalizeFirstLetter(listItem)}
          onItemClick={() => handleClickedItem(
            `list-item-${listItem}`,
            index
          )}
        />
      ))}
    </ul>
  );
};
