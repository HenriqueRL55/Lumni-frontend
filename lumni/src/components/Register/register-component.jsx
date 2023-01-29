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
} from "./register.styles";

/* Componentes */

/* Material ui */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";

import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
        marginBottom: 20,
        flex: 1,
    },
    login: {
        backgroundColor: " #03a9f4",
        color: "white",
        border: "none",
        borderRadius: "10px",
        width: "100%",
    },
}));

export default function Register() {
    const { authenticated, login, logout } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    const navigate = useNavigate();
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = async (event) => {
        navigate("/");
        try {
            console.log("teste");
            console.log(name, email, password);
            event.preventDefault();
            const data = await api.post("/users", {
                email: email,
                password: password,
                name: name,
                type: 3,
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <AllPage>
                <Container>
                    <BlueBackground>
                        <BoxSignIn>
                            <FieldsContainer>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    href="/"
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
                                <PasswordContainer>
                                    <TextField
                                        id="email-input-login"
                                        name="nome"
                                        color="secondary"
                                        label="Nome"
                                        type="name"
                                        variant="outlined"
                                        // onChange={handleChange}
                                        className={classes.field}
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </PasswordContainer>
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
                                        type={
                                            showPassword ? "text" : "password"
                                        }
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
                                </PasswordContainer>

                                <Button
                                    className={classes.login}
                                    onClick={handleSubmit}
                                >
                                    Cadastrar
                                </Button>
                            </FieldsContainer>
                        </BoxSignIn>
                    </BlueBackground>
                </Container>
            </AllPage>
        </>
    );
}
