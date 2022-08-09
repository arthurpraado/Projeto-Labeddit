import React from "react";
import LoginForm from "./LoginForm";
import Header from "../../components/Header/Header";
import { InputsContainer } from "./styled";
import useRedirectIfLogged from "../../hooks/useRedirectIfLogged";

const LoginPage = () => {
  useRedirectIfLogged()
  return (
    <div>
      <Header />
      <InputsContainer>
        <h1>LabEddit</h1>
        <p> O projeto de rede social da Labenu</p>
        <LoginForm />
      </InputsContainer>
    </div>
  );
};

export default LoginPage;
