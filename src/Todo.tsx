import { useState } from "react"


const Todo = () => {
    const [task, setTask] = useState<string>("");
    //Change the tasks state to store an object
    const[tasks, setTasks] = useState<{text:string; completed:boolean}[]>([]);


    // Add task to the list
    const addTask = () =>{
        if(task.trim()){
            setTasks([...tasks, {text:task, completed:false}]);
            setTask("");
        }
    };

    //Toggle task completion
    const toggleTask = (index:number) => {
        setTasks(
            tasks.map((t, i) =>
            i === index ? {...t, completed: !t.completed} : t)
        )
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
                <span onClick={()=>toggleTask(index)}>{t.text}</span>
                <button onClick={()=>deleteTask(index)}> ❌ </button>
                </li>
            ))}
        </ul>
    </div>
);

};

export default Todo;