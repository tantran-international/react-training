/* Components */
import { TableCell } from '@/components/parts/Table/TableCell';
import { IColumnType } from '@/types/IColumnTypes';

/* Helpers */
import { getObjectValue } from '@/helpers/objects';

/* Types */
interface ITableRowCell<T> {
  item: T;
  column: IColumnType<T>;
}

export const TableRowCell = <T,>({
  item,
  column
}: ITableRowCell<T>): JSX.Element => {
  const value = getObjectValue(
    item,
    column.key
  );

  return (
    <TableCell>
      {column.render
        ? column.render(
            column,
            item
          )
        : (value as string)}
    </TableCell>
  );
};
