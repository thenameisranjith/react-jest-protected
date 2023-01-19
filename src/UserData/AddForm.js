import React, { useState } from "react";

const AddForm = (props) => {
  const { addEmployee } = props;
  const initialFormState = { id: null, name: "", role: "" };
  const [user, setUser] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.role) return;
    addEmployee(user);
    setUser(initialFormState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Role</label>

        <input
          type="text"
          name="role"
          value={user.role}
          onChange={handleInputChange}
        />
        <br />
        <button style={{ all: "revert" }}>Add Employee</button>
      </form>
    </div>
  );
};

export default AddForm;
