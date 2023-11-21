/* Types */
type TTableHeaderCell = {
  children: string;
}

export const TableHeaderCell = ({
  children
}: TTableHeaderCell) => {
  return <th>{children}</th>;
};
