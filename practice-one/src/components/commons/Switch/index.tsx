import '@/components/commons/Switch/Switch.css';

/* Types */
interface ISwitch {
  additionalClass?: string;
  onChange: () => void;
  checked: boolean;
};

export const Switch = ({
    additionalClass,
    onChange,
    checked
  }: ISwitch) => {
  return (
    <label
      htmlFor="toggle-switch"
      className={`switch-container ${additionalClass}`}>

      <input
        id="toggle-switch"
        name="toggle-switch"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span className="switch" />
    </label>
  );
};
