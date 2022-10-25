/* Styles */
import { Container, Title, Row1Modal, Row2Modal } from "./questions.styles";

/* Material UI*/
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { lightGreen, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import makeStyles from "@mui/styles/makeStyles";
import TextField from "@mui/material/TextField";

// API
//import { findAllQuestions } from "../../api/ApiQuestions";

//Context
//import { AuthProvider } from "../../contexts/AuthContext";

const theme = createTheme({
    palette: {
        primary: { main: lightGreen[300] },
        secondary: { main: red[600] },
    },
});

const useStyles = makeStyles((theme) => ({
    titleEdit: {
        fontSize: "24px",
        fontWeight: 900,
        padding: "20px 10px 0px 10px",
        color: "#444446",
        fontFamily: "Roboto",
    },
    paperModal: {
        marginTop: "10%",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        width: 600,
        maxHeight: 800,
        border: "1px solid grey",
        borderRadius: "10px",
        boxShadow:
            "0px 2.075px 4.15px rgba(0, 0, 0, 0.16), 0px 4.15px 8.3px rgba(0, 0, 0, 0.12), 0px 2.075px 16.6px rgba(0, 0, 0, 0.1)",
        padding: "2rem 0",
        fontFamily: "Roboto",
        textAlign: "center",
        "@media (max-width: 680px)": {
            marginTop: "80%",
            transform: "translate(-50%, -50%) scale(0.7)",
        },
    },
    buttonModal: {
        width: "10rem",
        background: "#e0645e",
        height: "55px",
        right: 20,
        textTransform: "inherit",
        float: "center",
        fontFamily: "Roboto",
        fontWeight: 700,
        marginLeft: "4rem",
        marginTop: "1rem",
        fontSize: 15,
        transform: "translate(-1rem, -12px) scale(0.9)",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    },
    textControl: {
        width: "50%",
        "@media (max-width: 680px)": {
            width: "80%",
            padding: 10,
        },
    },
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData("Cupcake", 305, 3.7),
    createData("Donut", 452, 25.0),
    createData("Eclair", 262, 16.0),
    createData("Frozen yoghurt", 159, 6.0),
    createData("Gingerbread", 356, 16.0),
    createData("Honeycomb", 408, 3.2),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Jelly Bean", 375, 0.0),
    createData("KitKat", 518, 26.0),
    createData("Lollipop", 392, 0.2),
    createData("Marshmallow", 318, 0),
    createData("Nougat", 360, 19.0),
    createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function QuestionsData() {
    //const { auth } = useContext(AuthProvider);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [questionTitle, setQuestionTitle] = useState("");
    const classes = useStyles();
    const [questions, setQuestions] = useState([]);
    const [openRemove, setOpenRemove] = useState(false);

    // useEffect(() => {
    //     const callApiFindAllQuestions = async () => {
    //         const response = await findAllQuestions(
    //             auth,
    //             auth.data.user.stateId,
    //         );

    //         const { message, payload } = response.data;

    //         if (response.status !== 200) throw Error(message);

    //         const data = [];
    //         Object.entries(payload[0].question).map((curr) =>
    //             data.push({ name: curr[0], value: curr[1] }),
    //         );
    //         setQuestions(data);
    //     };

    //     try {
    //         callApiFindAllQuestions();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [auth]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleOpenRemove = () => {
        setOpenRemove(true);
    };

    const handleCloseRemove = () => {
        setOpenRemove(false);
    };

    // const handleOpenRemove = (name) => {
    //     setOpenRemove(true);
    //     setCurrent(name);
    // };

    // const handleCloseRemove = () => {
    //     setOpenRemove(false);
    // };

    // const handleOpenEdit = (name, value) => {
    //     setOpenEdit(true);
    //     setCurrentFertilizerName(name);
    //     setCurrentFertilizerValue(value);
    // };

    // const handleCloseEdit = () => {
    //     setOpenEdit(false);
    // };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const body = (
        <div className={classes.paperModal}>
            <h2 id="simple-modal-title" className={classes.titleEdit}>
                Adicionar nova pergunta
            </h2>
            <TextField
                id="new-question"
                className={classes.textControl}
                label="Pergunta"
                style={{ margin: 8 }}
                placeholder="Informe aqui"
                margin="normal"
                type="text"
                value={questionTitle}
                onChange={(event) => setQuestionTitle(event.target.value)}
            />
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color={"secondary"}
                    className={classes.buttonModal}
                    //onClick={handleNewQuestion}
                >
                    Adicionar
                    {<AddIcon />}
                </Button>
            </ThemeProvider>
        </div>
    );

    const editBody = (
        <div className={classes.paperModal}>
            <h2 id="simple-modal-title" className={classes.titleEdit}>
                Editar pergunta
            </h2>

            <TextField
                id="new-question"
                className={classes.textControl}
                label="Pergunta"
                style={{ margin: 8 }}
                placeholder="Informe aqui"
                margin="normal"
                type="text"
                value={questionTitle}
                onChange={(event) => setQuestionTitle(event.target.value)}
            />
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color={"secondary"}
                    className={classes.buttonModal}
                    //onClick={handleEditQuestion}
                >
                    Editar
                </Button>
            </ThemeProvider>
        </div>
    );

    const deleteBody = (
        <div className={classes.paperModal}>
            <h2 id="simple-modal-title" className={classes.titleEdit}>
                Remover esta pergunta?
            </h2>
            <Row1Modal>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="button"
                        className={classes.buttonModalRemove}
                        //onClick={handleRemoveQuestion}
                    >
                        <span className={classes.titleButton}>Remover</span>
                    </Button>
                </ThemeProvider>
            </Row1Modal>
            <Row2Modal>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        type="button"
                        className={classes.buttonModalRemoveNot}
                        onClick={handleCloseRemove}
                    >
                        <span className={classes.titleButton}>Cancelar</span>
                    </Button>
                </ThemeProvider>
            </Row2Modal>
        </div>
    );

    return (
        <Container component={Paper}>
            <Title variant="h6" component="div">
                {"Menu de Perguntas"}
            </Title>
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    //onClick={handleOpen}
                >
                    {<AddIcon> </AddIcon>} Nova Pergunta
                </Button>
            </ThemeProvider>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                          )
                        : rows
                    ).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>

                            <TableCell style={{ width: 160 }} align="right">
                                <EditIcon onClick={() => handleOpenEdit()} />
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                <DeleteIcon
                                    onClick={() => handleOpenRemove()}
                                />
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: "All", value: -1 },
                            ]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {body}
            </Modal>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {editBody}
            </Modal>
            <Modal
                open={openRemove}
                onClose={handleCloseRemove}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {deleteBody}
            </Modal>
        </Container>
    );
}
