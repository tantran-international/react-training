import { IColumnType } from "./ITable";

export interface ITableRowProps<T> {
  data: T[];
  columns: IColumnType<T>[]
}
