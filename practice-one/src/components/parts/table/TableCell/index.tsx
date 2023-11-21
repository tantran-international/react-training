type TChildren = {
  children: string | JSX.Element;
};

export const TableCell = ({ children }: TChildren) => {
  return <td>{children}</td>;
};
