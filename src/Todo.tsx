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

    <div className="max-w-md mx-auto mt-8 p-4 bg-grey-100 shadow-md rounded-md">
        <h1 className="text-xl font-bold mb-4">To-Do List</h1>

        <input type="text"
        className="w-full p-2 border rounded-md"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} />

        <button 
        onClick={addTask}
        className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >Add Task</button>

        <ul className="mt-4">
            {tasks.map((t, index)=>(
                <li key={index} className="bg-white p-2 mt-2 rounded-md shadow">
                <span onClick={()=>toggleTask(index)}>{t.text}</span>
                <button onClick={()=>deleteTask(index)}> ❌ </button>
                </li>
            ))}
        </ul>
    </div>
);

};

export default Todo;