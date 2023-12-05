/* Types */
import { IUsers } from '@/types/IUsers';
import { IColumnType } from '@/types/IColumnTypes';
interface ITableRow<T> {
  onRowClick: (index: number, item: IUsers) => void;
  data: T[];
  columns: IColumnType<T>[];
  selectedRowIndex: number;
}

/* Components */
import { TableRowItem } from '@/components/parts/Table/TableRowItem';
import { TableRowCell } from '@/components/parts/Table/TableRowCell';

export const TableRow = ({
  onRowClick,
  data,
  columns,
  selectedRowIndex
}: ITableRow<IUsers>): JSX.Element => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem
          key={`table-row-${itemIndex}`}
          index={itemIndex}
          selectedRowIndex={selectedRowIndex}
          onRowItemClick={onRowClick}
          item={item}
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
