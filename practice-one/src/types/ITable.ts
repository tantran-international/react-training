// export type TTable = {
//   theadDatas:
//   tbodyDatas:
//   additionalClass: string;
// }

export interface ITheader<T> {
  key: string;
  title: string;
}

export interface ITableProps<T> {
  tableHeaderDatas: ITheader<T>[];
  tableRowDatas: T[];
  additionalClass: string;
}
