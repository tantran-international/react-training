import { FormEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import '@/components/parts/ToolBar/ToolBar.css';

// Icons
import iconSearch from '@/assets/images/icons/icon-search.svg';

// Components
import { Button } from '@/components/commons/Button';
import { SearchBar } from '@/components/commons/SearchBar';

/* Types */
interface IToolbar {
  type: string;
  onSearchBarChange: (event: FormEvent<HTMLInputElement>) => void;
  onSearchBarClose: () => void;
}

export const ToolBar = ({
    type,
    onSearchBarChange,
    onSearchBarClose
  }: IToolbar) => {
  const [isOpenSearchBar, setOpenSearchBar] = useState(false);

  /* Close searchBar and execute onSearchBarClose function */
  const handleSearchBarClose = () => {
    setOpenSearchBar(false);
    onSearchBarClose();
  }

  return (
    <nav className="tool-bar-wrapper">
      <h2 className="tool-bar-heading">{type}</h2>
      <Button
        type="button"
        additionalClass="search"
        icon={iconSearch}
        onClick={() => setOpenSearchBar(true)}
      />
      {isOpenSearchBar &&
        createPortal(
          <SearchBar
            additionalClass="user"
            onSearchBarClose={handleSearchBarClose}
            onSearchBarChange={onSearchBarChange}
          />,
          document.querySelector(".tool-bar-wrapper") as HTMLElement
        )}
    </nav>
  );
};
