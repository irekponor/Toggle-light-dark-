import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
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
        <label htmlFor="check">Dark Mode</label>
      </div>
    </div>
  );
};

export default Toggle;
