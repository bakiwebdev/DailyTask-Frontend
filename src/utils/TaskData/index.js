import React, { useState, useEffect} from 'react'

const useTask = () => {
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTask = async () => {
            try {
                const response = await fetch('/api/task');
                const data = await response.json();
                setTask(data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        getTask();
    }, []);

    return { task, loading, error };
}

export default useTask