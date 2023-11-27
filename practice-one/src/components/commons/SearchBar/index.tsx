import '@/components/commons/SearchBar/SearchBar.css';

// Components
import { TextField } from '@/components/commons/TextField';
import { Button } from '@/components/commons/Button';

// Icons
import iconClose from '@/assets/images/icons/icon-close.svg';

// Types
import { TSearchBar } from '@/types/TSearchBar';


export const SearchBar = ({
  additionalClass,
  onClose,
  onChange
}: TSearchBar) => {
  return (
    <div className={`search-bar search-bar-${additionalClass}`}>
      <TextField
        additionalClass='text-field-search'
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
