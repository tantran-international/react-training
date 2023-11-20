import { useState } from 'react';
import { createPortal } from 'react-dom';
import './ToolBar.css';

// Icons
import iconSearch from '@assets/images/icons/icon-search.svg';

// Components
import { Button } from '@components/commons/Button/index';
import { SearchBar } from '@components/commons/SearchBar/index';

export const ToolBar = ({ content }: { content: string }) => {
  const [isOpenSearchBar, setOpenSearchBar] = useState(false);

  return (
    <nav className='tool-bar-wrapper'>
      <p>{content}</p>
      <Button
        additionalClass='search'
        icon={iconSearch}
        onClick={() => setOpenSearchBar(true)}
      />
      {isOpenSearchBar &&
        createPortal(
          <SearchBar
            additionalClass='user'
            onClose={() => setOpenSearchBar(false)}
          />,
          document.querySelector('.tool-bar-wrapper') as HTMLElement
        )}
    </nav>
  );
};
