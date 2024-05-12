import React, { useEffect, useRef, useState } from "react";
import "./Styles.scss";

const Filter = ({ options }) => {
  const [isColumnVisible, setIsColumnVisible] = useState(false);

  // Toggle the visibility and adjust classes
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
  };

  return (
    <div className="col-md-4">
      <span className="dropdown FilterDropdown">
        <button onClick={toggleColumn} className="btn" type="button">
          <i className="ti ti-filter ti-md"></i>
        </button>
      </span>
    </div>
  );
};

export default Filter;
