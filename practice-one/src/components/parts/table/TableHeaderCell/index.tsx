/* Types */
import { TTableHeaderCell } from '@/types/TTableHeaderCell';

export const TableHeaderCell = ({
  key,
  children
}: TTableHeaderCell) => {
  return <th key={key}>{children}</th>;
};
