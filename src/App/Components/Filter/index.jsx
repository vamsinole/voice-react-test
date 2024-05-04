import React, { useEffect, useRef, useState } from 'react';
import './Styles.scss';


const Filter = ({ options }) => {
 

  const [isColumnVisible, setIsColumnVisible] = useState(false);

// Toggle the visibility and adjust classes
const toggleColumn = () => {
  setIsColumnVisible(!isColumnVisible);
};

  return (

    <div className='col-md-4'>
                    <span class="dropdown FilterDropdown">
                      <button onClick={toggleColumn} class="btn" type="button">
                        <i class="ti ti-filter ti-md"></i>
                      </button>
                    </span>
                   
                  </div>
  );
};

export default Filter;
