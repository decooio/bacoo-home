import { FormWrapper, Logo } from "@pages/signup";
import React from "react";
import { getLogoDark } from "../../src/helper/utils";
import RegisterForm from "./components/registerForm";

export default function Register() {
  return (
    <div className="w-full h-full flex relative items-center justify-center">
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <Logo src={getLogoDark()} />
        <RegisterForm />
      </FormWrapper>
    </div>
  );
}
