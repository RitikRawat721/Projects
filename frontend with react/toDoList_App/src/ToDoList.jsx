import React, {useState} from "react";

function ToDoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState();

    function handleTaskInput(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function addTask(event){
        setNewTask(event.target.value);
    }

    function deleteTask(index){
        setTask(t => t.filter((st, i) => i !== index))
    }

    function moveTaskUp(index){
        const updatedTask = [...task];

        if(index > 0){
            [updatedTask[index], updatedTask[index-1]] =
            [updatedTask[index-1], updatedTask[index]]
            setTask(updatedTask)
        }
    }

    function moveTaskDown(index){
         const updatedTask = [...task];

        if(index < task.length-1){
            [updatedTask[index], updatedTask[index+1]] =
            [updatedTask[index+1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return(
        <>
        <div className="toDoList">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" 
                placeholder="Enter a task" 
                value={newTask}
                onChange={addTask}/>
                <button className="add_btn" onClick={handleTaskInput}>Add Task</button>
            </div>

            <ol>
                {task.map((t, index) => 
                <li key={index}>
                    <span className="text">{t}</span>
                    <button 
                        className="delete_btn"
                        onClick={() => deleteTask(index)}>
                        Delete
                        </button>
                    <button 
                        className="move" 
                        onClick={() => moveTaskUp(index)}>
                        👆
                        </button>
                    <button 
                        className="move" 
                        onClick={() => moveTaskDown(index)}>
                        👇
                        </button>    
                </li>)}
            </ol>
        </div>
        </>
    )
}

export default ToDoList