import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack, IoCalendar, IoTime } from "react-icons/io5";
import PageWrapper from "../../components/page_wrapper";
import Heading from "../../components/heading";
import Text from "../../components/text";
import { LocalContext } from "../../provider/Local";
import CustomInput from "../../components/input";
import CustomTextArea from "../../components/text_area";
import CustomButton from "../../components/custom_button";

const EditPage = () => {
  const { task, setTaskData } = useContext(LocalContext);
  const { id } = useParams();
  
  return (
    <PageWrapper>
        {id}
    </PageWrapper>
  );
};

export default EditPage;
