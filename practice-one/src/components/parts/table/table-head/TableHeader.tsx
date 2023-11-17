/* Types */
import { ITheaderProps } from "@src/types/ITableHeader";

export const TableHeader = <T,>({tableHeaderDatas}: ITheaderProps<T>): JSX.Element => {
  return (
    <tr>
      {tableHeaderDatas.map((tableHeaderData, index) => {

      })}
    </tr>
  );
}
