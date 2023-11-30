import './ItemNavigation.css';

/* Types */
interface IListItem {
  additionalClass?: string;
  icon?: string;
  content: string;
  onItemClick: () => void;
};

export const ItemNavigation = ({
  additionalClass,
  icon,
  content,
  onItemClick
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
