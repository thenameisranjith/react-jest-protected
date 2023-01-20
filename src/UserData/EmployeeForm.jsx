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
    user.id = Math.round(Math.random() * 10);
    setUsers([...users, user]);
  };
  const deleteEmployee = (id) => {
    const result = users.filter((item) => item.id !== id);
    setUsers(result);
  };

  const editEmployeeInfo = (user) => {
    setEditing(true);
    setEditUser({ id: user.id, name: user.name, role: user.role });
  };

  const upDateUser = (id, updateUser) => {
    console.log(updateUser, id, "LINE NOE 30");
    const result = users.map((item) => (item.id === id ? updateUser : item));
    console.log(result, "LINE NOE 32");
    setUsers(result);
    changeHeading();
  };

  const changeHeading = () => {
    setEditing(false);
  };

  return (
    <div>
      <UserInfoList
        users={users}
        editEmployeeInfo={editEmployeeInfo}
        deleteEmployee={deleteEmployee}
      />
      <hr />
      {!editing ? (
        <AddForm addEmployee={addEmployee} />
      ) : (
        <EditForm
          editUser={editUser}
          changeHeading={changeHeading}
          upDateUser={upDateUser}
        />
      )}
    </div>
  );
};

export default EmployeeForm;
