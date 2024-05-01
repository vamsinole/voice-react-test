import React, { useEffect, useRef } from "react";
import "./Styles.scss";
import $ from "jquery"; // Import jQuery if not already imported
import "select2"; // Import Select2 if not already imported

const MultipleSelectDropdown = ({ options }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    $(selectRef.current).select2({
      theme: "bootstrap-5",
      width: $(selectRef.current).data("width")
        ? $(selectRef.current).data("width")
        : $(selectRef.current).hasClass("w-100")
        ? "100%"
        : "style",
      placeholder: $(selectRef.current).data("placeholder"),
      closeOnSelect: false,
      allowClear: false,
    });
  }, []);

  return (
    <select
      ref={selectRef}
      className="select2 form-select select2-hidden-accessible"
      id="multiple-select-clear-field"
      data-placeholder="Choose anything"
      multiple
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};

export default MultipleSelectDropdown;
