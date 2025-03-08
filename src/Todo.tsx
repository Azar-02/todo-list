import { useState } from "react"

const Todo = () => {
    const [task, setTask] = useState<string>("");
    const[tasks, setTasks] = useState<string[]>([]);

    const addTask = () =>{
        if(task.trim()){
            setTasks([...tasks, task]);
            setTask("");
        }
    };

return(
    <div>
        <h1>To-Do List</h1>

        <input type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} />

        <button></button>

        <ul>

            <li></li>

        </ul>


    </div>
)

}