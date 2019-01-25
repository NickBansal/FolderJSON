import React from "react";
import "../Stylesheets/FilterForm.css";

const FilterForm = ({ handleChange }) => {
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          onChange={e => handleChange(e.target.value)}
          type="text"
          placeholder="Filter..."
        />
      </form>
    </div>
  );
};

export default FilterForm;
