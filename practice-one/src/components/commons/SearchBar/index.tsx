import './SearchBar.css';

// Components
import { TextField } from '../TextField/index';
import { Button } from '../Button/index';

// Icons
import iconClose from '@assets/images/icons/icon-close.svg';

// Types
import { TSearchBar } from '@src/types/TSearchBar';


export const SearchBar = ({
  additionalClass,
  onClose,
  onChange
}: TSearchBar) => {
  return (
    <div className={`search-bar search-bar-${additionalClass}`}>
      <TextField
        additionalClass='search'
        placeholder='Search'
      />
      <Button
        additionalClass='close'
        icon={iconClose}
        onClick={onClose}
      />
    </div>
  );
};
