import { useEffect, useState } from 'react';

/* Components */
import { ItemNavigation } from '@/components/commons/ItemNavigation';

/* Icons */
import iconUserSelected from '@/assets/images/icons/icon-user-selected.svg';
import iconUser from '@/assets/images/icons/icon-user.svg';

/* Types */
interface IListNavigation {
  itemTypes: string[];
  onItemClick: (key: string) => void;
}

/* Containts */
import { ITEM_TYPE } from '@/constants/itemTypes';

/* Helpers */
import { toCapitalizeFirstLetter } from '@/helpers/strings';

export const ListNavigation = ({
  itemTypes,
  onItemClick
}: IListNavigation) => {
  const [itemSelected, setItemSelected] = useState<number | null>(null);

  /* Update styles for listItem when selected
  and get differece types of data base on keyItem */
  const handleClickedItem = (
    itemType: string,
    index: number
  ) => {
    setItemSelected(index);
    onItemClick(itemType);
  };

  /* Render difference listIcons for difference listItems */
  const renderListIcon = (
    type: string,
    index: number
  ) => {
    switch (type) {
      case ITEM_TYPE.USERS:
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
    handleClickedItem(ITEM_TYPE.USERS, 0);
  }, []);

  return (
    <ul className="list-navigation">
      {itemTypes.map((itemType, index) => (
        <ItemNavigation
          key={itemType}
          additionalClass={
            itemSelected == index
            ? "list-item-selected"
            : ""
          }
          icon={renderListIcon(
            itemType,
            index
          )}
          content={toCapitalizeFirstLetter(itemType)}
          onItemClick={() => handleClickedItem(
            itemType,
            index
          )}
        />
      ))}
    </ul>
  );
};
