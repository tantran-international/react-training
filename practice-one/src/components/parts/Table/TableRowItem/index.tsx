import { useState } from 'react';

import '@/components/parts/Table/TableRowItem/TableRowItem.css';

/* Types */
import { IData } from '@/types/IDatas';

interface ITableRowItem {
  children: JSX.Element[];
  selectedRowIndex: number;
  onRowItemClick: (
    index: number,
    item: IData
  ) => void;
  index: number;
  item: IData;
}

export const TableRowItem = ({
  children,
  index,
  selectedRowIndex,
  item,
  onRowItemClick
}: ITableRowItem) => {

  /* Handle index of selected row */
  const [selectedRow, setSelectedRow] = useState(selectedRowIndex);

  const rowIndex = index + 1;

  /* Update styles of clicked TableRow */
  const handleRowItemClick = () => {
    setSelectedRow(rowIndex);
    onRowItemClick(rowIndex, item);
  };

  /* Conditional to update styles for selected row */
  const isSelected = selectedRow > 0 && selectedRowIndex === rowIndex;

  return (
    <tr
      className={
        isSelected
        ? 'table-row table-row-selected'
        : 'table-row'
      }
      onClick={handleRowItemClick}
    >
      {children}
    </tr>
  );
};
