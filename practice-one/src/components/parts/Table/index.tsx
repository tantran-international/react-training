import { createPortal } from 'react-dom';
import '@/components/parts/Table/Table.css';

/* Components */
import { TableHeader } from './TableHeader/index';
import { TableRow } from './TableRow/index';
import { CardInformation } from '@/components/parts/CardInformation';

/* Types */
import { IData } from '@/types/IData';
import { ITable } from '@/types/ITable';
import { useEffect, useState } from 'react';

/* Contants */
import { CARD_TYPES } from '@/constants/cardTypes';

export const Table = ({
  data,
  columns,
  additionalClass
}: ITable<IData>): JSX.Element => {

  const [rowIndex, setRowIndex] = useState(0);

  const [rowData, setRowData] = useState<IData | null>(null);

  const handleRowClick = (index: number, dataItem: IData): void => {
    setRowData(dataItem);
    setRowIndex(index + 1)
  };

  // useEffect(() => {
  //   console.log(rowIndex);
  // }, [data])

  return (
    <div className='table-wrapper'>
      <table className={`main-table ${additionalClass}`}>
        <thead className='table-head'>
          <TableHeader columns={columns} />
        </thead>

        <tbody className='table-body'>
          <TableRow onRowClick={handleRowClick} columns={columns} data={data} />
          {rowData != null &&
            createPortal(
              <CardInformation
                title={CARD_TYPES.USERS}
                status={rowData.isActive}
                fullName={rowData.fullName}
                email={rowData.email}
                bgColor={rowData.bgColor}
                lastVisitedDate={rowData.lastVisitedDate}
              />,
              document.querySelector('.main-body') as HTMLElement
            )}
        </tbody>
      </table>
    </div>
  );
};
