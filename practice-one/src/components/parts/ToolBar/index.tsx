import { useState } from 'react';
import { createPortal } from 'react-dom';
import '@/components/parts/ToolBar/ToolBar.css';

// Icons
import iconSearch from '@/assets/images/icons/icon-search.svg';

// Components
import { Button } from '@/components/commons/Button';
import { SearchBar } from '@/components/commons/SearchBar';

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
