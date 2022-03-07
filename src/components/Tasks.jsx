import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {    
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    key={task.id} //SEMPRE use uma key quando usar map.
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion} 
                />
            ))}   
        </>
    )
};

export default Tasks;