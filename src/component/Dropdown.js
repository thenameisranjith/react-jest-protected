import React from "react";

const Dropdown = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Basic Info</h1>
      <form>
        <div>
          <label htmlFor="name">Enter name</label>
          <input type="text" id="name" value="ranjith" readOnly />
        </div>
        <div>
          <label htmlFor="namme">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="in">India</option>
            <option value="cn">Canada</option>
            <option value="gm">Germany</option>
            <option value="eg">England</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree terms and condition
          </label>
        </div>
        <img src="https://via.placeholder.com/100" alt="flower" />
        <button style={{ all: "revert" }}>Submit</button>
      </form>
    </div>
  );
};

export default Dropdown;
