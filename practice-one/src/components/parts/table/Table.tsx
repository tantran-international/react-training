import './table.css';

/* Components */
import { TableHeader } from './table-header/TableHeader';
import { TableRow } from './table-row/TableRow';

/* Types */
import { ITableProps } from '@src/types/ITable';

export const Table = <T,>({
  data,
  columns,
  additionalClass
}: ITableProps<T>): JSX.Element => {
  return (
    <table className={`table ${additionalClass}`}>
      <thead>
        <TableHeader columns={columns} />
      </thead>

      <tbody>
        <TableRow
          columns={columns}
          data={data}
        />
      </tbody>
    </table>
  );
};
