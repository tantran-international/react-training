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
    <div className="table-wrapper">
      <table className={`main-table ${additionalClass}`}>

        <thead className="table-head">
          <TableHeader columns={columns} />
        </thead>

        <tbody className="table-body">
          <TableRow
            columns={columns}
            data={data}
          />
        </tbody>

      </table>
    </div>
  );
};
