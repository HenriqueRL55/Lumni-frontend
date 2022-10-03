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
                        // value={email}
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
