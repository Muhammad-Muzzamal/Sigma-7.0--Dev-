import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const TodoList = () => {
    const [task, setTask] = useState([{ task: "sleep", id: uuidv4() }, { task: "eat", id: uuidv4() }, { task: "work", id: uuidv4() }]);
    const [newTask, setNewTask] = useState("");

    const addTask = (e) => {
        setTask([{task: newTask, id: uuidv4()}, ...task])
        setNewTask("")
    }

    return (
        <div className='flex flex-col gap-4 p-4 items-center justify-center'>
            <h1 className='text-gray-900 font-bold text-2xl'>Todo List</h1>
            <div>
                <input type="text" className="outline outline-gray-500 focus:outline-gray-800 focus:outline-2 rounded-md p-1 transition-all duration-300 ease-in-out"
                    placeholder='Enter your task'
                    value={newTask}
                    onChange={(e) => { setNewTask(e.target.value) }}
                />
                <button className='bg-red-400 p-1 rounded-md ml-4'
                    onClick={addTask}
                >Add Task</button>
            </div>
            <ul>
                {task.map((taskitem) => (
                    <li key={taskitem.id}>{taskitem.task}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList