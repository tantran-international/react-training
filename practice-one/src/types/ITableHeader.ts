/* Types */
import { IColumnType } from "./ITable";

export interface ITheaderProps<T> {
  columns: IColumnType<T>[];
}
