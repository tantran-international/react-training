import { useState } from 'react';
import Popper from '@mui/material/Popper';
import './popper.css';

export function AddNewPopper() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'add-new-popper' : undefined;

  return (
    <div>
      <button className='btn-cta btn-add' type='button' onClick={handleClick}>
        + New
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <button className='btn-cta btn-popper' type='button'>
          Add new user
        </button>
      </Popper>
    </div>
  );
}
