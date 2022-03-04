import axios from "axios";
import React, { useState, useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import CustomInput from "../../components/input";
import PageWrapper from "../../components/page_wrapper";
import Text from "../../components/text";
import CustomTextArea from "../../components/text_area";
import { LocalContext } from "../../provider/Local";
import { UserContext } from "../../provider/User";

const AddTaskPage = () => {
  const { user, setUserData } = useContext(UserContext);
  const navigation = useNavigate();
  const date = new Date();
  const time = date.toLocaleTimeString();
  const dateTime = {
    time: time,
    date: date.toLocaleDateString(),
  };
  const { task, setTaskData } = useContext(LocalContext);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dateTime: dateTime,
    isCompleted: false,
  });

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
  const buttonAddTask = () => {
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
          .post(
            `${process.env.REACT_APP_BASE_URL}/task/`,
            {
              task: {
                title: newTask.title,
                description: newTask.description,
              },
            },
            {
              headers: {
                jwt_token: user.token,
              },
            }
          )
          .then((res) => {
            setNewTask({
              title: "",
              description: "",
              dateTime: "",
              isCompleted: false,
            });
            navigation("/");
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        setTaskData([...task, newTask]);
        setNewTask({
          title: "",
          description: "",
          date: "",
        });
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
          <Heading primary={true} size="2xl">
            Add Task
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
              text="Add Task"
              primary={true}
              onClick={buttonAddTask}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AddTaskPage;
