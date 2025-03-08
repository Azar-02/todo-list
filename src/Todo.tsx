import { useState } from "react"


const Todo = () => {
    const [task, setTask] = useState<string>("");
    const[tasks, setTasks] = useState<string[]>([]);


    // Add task to the list
    const addTask = () =>{
        if(task.trim()){
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    //Delete task from the list
    const deleteTask = (index:number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

return(

    <div>
        <h1>To-Do List</h1>

        <input type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} />

        <button onClick={addTask}>Add Task</button>

        <ul>
            {tasks.map((t, index)=>(
                <li key={index}>
                    {t}
                <button onClick={()=>deleteTask(index)}> ❌ </button>
                </li>
            ))}
        </ul>
    </div>
);

};

export default Todo;