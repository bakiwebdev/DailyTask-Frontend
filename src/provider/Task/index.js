import React, {useState, createContext} from 'react'

export const TaskContext= createContext();
const TaskProvider = ({children}) => {
    const [task, setTask] = useState([]);
    const setTaskData = (data) => {
        setTask(data);
    }
    return (
        <TaskContext.Provider value={{task, setTaskData}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider