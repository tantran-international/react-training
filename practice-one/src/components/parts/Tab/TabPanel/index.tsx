import { ReactNode } from 'react';

interface TTabPanel {
  children: ReactNode;
  additionalClass?: string;
}

export const TabPanel = ({
  children,
  additionalClass
}: TTabPanel) => {
  return (
    <div className={`tab-panel-wrapper ${additionalClass}`}>
      {children}
    </div>
  );
};
