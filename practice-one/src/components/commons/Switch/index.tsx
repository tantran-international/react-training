import { useState } from 'react';
import './Switch.css';

/* Types */
import { TSwitch } from '@src/types/TSwitch';

export const Switch = ({ additionalClass, isActive }: TSwitch) => {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <label className={`switch-container ${additionalClass}`}>
      <input
        type='checkbox'
        checked={isActive ? checked : !checked}
        onChange={handleToggle}
      />
      <span className='switch' />
    </label>
  );
};
