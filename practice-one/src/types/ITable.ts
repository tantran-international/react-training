export interface IColumnType<T> {
  key: keyof T;
  title: string;
  render?: (column: IColumnType<T>, item: T) => JSX.Element;
}

export interface ITable<T> {
  data: T[];
  columns: IColumnType<T>[];
  additionalClass?: string;

}
