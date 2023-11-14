import { useState } from 'react';
import { createPortal } from 'react-dom';
import './tool-bar.css';

// Icons
import iconSearch from '@assets/images/icons/icon-search.svg';

// Components
import { Button } from '@components/commons/button/button';
import { SearchBar } from '@components/commons/search-bar/search-bar';

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
