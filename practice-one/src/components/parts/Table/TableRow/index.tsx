/* Types */
import { IData } from '@/types/IData';
import { IColumnType } from '@/types/ITable';
interface ITableRow<T> {
  onRowClick: (index: number, dataItem: IData) => void;
  data: T[];
  columns: IColumnType<T>[];
}

/* Components */
import { TableRowItem } from '@/components/parts/Table/TableRowItem';
import { TableRowCell } from '@/components/parts/Table/TableRowCell';
import { useEffect, useState } from 'react';

export const TableRow = ({
  onRowClick,
  data,
  columns
}: ITableRow<IData>): JSX.Element => {
  /* Initial "0" don't match with any index of TableRowItems == none TableRowItem is selected */
  const [selected, setSelected] = useState(0);

  /**
   * Handle index of TableRowItem to set selected
   * @param index - index of TableRowItem
   */
  const handleSelectedRow = (index: number) => {
    setSelected(index);
    onRowClick(index - 1, data[index - 1]);
  };

  /* OLD USE EFFECT CODE */
  // useEffect(() => {
  //   {
  //     selected && setSelected(data.length);
  //   }
  // }, [data.length]);

  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem
          key={`table-row-${itemIndex}`}
          /* (param + 1) to avoid initial value of state */
          index={itemIndex + 1}
          selected={selected}
          onRowItemClick={handleSelectedRow}
        >
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </TableRowItem>
      ))}
    </>
  );
};
