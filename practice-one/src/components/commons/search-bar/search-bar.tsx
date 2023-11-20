import './search-bar.css';

// Components
import { TextField } from '../text-field/text-field';
import { Button } from '../Button';

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
