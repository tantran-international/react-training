import '@/App.css';
import { useEffect, useState } from 'react';

/* Components */
import { Popper } from '@/components/commons/Popper';
import { ListNavigation } from '@/components/commons/ListNavigation';
import { Drawer } from '@/components/parts/Drawer';
import { ToolBar } from '@/components/parts/ToolBar';
import { Table } from '@/components/parts/Table';
import { Avatar } from '@/components/commons/Avatar';
import { Status } from '@/components/commons/Status';
import { Tab } from '@/components/parts/Tab';

/* Types */
import { IColumnType } from '@/types/ITable';
import { IData } from '@/types/IData';

/* Services */
import { getUsers } from '@/services/usersService';

/* Constaints */
import { ITEM_TYPES, ITEM_TYPE } from '@/constants/itemTypes';

/* Define column's titles and it's UI */
const columns: IColumnType<IData>[] = [
  {
    key: 'avatar',
    title: '',
    render: (_, item) => (
      <Avatar
        additionalClass='avatar-row'
        variant='rounded'
        src={item.avatar != '' ? item.avatar : null}
        alt={item.fullName}
        bgColor={item.bgColor}
      />
    )
  },
  {
    key: 'fullName',
    title: 'Full Name'
  },
  {
    key: 'isActive',
    title: 'Status',
    render: (_, item) => <Status isActive={item.isActive} />
  },
  {
    key: 'email',
    title: 'Email'
  }
];

const item: IData = {
  avatar: '',
  id: 'đsfsà',
  fullName: 'Mua Hong',
  isActive: false,
  email: 'tranduytan597@gmail.com',
  bgColor: '#c71ec4',
  registeredDate: null,
  lastVisitedDate: null
};

export const App = () => {
  const [users, setUsers] = useState<[]>([]);

  /* Get new datas and re-render UI when data is changed */
  const handleGetUsers = async () => {
    const { data, error } = await getUsers();
    if (error) {
      alert('Something went wrong');
      return;
    }
    setUsers(data);
  };

  /* Get difference datas for difference listItem */
  const handleItemSelected = async (itemKey: string) => {
    switch (itemKey) {
      case ITEM_TYPE.USERS:
        handleGetUsers();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <header className='main-header'>User Manager</header>
      <div className='main-body'>
        <Drawer>
          <Popper onModalSubmit={handleGetUsers} />
          <ListNavigation
            itemTypes={ITEM_TYPES}
            onItemClick={handleItemSelected}
          />
        </Drawer>

        <div className='app-content-wrapper'>
          <ToolBar content='Users' />
          <Table data={users} columns={columns} />
        </div>

        {/* <Tab tabs={['General']} item={item} /> */}
      </div>
    </>
  );
};
