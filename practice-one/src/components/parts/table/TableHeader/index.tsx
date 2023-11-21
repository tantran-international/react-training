/* Components */
import { TableHeaderCell } from '@/components/parts/Table/TableHeaderCell';

/* Types */
import { ITheader } from '@/types/ITableHeader';

export const TableHeader = <T,>({ columns }: ITheader<T>): JSX.Element => {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <TableHeaderCell key={`table-head-cell-${columnIndex}`}>
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
};
