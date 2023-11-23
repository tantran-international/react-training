/* Types */
import { IColumnType } from "@/types/ITable";
interface ITableRow<T> {
  data: T[];
  columns: IColumnType<T>[]
}

/* Components */
import { TableRowItem } from '@/components/parts/Table/TableRowItem';
import { TableRowCell } from '@/components/parts/Table/TableRowCell';
import { useState } from 'react';

export const TableRow = <T,>({ data, columns }: ITableRow<T>): JSX.Element => {
  /* Initial "0" don't match with any index of TableRowItems == none TableRowItem is selected */
  const [selected, setSelected] = useState(0);

  /**
   *
   * @param index - index of Object is rendered as TableRowItem in (Array "data")
   */
  const handleSelectedRow = (index: number) => {
    setSelected(index);
  };

  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem
          key={`table-body-${itemIndex}`}
          /* (param + 1) to avoid initial value of state */
          index={itemIndex + 1}
          selected={selected}
          onRowClick={handleSelectedRow}
        >
          {columns.map((
              column,
              columnIndex
            ) => (
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
