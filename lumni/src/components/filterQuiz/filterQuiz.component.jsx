import React, { useEffect, useState, useLayoutEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import api from "../../services/api";
import Categories from "../../api/Categories";
import Autocomplete from "@mui/material/Autocomplete";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
/* Styles */
import { Container } from "./filterQuiz.styles";

const options = [
    "Nível 1",
    "Nível 2",
    "Nível 3",
    "Nível 4",
    "Nível 5",
    "Nível 6",
    "Nível 7",
    "Nível 8",
    "Nível 9",
    "Nível 10",
];

function FilterQuizData(name, setName, fetchQuestions) {
    const [questionLevel, setQuestionLevel] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !options) {
            setError(true);
            return;
        } else {
            setError(false);
            navigate("/Quiz", 
        { 
            state: {
                category: category,
                questionLevel: questionLevel,

            }
        });
        }
    };

    return (
        <>
            <Container>
                <div style={{ fontSize: 30 }}> Quiz</div>
                {error && (
                    <ErrorMessage>
                        Selecione todos os campos
                    </ErrorMessage>
                )}
                
                <TextField
                    select
                    label="Selecione a categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    variant="outlined"
                    style={{ marginBottom: 30, width: "100%" }}
                >
                    {Categories.map((cat) => (
                        <MenuItem key={cat.category} value={cat.value}>
                            {cat.category}
                        </MenuItem>
                    ))}
                </TextField>
                <Autocomplete
                    //{...defaultProps}
                    options={options}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    onChange={(event, newValue) => {
                        setQuestionLevel(options.indexOf(newValue));
                    }}
                    //value={options[questionLevel]} usar no edit
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Nível da Questão"
                            variant="standard"
                        />
                    )}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleSubmit}
                >
                    Começar Quiz
                </Button>
            </Container>{" "}
        </>
    );
}

export default FilterQuizData;
