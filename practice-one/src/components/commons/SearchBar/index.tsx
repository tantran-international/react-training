import '@/components/commons/SearchBar/SearchBar.css';

import { FormEvent } from 'react';

// Components
import { TextField } from '@/components/commons/TextField';
import { Button } from '@/components/commons/Button';

// Icons
import iconClose from '@/assets/images/icons/icon-close.svg';

// Types
interface ISearchBar {
  additionalClass?: string;
  onSearchBarClose?: () => void;
  onSearchBarChange: (event: FormEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  additionalClass,
  onSearchBarClose,
  onSearchBarChange,
}: ISearchBar) => {

  return (
    <div className={`search-bar search-bar-${additionalClass}`}>
      <TextField
        id="input-search-user"
        name="input-search-user"
        placeholder="Search"
        onInputSearch={onSearchBarChange}
        additionalClass="text-field-search"
        isAutoFocus={true}
      />
      <Button
        type="button"
        additionalClass="close"
        icon={iconClose}
        onClick={onSearchBarClose}
      />
    </div>
  );
};
