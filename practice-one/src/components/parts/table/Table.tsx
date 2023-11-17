import './table.css';

/* Components */
import { TableHeader } from './table-head/TableHeader';
import { TableRow } from './table-row/TableRow';

/* Types */
import { ITableProps } from '@src/types/ITable';

export const Table = <T,>({
  tableHeaderDatas,
  tableRowDatas,
  additionalClass
}: ITableProps<T>): JSX.Element => {
  return (
    <table className={`table ${additionalClass}`}>
      <thead>
        <TableHeader tableHeaderDatas={tableHeaderDatas} />
      </thead>

      <tbody>
        <TableRow
          tableHeaderDatas={tableHeaderDatas}
          tbodyDatas={tableRowDatas}
        />
      </tbody>
    </table>
  );
};
