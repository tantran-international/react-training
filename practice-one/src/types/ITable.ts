// export type TTable = {
//   theadDatas:
//   tbodyDatas:
//   additionalClass: string;
// }

export interface IColumnType<T> {
  key: string;
  title: string;
  render?: (column: IColumnType<T>, item: T) => void;
}

export interface ITableProps<T> {
  columns: IColumnType<T>[];
  data: T[];
  additionalClass?: string;
}
