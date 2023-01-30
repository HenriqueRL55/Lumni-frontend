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
    BoxSignUp2,
} from "./sign-in.styles";

/* Componentes */

/* Material ui */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import { useState, useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "../../context/auth";

import api from "../../services/api";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
        paddingBottom: 60,
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
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(email, password);
        login(email, password);
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <AllPage>
                <Container>
                    <BlueBackground>
                        <BoxSignIn>
                            <h2 className={classes.h2}>Já possui uma conta?</h2>
                            <Button className={classes.signIn}>Entrar</Button>
                        </BoxSignIn>
                        <BoxSignUp>
                            <h2 className={classes.h2}>
                                Não possui uma conta?
                            </h2>
                            <NavLink className={classes.signUp} to="/register">
                                <Button
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        fontWeight: 700,
                                        justifyContent: "center",
                                        color: " #03a9f4",
                                        textDecoration: "none",
                                    }}
                                    //onClick={handleSubmitRegister}
                                >
                                    Cadastrar
                                </Button>
                            </NavLink>
                        </BoxSignUp>
                    </BlueBackground>

                    <FormBox>
                        <FieldsContainer>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    display: "flex",
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    justifyContent: "center",
                                    letterSpacing: ".3rem",
                                    color: " #03a9f4",
                                    textDecoration: "none",
                                }}
                            >
                                Lumni
                            </Typography>
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
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    variant="outlined"
                                    // onChange={handleChange}
                                    className={classes.field}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                ></TextField>
                                <Button
                                    className={classes.showPassword}
                                    onClick={togglePassword}
                                >
                                    {showPassword ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </Button>
                            </PasswordContainer>{" "}
                            <Button
                                className={classes.login}
                                onClick={handleSubmit}
                            >
                                Entrar
                            </Button>
                            <BoxSignUp2>
                                <NavLink
                                    className={classes.signUp}
                                    to="/register"
                                >
                                    <Button
                                        className={classes.login}
                                        //onClick={handleSubmitRegister}
                                    >
                                        Cadastrar
                                    </Button>
                                </NavLink>
                            </BoxSignUp2>
                        </FieldsContainer>
                    </FormBox>
                </Container>
            </AllPage>
        </>
    );
}
