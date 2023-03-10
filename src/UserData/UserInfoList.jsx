const UserInfoList = (props) => {
  const { users, editEmployeeInfo, deleteEmployee } = props;

  return (
    <>
      <h1>View Employee</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0
            ? users.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <button onClick={() => editEmployeeInfo(item)}>Edit</button>
                  &nbsp; &nbsp;
                  <button onClick={() => deleteEmployee(item.id)}>
                    Delete
                  </button>
                  &nbsp;
                </tr>
              ))
            : "No emp found"}
        </tbody>
      </table>
    </>
  );
};

export default UserInfoList;
