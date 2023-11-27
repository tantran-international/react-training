import '@/components/parts/Table/TableHeader/TableHeader.css';

/* Components */
import { TableHeaderCell } from '@/components/parts/Table/TableHeaderCell';

/* Types */
import { IColumnType } from '@/types/ITable';
interface ITheader<T> {
  columns: IColumnType<T>[];
}

export const TableHeader = <T,>({
  columns
}: ITheader<T>): JSX.Element => {
  return (
    <tr className="table-header">
      {columns.map((
        column,
        columnIndex
      ) => (
        <TableHeaderCell key={`table-head-cell-${columnIndex}`}>
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
};
