/* Components */
import { TableCell } from '@/components/parts/Table/TableCell';
import { IColumnType } from '@/types/ITable';

interface ITableRowCell<T> {
  item: T;
  column: IColumnType<T>;
}

const getObj = <T, Key extends keyof T>(obj: T, key: Key): T[Key] => {
  return obj[key]
}

export const TableRowCell = <T,>({
  item,
  column
}: ITableRowCell<T>): JSX.Element => {
  const value = getObj(item, cpl;);
  return (
    <TableCell>{column.render ? column.render(column, item) : value}</TableCell>
  );
};
