import React from "react";
import PageWrapper from "../../components/page_wrapper";
import { Link } from "react-router-dom";
import Heading from "../../components/heading";
import Text from "../../components/text";
import CustomInput from "../../components/input";
import CustomButton from "../../components/custom_button";

const LoginPage = () => {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="space-y-2">
          <Heading primary={true} size="3xl">
            Login
          </Heading>
          {/* username input */}
          <div className="relative mb-4">
            <Text primary={true}>Username</Text>
            <CustomInput type="text" name="username" placeholder="username" />
          </div>
          {/* password input */}
          <div className="relative mb-4">
            <Text primary={true}>Password</Text>
            <CustomInput
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          {/* action buttons */}
          <div className="flex justify-between items-center space-x-2">
            <CustomButton text="Login" primary={true} />
            <Link to="/register">
              <p className="text-sm hover:underline hover:text-blue-500">
                Don't have an account ?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
