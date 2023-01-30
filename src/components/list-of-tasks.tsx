import React from "react";

interface Props {
  tasks: string[];
}

const ListOfTasks = (tasks: string[]) => {
  return (
    <div className="list-of-tasks">
      {tasks.map((task) => (
        <div className="list-item">
          <input type="checkbox" />
          <li className="">{task}</li>
          <button className="delete-btn"></button>
        </div>
      ))}
    </div>
  );
};

export default ListOfTasks;
