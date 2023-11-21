import './App.css';

/* Components */
import { Popper } from '@/components/commons/Popper';
import { ListNavigation } from '@/components/commons/ListNavigation';
import { Drawer } from '@/components/parts/Drawer';
import { ToolBar } from '@/components/parts/ToolBar';
import { Table } from '@/components/parts/Table';

import { IColumnType } from './types/ITable';

interface IData {
  fullName: string;
  status: string;
  email: string[];
}

const columns: IColumnType<IData>[] = [
  {
    key: "fullName",
    title: "Full Name",
  },
  {
    key: "status",
    title: "Status",
  },
  {
    key: "email",
    title: "Email",
  },
];

const data: IData[] = [
  {
    fullName: "Francisco Mendes",
    status: "Full Stack",
    email: ["dev", "blogger"],
  },
  {
    fullName: "Ricardo Malva",
    status: "Social Media Manager",
    email: ["designer", "photographer"],
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
          <Table data={data} columns={columns}/>
        </div>
      </div>
    </>
  );
}
