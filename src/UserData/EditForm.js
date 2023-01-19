import React, { useState, useEffect } from "react";

const EditForm = (props) => {
  const { editUser, changeHeading } = props;
  const initialFormState = { id: null, name: "", role: "" };
  const [user, setUser] = useState(editUser);
  console.log("IN  LINE NO 5 ", user);

  useEffect(() => {
    setUser(editUser);
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.role) return;
    setUser(initialFormState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClear = () => {
    changeHeading();
  };

  return (
    <div>
      <h1>Edit Employee</h1>
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
        <button>Edit Employee</button>
        <button onClick={() => handleClear()}>Cancel</button>
      </form>
    </div>
  );
};

export default EditForm;
