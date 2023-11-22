import './App.css';

/* Components */
import { Popper } from '@/components/commons/Popper';
import { ListNavigation } from '@/components/commons/ListNavigation';
import { Drawer } from '@/components/parts/Drawer';
import { ToolBar } from '@/components/parts/ToolBar';
import { Table } from '@/components/parts/Table';
import { Avatar } from '@/components/commons/Avatar';

/* Types */
import { IColumnType } from '@/types/ITable';

interface IData {
  avatar: string;
  fullName: string;
  status: boolean;
  email: string;
}

const columns: IColumnType<IData>[] = [
  {
    key: 'avatar',
    title: '',
    render: (_, item) => (
        <Avatar
          additionalClass='avatar-row'
          variant='rounded'
          src={item.avatar != ''
            ? item.avatar
            : null
          }
          alt={item.fullName}/>
    )
  },
  {
    key: "fullName",
    title: "Full Name",
  },
  {
    key: "status",
    title: "Status"
  },
  {
    key: "email",
    title: "Email",
  },
];

const data: IData[] = [
  {
    avatar: '',
    fullName: "Tran Duy Tan",
    status: true,
    email: "duytantran.it@gmail.com"
  },
  {
    avatar: '',
    fullName: "Mua Hong",
    status: false,
    email: "tranduytan597@gmail.com"
  },
];

export const App = () => {
  return (
    <>
      <header className='user-manager-header'>User Manager</header>

      <div className='app-body'>
        <Drawer>
          <div className='popper-wrapper'>
            <Popper />
          </div>
          <ListNavigation />
        </Drawer>

        <div className='app-content-wrapper'>
          <ToolBar content='Users' />
          <Table
            data={data}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
}
