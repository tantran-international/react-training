import '@/App.css';
import { useState, useEffect } from 'react';

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
  registeredDate: null
};

export const App = () => {
  /* Handle selected listItem, default is "users" listItem */
  const [itemSelected, setItemSelected] = useState<string | null>(
    'list-item-users'
  );
  const [users, setUsers] = useState<[]>([]);

  /* Get new datas and re-render UI when data is changed */
  const callBackGetUsers = async () => {
    const { data, error } = await getUsers();
    /* If any error occurred, show empty data and alert */
    {
      error == null
        ? setUsers(data)
        : (setUsers([]), alert('Something when wrong'));
    }
  };

  /* Get difference datas for difference listItem */
  const handleItemSelected = async (itemKey: string) => {
    setItemSelected(itemKey);
    switch (itemKey) {
      case 'list-item-users':
        const { data, error } = await getUsers();
        if (error) {
          alert('Something when wrong');
          return;
        }
        setUsers(data);
        break;

      default:
        break;
    }
  };

  /* useEffect: implement getUsers (method get) and assign data as (users state) */
  useEffect(() => {
    switch (itemSelected) {
      case 'list-item-users':
        console.log('');
        const fetchUsersData = async () => {
          const { data, error } = await getUsers();
          /* If any error occurred, show empty data and alert */
          {
            error == null
              ? setUsers(data)
              : (setUsers([]), alert('Something when wrong'));
          }
        };
        fetchUsersData();
        break;

      default:
        break;
    }
  }, []);

  return (
    <>
      <header className='main-header'>User Manager</header>
      <div className='main-body'>
        <Drawer>
          <Popper onModalSubmit={callBackGetUsers} />
          <ListNavigation
            listItems={['users']}
            onItemClick={handleItemSelected}
          />
        </Drawer>

        <div className='app-content-wrapper'>
          <ToolBar content='Users' />
          <Table data={users} columns={columns} />
        </div>

        <Tab tabs={['General']} item={item} />
      </div>
    </>
  );
};
