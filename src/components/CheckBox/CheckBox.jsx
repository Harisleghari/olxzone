import "./checkbox.css";

const CheckBox = () => {
  return (
    <div className="checkbox-div-1-a checkbox-div-1-b checkbox-div-1-c">
      <div className="checkbox-div-1-a checkbox-div-2-a checkbox-div-2-b">
        <input type="checkbox" className="checkbox-div-2-inp" readOnly checked />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="svg-checkbox"
        >
          <path d="M878.34 192l-537 547.68L145.65 540.1H85.33v61.55L311.17 832h60.35l567.15-578.47V192z"></path>
        </svg>
      </div>
      <span className="checkbox-span-1-a">
        <span className="checkbox-span-2-a">Only in Mobile Phones</span>
      </span>
    </div>
  );
};

export default CheckBox;
