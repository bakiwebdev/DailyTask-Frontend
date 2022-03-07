import { useState, useEffect, useContext } from "react";
import { UserContext } from "../provider/User";
import { TaskContext } from "../provider/Task";
import axios from "axios";

const useFetch = ({ method, path, body }) => {
  const { user } = useContext(UserContext);
  const { setTaskData } = useContext(TaskContext);
  const url = process.env.REACT_APP_BASE_URL + path;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const setNewTask = async () => {
    if (user.token) {
      const result = await axios.get(
        process.env.REACT_APP_BASE_URL + "/task/",
        {
          headers: {
            jwt_token: user.token,
          },
        }
      );
      setTaskData(result.data);
    }
  };

  useEffect(() => {
    if (!user) {
      setError("You are not logged in");
      return;
    }
    setLoading(true);
    axios({
      method,
      url,
      headers: {
        jwt_token: user.token,
      },
      data: body,
    })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
        setNewTask();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [user, method, url, body]);

  return { loading, response, error };
};

export default useFetch;
