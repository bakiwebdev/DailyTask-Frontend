import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoArrowBack, IoCalendar, IoTime } from "react-icons/io5";
import PageWrapper from "../../components/page_wrapper";
import Heading from "../../components/heading";
import Text from "../../components/text";
import { LocalContext } from "../../provider/Local";
import { UserContext } from "../../provider/User";
import CustomInput from "../../components/input";
import CustomTextArea from "../../components/text_area";
import CustomButton from "../../components/custom_button";
import axios from "axios";

const EditPage = () => {
  const { user, setUserData } = useContext(UserContext);
  const { task, setTaskData } = useContext(LocalContext);
  const [isTaskExist, setIsTaskExist] = useState(false);
  const { id } = useParams();
  const navigation = useNavigate();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (user) {
      const taskToEdit = task.filter((data, index) => {
        if (data._id == id) {
          setIsTaskExist(true);
          return data;
        }
      });
      if (taskToEdit.length > 0) {
        setNewTask(taskToEdit[0]);
      }
    } else {
      const taskToEdit = task.filter((data, index) => {
        if (index == id) {
          setIsTaskExist(true);
          return data;
        }
      });
      if (taskToEdit.length > 0) {
        setNewTask(taskToEdit[0]);
      }
    }
  }, [id, task]);

  const titleValue = (e) => {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  };
  const descriptionValue = (e) => {
    setNewTask({
      ...newTask,
      description: e.target.value,
    });
  };
  const buttonClick = () => {
    if (
      newTask.title === "" ||
      newTask.title.trim() === "" ||
      newTask.description === "" ||
      newTask.description.trim() === ""
    ) {
      alert("please fill all fields");
    } else {
      if (user) {
        axios
          .put(
            `${process.env.REACT_APP_BASE_URL}/task/${id}`,
            {
              title: newTask.title,
              description: newTask.description,
            },
            {
              headers: {
                jwt_token: user.token,
              },
            }
          )
          .then((res) => {
            navigation("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        const newTaskList = task.map((data, index) => {
          if (index == id) {
            return newTask;
          } else {
            return data;
          }
        });
        setTaskData(newTaskList);
        navigation("/");
      }
    }
  };

  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="w-100 h-auto space-y-3">
          {/* back link */}
          <div className="w-fit">
            <Link to="/">
              <div className="flex justify-center items-center space-x-2 text-gray-700 rounded-md border-2 border-gray-500 w-fit px-2 hover:underline hover:border-blue-500 hover:text-black">
                <IoArrowBack className="w-5 h-5" />
                <p className="text-lg  ">Back</p>
              </div>
            </Link>
          </div>
          {isTaskExist ? (
            <>
              <Heading primary={true} size="2xl">
                Edit Task
              </Heading>
              <div className="relative mb-4">
                <Text secondary={true}>Title</Text>
                <CustomInput
                  type="text"
                  name="title"
                  placeholder="insert task title"
                  value={newTask.title}
                  onValueChange={titleValue}
                />
              </div>
              <div className="relative mb-4">
                <Text secondary={true}>Description</Text>
                <CustomTextArea
                  name="description"
                  placeholder="describe the task"
                  value={newTask.description}
                  onValueChange={descriptionValue}
                />
              </div>
              <div className="flex justify-between items-center">
                <CustomButton
                  text="Update"
                  primary={true}
                  onClick={buttonClick}
                />
              </div>
            </>
          ) : (
            <div className="flex justify-center m-6 bg-gray-100 p-5 rounded border-blue-300 border-2">
              Task not found
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default EditPage;
