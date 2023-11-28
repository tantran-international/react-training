/* Components */
import { TableCell } from '@/components/parts/Table/TableCell';
import { IColumnType } from '@/types/ITable';

/* Helpers */
import { getObjectValue } from '@/helpers/getObjects';

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
