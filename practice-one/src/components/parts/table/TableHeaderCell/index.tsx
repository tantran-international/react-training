import '@/components/parts/Table/TableHeaderCell/TableHeaderCell.css'

/* Types */
type TTableHeaderCell = {
  children: string;
}

export const TableHeaderCell = ({
  children
}: TTableHeaderCell) => {
  return <th className="table-header-cell">{children}</th>;
};
