/* Styles */
import {
  Container,
  MainTitle,
  FieldsContainer,
  PasswordContainer,
} from "./sign-in.styles";

/* Componentes */

/* Material ui */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";

import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  field: {
    width: "100%",
    paddingBottom: 20,
    flex: 1,
  },
  login: {
    backgroundColor: "rgb(215, 59, 48)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    width: "100%",
  },
}));

async function teste_backend() {
  try {
    const response = await api.get("/");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
teste_backend();

export default function SignIn() {
  const { authenticated, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(email, password);
    login(email, password);
  };

  return (
    <>
      {" "}
      <Container>
        {" "}
        <MainTitle> Lumni </MainTitle>{" "}
        <FieldsContainer>
          {" aaa " + authenticated}
          <TextField
            id="email-input-login"
            name="email"
            color="secondary"
            label="Email"
            type="email"
            variant="outlined"
            // onChange={handleChange}
            className={classes.field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordContainer>
            <TextField
              id="password-input-login"
              name="password"
              color="secondary"
              label="Senha"
              // type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              variant="outlined"
              // onChange={handleChange}
              className={classes.field}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button
            // className={classes.showPassword}
            // onClick={togglePassword}
            >
              {/* {showPassword ? (
                                <VisibilityIcon />
                            ) : (
                                <VisibilityOffIcon />
                            )} */}
              TESTE
            </Button>
          </PasswordContainer>
          <Button className={classes.login} onClick={handleSubmit}>
            Entrar
          </Button>
        </FieldsContainer>
      </Container>{" "}
    </>
  );
}
