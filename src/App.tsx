import React, { FC, ChangeEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import ListOfTasks from "./components/list-of-tasks";
import Task from "./components/task";
import InputField from "./components/new-task";
import { TaskType } from "./types";
import { v4 as uuidv4 } from "uuid";

const App: FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (inputValue: string, key: number) => {
    if (inputValue) {
      setTasks([...tasks, { id: uuidv4(), task: inputValue }]);
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="container">
      <div className="list-div">
        <h1
          onClick={() => {
            console.log(tasks);
          }}
        >
          ToDo List
        </h1>
        <InputField addTask={addTask} />

        <ul className="list-group list-group-flush list">
          {tasks.map((task: TaskType) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                task={task}
                deleteTask={deleteTask}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
