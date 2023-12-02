import '@/components/commons/ItemNavigation/ItemNavigation.css';

/* Types */
interface IListItem {
  additionalClass?: string;
  onItemClick: () => void;
  icon?: string;
  content: string;
};

export const ItemNavigation = ({
  additionalClass,
  onItemClick,
  icon,
  content
}: IListItem) => {
  return (
    <li
      className={`list-item ${additionalClass}`}
      onClick={onItemClick}
    >
      <span className="list-icon-wrapper">
        <img
          className="list-icon"
          src={`${icon}`}
        />
      </span>
      <p className="list-item-content">{content}</p>
    </li>
  );
};
