import { IColumnType } from "@/types/ITable";

export interface ITableRow<T> {
  data: T[];
  columns: IColumnType<T>[]
}
