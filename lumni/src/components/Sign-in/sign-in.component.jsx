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

export default function SignIn() {
    const classes = useStyles();

    return (
        <>
            {" "}
            <Container>
                {" "}
                <MainTitle> Lumni </MainTitle>{" "}
                <FieldsContainer>
                    <TextField
                        id="email-input-login"
                        name="email"
                        color="secondary"
                        label="Email"
                        type="email"
                        variant="outlined"
                        // onChange={handleChange}
                        className={classes.field}
                        value={teste_backend()}

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
                            // value={password}
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
                    <Button
                        className={classes.login}
                        //onClick={handleSubmitForgotPassword}
                    >
                        Enviar
                    </Button>
                </FieldsContainer>
            </Container>{" "}
        </>
    );
}
