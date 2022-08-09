import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToFeedPage,
  goToLoginPage,
  goToSignUpPage,
} from "../../routes/coordinator";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/users/login`;
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(url, body)
      .then((response) => {
        localStorage.token = response.data.token;
        clear();
        goToFeedPage(navigate);
      })
      .catch((error) => {
        alert(error.data);
        goToLoginPage();
      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <TextField
          name={"email"}
          label={"email"}
          value={form.email}
          onChange={onChange}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          label="password"
          onChange={onChange}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button onClick={handleOnSubmit} type="submit" variant="contained">
          Continuar
        </Button>
        <Button variant="contained" onClick={() => goToSignUpPage(navigate)}>
          Crie uma conta
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
