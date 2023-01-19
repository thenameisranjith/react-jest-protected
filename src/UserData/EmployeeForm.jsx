import { useState } from "react";
import UserInfoList from "./UserInfoList";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
const EmployeeForm = () => {
  const [editing, setEditing] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "AAA", role: "manager" },
    { id: 2, name: "BBB", role: "developer" },
    { id: 3, name: "CCC", role: "tester" },
  ]);

  const addEmployee = (user) => {
    user.id = Math.round(Math.random() * 100);
    setUsers([...users, user]);
    console.log("LINE NO 14 ", user);
  };

  const editEmployeeInfo = (user) => {
    setEditing(true);
    setEditUser({ id: user.id, name: user.name, role: user.role });
    console.log("IN LINE NO 20 ", user);
  };

  const changeHeading = () => {
    setEditing(false);
  };

  return (
    <div>
      <UserInfoList users={users} editEmployeeInfo={editEmployeeInfo} />
      <hr />
      {!editing ? (
        <AddForm addEmployee={addEmployee} />
      ) : (
        <EditForm editUser={editUser} changeHeading={changeHeading} />
      )}
    </div>
  );
};

export default EmployeeForm;
