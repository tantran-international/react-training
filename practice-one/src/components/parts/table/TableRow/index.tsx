/* Types */
import { ITableRow } from '@/types/ITableRow';

/* Components */
import { TableRowCell } from '@/components/parts/Table/TableRowCell/index';

export const TableRow = <T,>({ data, columns }: ITableRow<T>): JSX.Element => {
  console.log(data);
  console.log(columns);
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
};
