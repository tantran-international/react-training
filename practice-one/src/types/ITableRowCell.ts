/* Types */
import { IColumnType } from "@src/types/ITable";

export interface ITableRowCellProps<T> {
  item: T;
  column: IColumnType<T>;
}
