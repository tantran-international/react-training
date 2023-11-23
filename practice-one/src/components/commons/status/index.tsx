import './Status.css';

/* Types */
import { TStatus } from '@/types/TStatus';

export const Status = ({
  additionalClass,
  isActive
  }: TStatus) => {

  return (
    <span className={`status
    ${
      isActive
        ? "active"
        : "not-active"
      }
    ${additionalClass}`}
    >
      {
      isActive
        ? "Active"
        : "Not active"
      }
    </span>
  );

};
