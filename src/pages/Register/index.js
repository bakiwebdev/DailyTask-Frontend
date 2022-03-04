import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import CustomInput from "../../components/input";
import PageWrapper from "../../components/page_wrapper";
import Text from "../../components/text";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    full_name: "",
    username: "",
    password: "",
  });

  const handleFullNameChange = (e) => {
    setAccount({
      ...account,
      full_name: e.target.value,
    });
  };
  const handleUsernameChange = (e) => {
    setAccount({
      ...account,
      username: e.target.value,
    });
  };
  const handlePasswordChange = (e) => {
    setAccount({
      ...account,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      account.full_name === "" ||
      account.username === "" ||
      account.password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
        fullname: account.full_name,
        username: account.username,
        password: account.password,
      })
      .then((res) => {
        alert("Successfully registered, please login");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="space-y-2">
          <Heading primary={true} size="3xl">
            Register
          </Heading>

          <div className="relative mb-4">
            <Text secondary={true}>Full Name</Text>
            <CustomInput
              type="text"
              name="full_name"
              placeholder="full name"
              value={account.full_name}
              onValueChange={handleFullNameChange}
            />
          </div>
          <div className="relative mb-4">
            <Text secondary={true}>Username</Text>
            <CustomInput
              type="text"
              name="username"
              placeholder="username"
              value={account.username}
              onValueChange={handleUsernameChange}
            />
          </div>
          <div className="relative mb-4">
            <Text secondary={true}>Password</Text>
            <CustomInput
              type="password"
              name="password"
              placeholder="password"
              value={account.password}
              onValueChange={handlePasswordChange}
            />
          </div>
          <CustomButton
            text="Create Account"
            primary={true}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default RegisterPage;
