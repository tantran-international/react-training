import './Table.css';

/* Components */
import { TableHeader } from './TableHeader/index';
import { TableRow } from './TableRow/index';

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
