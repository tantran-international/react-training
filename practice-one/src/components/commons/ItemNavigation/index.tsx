import './ItemNavigation.css';

/* Types */
interface IListItem {
  additionalClass?: string;
  icon: string;
  content: string;
  onClick?: () => void;
};

export const ItemNavigation = ({
  additionalClass,
  icon,
  content,
  onClick
}: IListItem) => {
  return (
    <li
      className={`list-item list-item-${additionalClass}`}
      onClick={onClick}
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
