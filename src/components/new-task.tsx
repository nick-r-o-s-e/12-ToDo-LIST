import { useState, ChangeEvent } from "react";

interface Props {
  addTask: Function;
}

const InputField = ({ addTask }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  return (
    <div className="input-group mb-3 new-task">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={handleInputChange}
        placeholder="New Task"
        aria-label="New task input"
      />
      <button
        className="btn btn-outline-secondary add-task-btn"
        type="button"
        onClick={() => {
          addTask(input);
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};
export default InputField;
