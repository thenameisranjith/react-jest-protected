// import React, { useState } from 'react'
// const FormData = () => {
//     const [phone, setPhone] = useState("");

//     const phoneChange = event => {
//         setPhone(event.target.value);
//     };

//     const onSubmit = (event) => {
//         event.preventDefault();
//         let flag = true

//         if (phone !== "undefined") {
//             var pattern = new RegExp(/^[0-9\b]+$/);
//             if (!pattern.test(phone)) {
//                 flag = false;
//                 alert("Please enter only number.");
//             }
//             else {
//                 if (phone.length !== 10) {
//                     alert("Enter Valid  mobile number")
//                     flag = false;
//                     return;
//                 }
//             }
//         }

//         return flag;
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <div class="form-group">
//                 <label for="Phone">Phone:</label>
//                 <input
//                     type="text"
//                     name="phone"
//                     value={phone}
//                     onChange={phoneChange}
//                     class="form-control"
//                     placeholder="Enter phone"

//                 />
//             </div>
//             <input type="submit" value="Submit" class="btn btn-success" />

//         </form>
//     )
// }

// export default FormData

import { useState } from "react";

const FormData = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    const task = {
      taskName: taskName,
      id: Math.round(Math.random() * 10),
    };
    setTaskList([...taskList, task]);
  };

  return (
    <div data-testid="todo-1">
      <br />
      FormData
      <input
        type="text"
        value={taskName}
        placeholder="Task Name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button style={{ all: "revert" }} onClick={addTask}>
        Add
      </button>
      {taskList.map((item) => (
        <li key={item.id}>{item.taskName}</li>
      ))}
    </div>
  );
};

export default FormData;
