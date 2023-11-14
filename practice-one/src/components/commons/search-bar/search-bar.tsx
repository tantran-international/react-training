import { TextField } from '../text-field/text-field';
import { Button } from '../button/button';
import iconClose from '@assets/images/icons/icon-close.svg';
import { TSearchBar } from '@src/types/TSearchBar';
import './search-bar.css';

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
        additionalClass='search'
        icon={iconClose}
        onClick={onClose}
      />
    </div>
  );
};
