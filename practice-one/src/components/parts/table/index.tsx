import './Table.css';

/* Components */
import { TableHeader } from './TableHeader/index';
import { TableRow } from './TableRow/index';

/* Types */
import { ITable } from '@/types/ITable';

export const Table = <T,>({
  data,
  columns,
  additionalClass
}: ITable<T>): JSX.Element => {
  return (
    <table className={`table-wrapper ${additionalClass}`}>
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
