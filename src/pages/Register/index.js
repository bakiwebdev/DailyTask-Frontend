import React from "react";
import CustomButton from "../../components/custom_button";
import Heading from "../../components/heading";
import CustomInput from "../../components/input";
import PageWrapper from "../../components/page_wrapper";
import Text from "../../components/text";

const RegisterPage = () => {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="space-y-2">
          <Heading primary={true} size="3xl">
            Register
          </Heading>

          <div className="relative mb-4">
            <Text secondary={true}>Full Name</Text>
            <CustomInput type="text" name="full_name" placeholder="full name" />
          </div>
          <div className="relative mb-4">
            <Text secondary={true}>Username</Text>
            <CustomInput type="text" name="username" placeholder="username" />
          </div>
          <div className="relative mb-4">
            <Text secondary={true}>Password</Text>
            <CustomInput
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <CustomButton text="Create Account" primary={true} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default RegisterPage;
