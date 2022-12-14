/* Styles */
import {
    Container,
    MainTitle,
    FieldsContainer,
    PasswordContainer,
    AllPage,
    BlueBackground,
    BoxSignIn,
    BoxSignUp,
    FormBox,
} from "./sign-in.styles";

/* Componentes */

/* Material ui */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";

import api from "../../services/api";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
        paddingBottom: 20,
        flex: 1,
    },
    login: {
        background: "#03a9f4",
        color: "white",
        border: "none",
        borderRadius: "10px",
        width: "100%",
    },
    h2: {
        color: "#fff",
        fontSize: "1.2em",
        fontWeight: "500",
    },
    signIn: {
        cursor: "pointer",
        padding: "10px 20px",
        background: "#fff",
        color: "#333",
        fontSize: "16px",
        fontWeight: "500",
        border: "none",
    },
    signUp: {
        cursor: "pointer",
        textDecoration: "none",
        padding: "10px 20px",
        background: "#fff",
        color: "#333",
        fontSize: "16px",
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
            <AllPage>
                <Container>
                    <BlueBackground>
                        <BoxSignIn>
                            <h2 className={classes.h2}>J?? possui uma conta?</h2>
                            <Button className={classes.signIn}>Entrar</Button>
                        </BoxSignIn>
                        <BoxSignUp>
                            <h2 className={classes.h2}>
                                N??o possui uma conta?
                            </h2>
                            <NavLink className={classes.signUp} to="/register">
                                <Button

                                //onClick={handleSubmitRegister}
                                >
                                    Cadastrar
                                </Button>
                            </NavLink>
                        </BoxSignUp>
                    </BlueBackground>

                    <FormBox>
                        <FieldsContainer>
                            {/* {" aaa " + authenticated} */}
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                ></TextField>
                            </PasswordContainer>{" "}
                            <Button
                                className={classes.login}
                                onClick={handleSubmit}
                            >
                                Entrar
                            </Button>
                        </FieldsContainer>
                    </FormBox>
                </Container>
            </AllPage>
        </>
    );
}
