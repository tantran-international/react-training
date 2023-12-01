import '@/components/parts/Table/TableRowItem/TableRowItem.css';

interface ITableRowItem {
  children: JSX.Element[];
  selected: number;
  onRowItemClick: (index: number) => void;
  index: number;
}

export const TableRowItem = ({
  children,
  index,
  selected,
  onRowItemClick
}: ITableRowItem) => {
  /* Update styles of clicked TableRow */
  const handleRowItemClick = () => {
    onRowItemClick(index);
  };

  /* Assign conditional to variable */
  const isSelected = selected > 0 && selected === index;

  return (
    <tr
      className={
        isSelected
        ? 'table-row table-row-selected'
        : 'table-row'
      }
      onClick={handleRowItemClick}
    >
      {children}
    </tr>
  );
};
