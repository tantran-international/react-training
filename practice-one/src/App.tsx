import '@/App.css';

import { useState } from 'react';

import { createPortal } from 'react-dom';

/* Components */
import { Popper } from '@/components/commons/Popper';
import { ListNavigation } from '@/components/commons/ListNavigation';
import { Drawer } from '@/components/parts/Drawer';
import { ToolBar } from '@/components/parts/ToolBar';
import { Table } from '@/components/parts/Table';
import { Avatar } from '@/components/commons/Avatar';
import { Status } from '@/components/commons/Status';
import { CardInformation } from '@/components/parts/CardInformation';
import { Tab } from '@/components/parts/Tab';

/* Types */
import { IColumnType } from '@/types/IColumnTypes';
import { IData } from '@/types/IDatas';

/* Services */
import { getUsers } from '@/services/usersService';

/* Constaints */
import { ITEM_TYPES, ITEM_TYPE } from '@/constants/itemTypes';
import { CARD_TYPES } from '@/constants/cardTypes';
import { SHOW_DETAILS } from '@/constants/showDetailsTypes';
import { TAB_TYPES } from '@/constants/tabTypes';

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
  const [rowIndex, setRowIndex] = useState(0);
  const [rowData, setRowData] = useState<IData | null>(null);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  /* Get new datas and re-render UI when data is changed */
  const handleGetUsers = async () => {
    const {
      data,
      error
    } = await getUsers();
    if (error) {
      alert('Something went wrong');
      return;
    }
    setUsers(data);
  };

  /* Close card information and render editor information */
  const handleShowEditor = () => {
    setShowDetails(SHOW_DETAILS.EDITOR);
  }

  /* Close editor and render card information */
  const handleCloseEditor = () => {
    setShowDetails(SHOW_DETAILS.INFO);
  }

  /* Get data and row-index of table row && show information details */
  const handleSelectedRow = (
    index: number,
    dataItem: IData
  ): void => {
    setRowData(dataItem);
    setRowIndex(index);
    setShowDetails(SHOW_DETAILS.INFO);
  };

  /* Get data to Re-render UI and auto show lastest User's Information */
  const handleAddNewRow = async () => {
    const {
      data,
      error
    } = await getUsers();
    const lastDataItem = data[data.length - 1];
    if (error) {
      alert('Something went wrong');
      return;
    }
    setUsers(data);
    setRowData(lastDataItem);
    setRowIndex(data.length);
    setShowDetails(SHOW_DETAILS.INFO);
  };

  /* Get and render datas based on list-item's types */
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
          <Popper onModalSubmit={handleAddNewRow} />
          <ListNavigation
            itemTypes={ITEM_TYPES}
            onItemClick={handleItemSelected}
          />
        </Drawer>

        <div className='app-content-wrapper'>
          <ToolBar content='Users' />
          <Table
            onRowClick={handleSelectedRow}
            data={users}
            columns={columns}
            selectedRowIndex={rowIndex}
          />
        </div>

        {(showDetails == SHOW_DETAILS.INFO && rowData != null) &&
          createPortal(
            <CardInformation
              title={CARD_TYPES.USERS}
              status={rowData.isActive}
              avatar={rowData.avatar}
              fullName={rowData.fullName}
              email={rowData.email}
              bgColor={rowData.bgColor}
              lastVisitedDate={rowData.lastVisitedDate}
              onEditButtonCLick={handleShowEditor}
            />,
            document.querySelector('.main-body') as HTMLElement
          )}

          {(showDetails == SHOW_DETAILS.EDITOR && rowData != null) &&
            createPortal(
              <Tab tabs={TAB_TYPES} dataItem={rowData} onReturnButtonClick={handleCloseEditor}/>,
              document.querySelector('.main-body') as HTMLElement
            )
          }
      </div>
    </>
  );
};
