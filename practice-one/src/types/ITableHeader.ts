/* Types */
import { IColumnType } from "@/types/ITable";

export interface ITheader<T> {
  columns: IColumnType<T>[];
}
