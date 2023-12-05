import '@/App.css';

import { useState, FormEvent } from 'react';

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
import { IUsers } from './types/IUsers';

/* Services */
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser
} from '@/services/usersService';

/* Constaints */
import { ITEM_TYPES, ITEM_TYPE } from '@/constants/itemTypes';
import { CARD_TYPES } from '@/constants/cardTypes';
import { SHOW_DETAILS } from '@/constants/showDetailsTypes';
import { TAB_TYPES } from '@/constants/tabTypes';

/* Helpers */
import { filterUserName } from '@/helpers/arrays';

/* Define column's titles and it's UI */
const columns: IColumnType<IUsers>[] = [
  {
    key: 'avatar',
    title: '',
    render: (_, item) => (
      <Avatar
        additionalClass='avatar-row'
        variant='rounded'
        src={item.avatar != null ? item.avatar : null}
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

export const App = () => {
  const [apiUsers, setApiUsers] = useState<IUsers[]>([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [rowData, setRowData] = useState<IUsers | null>(null);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<IUsers[]>([]);

  /* Get new datas and re-render UI */
  const handleGetUsers = async () => {
    const { data, error } = await getUsers();
    if (error) {
      alert("Something went wrong");
      return;
    }
    setApiUsers(data);
    setFilteredUsers(data);
  };

  /* Create new dataItem and add to database */
  const handleAddNewUser = async (userName: string) => {
    const { error } = await addUser(userName);
    {
      error && alert("Something went wrong");
    }
  };

  /* Get data to Re-render UI and auto show lastest User"s Information */
  const handleAddNewRow = async (userName: string) => {
    await handleAddNewUser(userName);
    const { data, error } = await getUsers();
    if (error) {
      alert("Something went wrong");
      return;
    }
    const lastDataItem = data[data.length - 1];
    setApiUsers(data);
    setFilteredUsers(data);
    setRowData(lastDataItem);
    setRowIndex(data.length);
    setShowDetails(SHOW_DETAILS.INFO);
  };

  /* Update datas and re-render UI */
  const handleUpdateUser = async (itemData: IUsers) => {
    const { data, error } = await updateUser(itemData);
    if (error) {
      alert("Something went wrong");
      return;
    }
    setRowData(data);
    handleGetUsers();
  };

  /* Close EditorDetails and remove remove specified data */
  const handleDeleteUser = async (dataId: string) => {
    const { error } = await deleteUser(dataId);
    if (error) {
      alert("Something went wrong");
      return;
    }
    handleGetUsers();
    setShowDetails(null);
  };

  /* Close card information and open editor information */
  const handleShowEditor = () => {
    setShowDetails(SHOW_DETAILS.EDITOR);
  };

  /* Close editor and open card information */
  const handleCloseEditor = () => {
    setShowDetails(SHOW_DETAILS.INFO);
  };

  /* Get data and row-index of table row && show information details */
  const handleSelectedRow = (index: number, dataItem: IUsers): void => {
    setRowData(dataItem);
    setRowIndex(index);
    if (showDetails == SHOW_DETAILS.INFO || showDetails == null) {
      setShowDetails(SHOW_DETAILS.INFO);
    } else if (showDetails == SHOW_DETAILS.EDITOR) {
      setShowDetails(SHOW_DETAILS.EDITOR);
    }
  };

  /* Get and render datas based on list-item's types */
  const handleItemSelected = (itemKey: string) => {
    switch (itemKey) {
      case ITEM_TYPE.USERS:
        handleGetUsers();
        break;

      default:
        break;
    }
  };

  /* Find user's fullName with serach keywork */
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const searchKeyWord = event.currentTarget.value;
    const filteredItems = filterUserName(
      apiUsers,
      searchKeyWord
    );
    setFilteredUsers(filteredItems);
  };

  /* Render all users when SearchBar is closed */
  const handleClosedSearchBar = () => {
    setFilteredUsers(apiUsers);
  }

  return (
    <>
      <header className="main-header">User Manager</header>
      <div className="main-body">
        <Drawer>
          <Popper onModalSubmit={handleAddNewRow} />
          <ListNavigation
            itemTypes={ITEM_TYPES}
            onItemClick={handleItemSelected}
          />
        </Drawer>

        <div className="app-content-wrapper">
          <ToolBar
            type="Users"
            onSearchBarChange={handleInputChange}
            onSearchBarClose={handleClosedSearchBar}
          />
          <Table
            onRowClick={handleSelectedRow}
            data={filteredUsers}
            columns={columns}
            selectedRowIndex={rowIndex}
          />
        </div>

        {showDetails == SHOW_DETAILS.INFO &&
          rowData != null &&
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
            document.querySelector(".main-body") as HTMLElement
          )}

        {showDetails == SHOW_DETAILS.EDITOR &&
          rowData != null &&
          createPortal(
            <Tab
              tabs={TAB_TYPES}
              dataItem={rowData}
              onReturnButtonClick={handleCloseEditor}
              onSubmitForm={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
            />,
            document.querySelector(".main-body") as HTMLElement
          )}
      </div>
    </>
  );
};
