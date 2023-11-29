import '@/components/parts/Tab/Tab.css'
import { useState } from 'react';

/* Components */
import { TabButton } from '@/components/parts/Tab/TabButton';
import { Button } from '@/components/commons/Button';
import { TabPanel } from '@/components/parts/Tab/TabPanel';
import { ModifyInfoDetail } from '@/components/parts/Tab/ModifyInfoDetails';

/* Icons */
import iconReturn from '@/assets/images/icons/icon-back.svg';

/* Types */
import { IData } from '@/types/IData';

interface ITab<T> {
  tabs: string[];
  item: T;
}

export const Tab = ({
  tabs,
  item
}: ITab<IData>): JSX.Element => {

  const [activeTab, setActiveTab] = useState(0);

  /**
   * Active tab recognition to display different contents
   */
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-edit-wrapper">
      <div className="tab-edit">
        <Button icon={iconReturn} />
          {tabs.map((tab, index) => (
            <TabButton
              index={index}
              title={tab}
              key={`tab-item-${index}`}
              onTabClick={handleActiveTab}
              isActiveTab={activeTab === index}
          />
        ))}
      </div>

      <TabPanel>
        <ModifyInfoDetail
          activeTab={tabs[activeTab]}
          item={item}
        />
      </TabPanel>
    </div>
  );
};
