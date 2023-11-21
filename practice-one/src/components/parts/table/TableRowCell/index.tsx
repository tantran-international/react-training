/* Types */
import { ITableRowCellProps } from '@/types/ITableRowCell';

export const TableRowCell = <T,>({
  item,
  column
}: ITableRowCellProps<T>): JSX.Element => {
  const value = column['key'];
  return (
    <>{column.render ? column.render(column, item) : value}</>
  );
};