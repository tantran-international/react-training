import { useState } from 'react';

import '@/components/parts/Tab/Tab.css';

/* Components */
import { TabButton } from '@/components/parts/Tab/TabButton';
import { Button } from '@/components/commons/Button';
import { ModifyInfoDetails } from '@/components/parts/Tab/ModifyInfoDetails';

/* Icons */
import iconReturn from '@/assets/images/icons/icon-back.svg';

/* Types */
import { IData } from '@/types/IDatas';

interface ITab<T> {
  tabs: string[];
  dataItem: T;
  onReturnButtonClick: () => void;
  onSubmitForm: (dataItem: IData) => void;
  onDeleteUser: (id: string) => void;
}

export const Tab = ({
  tabs,
  dataItem,
  onReturnButtonClick,
  onSubmitForm,
  onDeleteUser
}: ITab<IData>): JSX.Element => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  /* Active tab recognition to display different ModifyInfoDetail */
  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };

  /* Define name value of active tab */
  const tabData = tabs[activeTabIndex];

  return (
    <div className="tab-edit-wrapper">
      <div className="tab-edit">
        <Button type="button" icon={iconReturn} onClick={onReturnButtonClick} />
        {tabs.map((tab, index) => (
          <TabButton
            index={index}
            title={tab}
            key={`tab-item-${index}`}
            onTabClick={handleActiveTab}
            isActiveTab={activeTabIndex === index}
          />
        ))}
      </div>
      <ModifyInfoDetails
        activeTab={tabData}
        dataItem={dataItem}
        onSubmitForm={onSubmitForm}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
};
