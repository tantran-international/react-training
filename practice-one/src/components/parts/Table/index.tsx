import '@/components/parts/Table/Table.css';

/* Components */
import { TableHeader } from '@/components/parts/Table/TableHeader';
import { TableRow } from '@/components/parts/Table/TableRow';

/* Types */
import { IData } from '@/types/IDatas';
import { IColumnType } from '@/types/IColumnTypes';
interface ITable<T> {
  onRowClick: (index: number, item: IData) => void;
  data: T[];
  columns: IColumnType<T>[];
  additionalClass?: string;
  selectedRowIndex: number;
}

export const Table = ({
  onRowClick,
  data,
  columns,
  additionalClass,
  selectedRowIndex
}: ITable<IData>): JSX.Element => {

  return (
    <div className="table-wrapper">
      <table className={`main-table ${additionalClass}`}>
        <thead className="table-head">
          <TableHeader columns={columns} />
        </thead>

        <tbody className="table-body">
          <TableRow
            onRowClick={onRowClick}
            columns={columns}
            data={data}
            selectedRowIndex={selectedRowIndex}/>
        </tbody>
      </table>
    </div>
  );
};
