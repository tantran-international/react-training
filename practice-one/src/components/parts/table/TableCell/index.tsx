import { ReactNode } from 'react';

type TChildren = {
  children: JSX.Element | string;
};

export const TableCell = ({ children }: TChildren): ReactNode => {
  return <td>{children}</td>;
};
