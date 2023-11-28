import { ReactNode } from 'react';
import '@/components/parts/Table/TableCell/TableCell.css';

type TChildren = {
  children: JSX.Element | string;
};

export const TableCell = ({
  children
}: TChildren): ReactNode => {
  return <td className="table-cell">{children}</td>;
};
