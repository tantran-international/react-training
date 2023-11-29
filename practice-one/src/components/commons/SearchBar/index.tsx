import '@/components/commons/SearchBar/SearchBar.css';

// Components
import { TextField } from '@/components/commons/TextField';
import { Button } from '@/components/commons/Button';

// Icons
import iconClose from '@/assets/images/icons/icon-close.svg';

// Types
interface ISearchBar {
  additionalClass?: string;
  onClose?: () => void;
  onChange?: () => void;
}

export const SearchBar = ({
  additionalClass,
  onClose,
  onChange
}: ISearchBar) => {
  return (
    <div className={`search-bar search-bar-${additionalClass}`}>
      <TextField
        id='input-search-user'
        name='input-search-user'
        placeholder='Search'
        onInputChange={() => {}}
        additionalClass='text-field-search'
        isAutoFocus={true}
      />
      <Button
        additionalClass='close'
        icon={iconClose}
        onClick={onClose}
      />
    </div>
  );
};
