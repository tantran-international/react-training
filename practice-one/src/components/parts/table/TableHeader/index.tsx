/* Components */
import { TableHeaderCell } from '../TableHeaderCell';

/* Types */
import { ITheaderProps } from '@/types/ITableHeader';

export const TableHeader = <T,>({ columns }: ITheaderProps<T>): JSX.Element => {
  return (
    <tr>
      {columns.map((column, columnIndex) => {
        return (
          <TableHeaderCell key={`table-head-cell-${columnIndex}`}>
            {column.title}
          </TableHeaderCell>
        );
      })}
    </tr>
  );
};
