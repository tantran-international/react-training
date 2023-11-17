/* Types */
import { TTable } from '@src/types/TTable';

export const Table = ({ src, alt, isActive, email }: TTable) => {
  const columnTitles = [
    alt && 'Full Name',
    isActive && 'Status',
    email && 'Email'
  ];

  return (
    <table>
      <thead>
        <tr>
          {columnTitles.map((columnTitle, columnIndex) => {
            return (
              <th className={`table-head-cell-${columnIndex}`}>
                {columnTitle}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody></tbody>
    </table>
  );
};
