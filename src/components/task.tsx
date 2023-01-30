import React, { useState } from "react";

import { TaskType } from "../types";

interface Props {
  task: TaskType;
  deleteTask: Function;
  id: string;
}

const Task = ({ task, deleteTask, id }: Props) => {
  const [check, setCheck] = useState("none");

  const decorateTask = () => {
    setCheck(check == "none" ? "line-through" : "none");
  };

  return (
    <li className="list-group-item">
      <div className="task">
        <input
          className="form-check-input me-1"
          onClick={decorateTask}
          type="checkbox"
          value=""
        />
        <label
          className="form-check-label"
          style={{ textDecoration: check }}
          htmlFor="firstCheckbox"
        >
          {task.task}
        </label>
      </div>

      <button
        className="delete-task-btn"
        onClick={() => {
          deleteTask(id);
        }}
      >
        <i className="fa-solid fa-trash"></i>{" "}
      </button>
    </li>
  );
};

export default Task;
