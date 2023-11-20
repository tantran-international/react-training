/* Types */
import { ITableRowProps } from '@src/types/ITableRow';

/* Components */
import { TableRowCell } from '../TableRowCell';

export const TableRow = <T,>({
  data,
  columns
}: ITableRowProps<T>): JSX.Element => {
  return (
    <>
      {data.map((item, itemIndex) => {
        return (
          <tr key={`table-body-${itemIndex}`}>
            {columns.map((column, columnIndex) => {
              return (
                <TableRowCell
                  key={`table-row-cell-${columnIndex}`}
                  item={item}
                  column={column}
                />
              );
            })}
          </tr>
        );
      })}
    </>
  );
};
