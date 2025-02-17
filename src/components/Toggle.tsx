import "./Toggle.css";

type ToggleProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div>
      <div className="toggle-container">
        <input
          type="checkbox"
          className="toggle"
          id="check"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check"></label>
      </div>
    </div>
  );
};

export default Toggle;
