import './Status.css';

/* Types */
interface IStatus {
  additionalClass?: string;
  isActive: boolean;
}

export const Status = ({
  additionalClass,
  isActive
  }: IStatus) => {

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
