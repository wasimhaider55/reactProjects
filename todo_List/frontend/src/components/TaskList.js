import TaskForm from "./TaskForm"
import Task from "./Task"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

// http://localhost:8800/api/task

const TaskList = () => {
  const [formData, setformData] = useState({
    name: "",
    complete: false
  })

  const { name } = formData
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  };
  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("input field cannot be empty");
    }
    try {
      await axios.post("http://localhost:8800/api/task", formData)
      toast.success("Task added successfully");
      setformData({ ...formData, name: "" })

    } catch (error) {
      toast.error(error.message);
      console.log(error);

    }

  }
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Task : </b> 0
        </p>
        <p>
          <b>Completed Task : </b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  )
}

export default TaskList