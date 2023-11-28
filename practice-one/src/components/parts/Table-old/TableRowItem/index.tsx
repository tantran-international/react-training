import '@/components/parts/Table/TableRowItem/TableRowItem.css';

/* Types */
interface ITableRowItem {
  children: JSX.Element[];
  selected: number;
  onRowClick: (selected: number) => void;
  index: number;
}

export const TableRowItem = ({
  children,
  index,
  selected,
  onRowClick
}: ITableRowItem) => {

  /* Assign index to state variable in (TableRow component) to update styles of clicked TableRow */
  const handleRowClick = () => {
    onRowClick(index);
  };

  /* Assign conditional to variable */
  const isSelected = selected > 0 && selected === index;

  return (
    <tr
      className={
        isSelected
          ? "table-row table-row-selected"
          : "table-row"
      }
      onClick={handleRowClick}
    >{children}</tr>
  );
};
