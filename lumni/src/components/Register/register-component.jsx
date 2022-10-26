/* Styles */
import {
    Container,
    MainTitle,
    FieldsContainer,
    PasswordContainer,
} from "./register.styles";

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

export default function Register() {
    const { authenticated, login, logout } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    const handleSubmit = async (event)  => {
        try {
            console.log("teste")
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
            {" "}
            <Container>
                {" "}
                <MainTitle> Lumni</MainTitle>{" "}
                <FieldsContainer>
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
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    </PasswordContainer>
                    <Button className={classes.login} onClick={handleSubmit}>
                        Cadastrar
                    </Button>
                </FieldsContainer>
            </Container>{" "}
        </>
    );
}
