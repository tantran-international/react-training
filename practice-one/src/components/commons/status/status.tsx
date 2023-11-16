import './status.css';

/* Types */
import { TStatus } from "@src/types/TStatus";

export const Status = ({
  additionalClass,
  isActive
  }: TStatus) => {

  return (
    <span className={
      isActive
        ? `status status-active ${additionalClass}`
        : `status status-not-active ${additionalClass}`
    }>
      {
      isActive
        ? 'Active'
        : 'Not active'
      }
    </span>
  );

};
