import '@/App.css';

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

/* Define column's titles and datatypes as variable */
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

/* Mock data */
const data: IData[] = [
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  },
  {
    avatar: '',
    fullName: 'Tran Duy Tan',
    isActive: true,
    email: 'duytantran.it@gmail.com',
    bgColor: '#c79a1e'
  },
  {
    avatar: '',
    fullName: 'Mua Hong',
    isActive: false,
    email: 'tranduytan597@gmail.com',
    bgColor: '#c71ec4'
  }
];

const item: IData = {
  avatar: '',
  fullName: 'Mua Hong',
  isActive: false,
  email: 'tranduytan597@gmail.com',
  bgColor: '#c71ec4'
};

export const App = () => {
  const ArrayTab = ['General', 'Roles'];

  return (
    <>
      <header className='main-header'>User Manager</header>

      <div className='main-body'>
        <Drawer>
          <Popper />
          <ListNavigation />
        </Drawer>

        <div className='app-content-wrapper'>
          <ToolBar content='Users' />
          <Table data={data} columns={columns} />
        </div>

        <Tab tabs={ArrayTab} item={item}/>
      </div>
    </>
  );
};
