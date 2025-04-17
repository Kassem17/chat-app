import React from "react";

const GenderCheckbox = ({ selectedGender, onCheckboxChange }) => {
  return (
    <div className="flex gap-3">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            type="checkbox"
            className="checkbox border-gray-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            type="checkbox"
            className="checkbox border-gray-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
