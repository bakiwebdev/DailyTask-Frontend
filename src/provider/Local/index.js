import React, {useState, createContext} from 'react'

export const LocalContext= createContext();
const LocalData = ({children}) => {
    const [task, setTask] = useState([]);
    const setTaskData = (data) => {
        setTask(data);
    }
    return (
        <LocalContext.Provider value={{task, setTaskData}}>
            {children}
        </LocalContext.Provider>
    )
}

export default LocalData