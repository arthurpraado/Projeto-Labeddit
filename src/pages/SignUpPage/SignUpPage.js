import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import useRedirectIfLogged from "../../hooks/useRedirectIfLogged";
import { InputsContainer } from "../LoginPage/styled";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
 useRedirectIfLogged()
  return (
    <div>
      <Header />
      <InputsContainer>
        <h1>Olá, boas vindas ao LabEddit!</h1>
        <SignUpForm />
      </InputsContainer>
    </div>
  );
};

export default SignUpPage;
