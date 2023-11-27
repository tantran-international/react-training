import '@/components//commons/Tab/Tab.css';
import { useState } from 'react';
/* Components */
import { TabButton } from '@/components/commons/Tab/TabButton';
import { Button } from '@/components/commons/Button';
import { TabPanel } from '@/components/commons/Tab/TabPanel';
/* Icons */
import iconReturn from '@/assets/images/icons/icon-back.svg';
import { TextField } from '@/components/commons/TextField';
import { IData } from '@/App';
import { Avatar } from '../Avatar';
/* Types */
interface ITab<T> {
  tabs: string[];
  item: T;
}
export const Tab = ({ tabs, item }: ITab<IData>): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const [fullName, setFullname] = useState(item.fullName);
  const [email, setEmail] = useState(item.email);
  /* Helpers */
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  const handleFullNameChange = (value: string) => {
    setFullname(value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const renderTabBody = (tabs: string[], activeTab: number) => {
    {
      switch (tabs[activeTab]) {
        case 'General':
          return (
            <>
              <div className='tab-toolbar'>
                <Button additionalClass='button-secondary' content='Delete' />
                <Button additionalClass='button-primary' content='Save' />
              </div>
              <form className='form-edit-user'>
                <div>
                  <TextField
                    label='Full Name'
                    id='edit-name'
                    name='edit-name'
                    value={fullName}
                    onInputChange={handleFullNameChange}
                    additionalClass='text-field-edit'
                  />
                </div>
                <div>
                  <TextField
                    label='Email'
                    id='edit-email'
                    name='edit-email'
                    value={email}
                    onInputChange={handleEmailChange}
                    additionalClass='text-field-edit'
                  />
                </div>
                <div>
                  <label htmlFor=''>Avatar</label>
                  <Avatar
                    src={item.avatar}
                    alt={item.fullName}
                    bgColor={item.bgColor}
                    variant='square'
                    additionalClass='avatar-edit-information'
                  />
                  <button type='button'>
                    <span className='button-upload-icon'></span>Upload new photo
                  </button>
                  <input type='file' accept="image/*" />
                </div>
              </form>
            </>
          );
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className='tab-edit-wrapper'>
      <div className='tab-edit'>
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
      <TabPanel>{renderTabBody(tabs, activeTab)}</TabPanel>
    </div>
  );
};
