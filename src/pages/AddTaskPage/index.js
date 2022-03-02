import React from "react";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import CustomInput from "../../components/input";
import PageWrapper from "../../components/page_wrapper";
import Text from "../../components/text";
import CustomTextArea from "../../components/text_area";

const AddTaskPage = () => {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="w-100 h-auto">
          <Heading primary={true} size="2xl">
            Add Task
          </Heading>
          <div className="relative mb-4">
            <Text secondary={true}>Title</Text>
            <CustomInput type="text" name="title" placeholder="insert task title" />
          </div>
          <div className="relative mb-4">
            <Text secondary={true}>Description</Text>
            <CustomTextArea name="description" placeholder="describe the task" />
          </div>
          <div className="flex justify-between items-center">
            <CustomButton text='Add Task' primary={true} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AddTaskPage;
