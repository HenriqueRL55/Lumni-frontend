import React, { useEffect, useState, useLayoutEffect} from "react";
import api from "../../services/api";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import Categories from "../../api/Categories";
/* Styles */
import {
    Container,
    Pontuação,
    InfoPerguntas,
    ContagemPerguntas,
    Pergunta,
    GrupoResposta,
    Resposta,
    ButtonAnswer,
} from "./quiz.styles";
import { ClassNames } from "@emotion/react";
import { useNavigate, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

function QuizData() {
    const [questions, setquestions] = useState([]);
    const [ArmazenaRespondida, setArmazenaRespondida] = useState([]);
    const [indexRespondida, setIndexRespondida] = useState(0);
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [showPontuacao, setShowPontuacao] = useState(false);
    const [pontos, setPontos] = useState(0);
    const classes = useStyles();
    const Value = useLocation().state;
    const navigate = useNavigate();

    useEffect(() => {
        async function findperguntas() {
            try {

                const id = JSON.parse(localStorage.getItem("user")).id;
                const category_name = Categories.find((item) => item.value == Value.category);
                console.log(category_name);
                
                const player = await api.get(`/findUser/${id}`);
                var response;

                console.log(player)
                if(player.data.player.length == 0){
                    response = await api.get(`/randomProblem/${2}`);

                } else {
                    response = await api.get(`/randomProblemByTheme/${id}/theme/${category_name.value}`);
                }
                

                console.log(id);
                console.log(category_name);
                console.log(Value);
                
                
                /*
                const teste = [
                    {
                        pergunta: response.data.problems[0].description,
                        opcoesResposta: [
                            {resposta: response.data.options[0].description, correta: response.data.options[0].correct, alternativa: "A)"},
                            {resposta: response.data.options[1].description, correta: response.data.options[1].correct, alternativa: "B)"},
                            {resposta: response.data.options[2].description, correta: response.data.options[2].correct, alternativa: "C)"},
                            {resposta: response.data.options[3].description, correta: response.data.options[3].correct, alternativa: "D)"},
                        ]
                    },
                ];*/

                const letras = ["A)", "B)", "C)", "D)", "E)"];
                const array_obj = [response.data];
                console.log(array_obj);
                const newObject = array_obj.map((item, index) => {
                    return {
                        pergunta: item.problems.map((item) => {
                            return item.description;
                        }),
                        opcoesResposta: item.options
                        .filter((item) => item.description != "" && item.description != null && item.description.trim() != "")
                        .map((item2, index2) => {
                            return {
                                resposta: item2.description,
                                correta: item2.correct,
                                alternativa: letras[index2],
                            };
                        }),
                    };
                });
                
                setquestions(newObject);
            } catch (err) {
                console.log(err);
            }
        }
        findperguntas();
    }, []);

    function proximaPergunta(correta) {
        const nextQuestion = perguntaAtual + 1;

        if (correta) {
            setPontos(pontos + 1);
        }

        if (nextQuestion < questions.length) {
            setPerguntaAtual(nextQuestion);
        } else {
            setShowPontuacao(true);
        }
    }

    function addElement(opcoesResposta) {
        setIndexRespondida(indexRespondida + 1);
        setArmazenaRespondida([...ArmazenaRespondida, opcoesResposta]);
    }
    /*
   return questions[0] ? (
        console.log(questions),
        <h1>
            {questions[0].opcoesResposta[0].resposta}
        </h1>
    ): console.log("nada");*/

    return questions[0] ? (
        <Container>
            {showPontuacao ? (
                <Pontuação>
                    <span>
                        Sua pontuação é {pontos} de {questions.length}
                    </span>
                    {console.log(ArmazenaRespondida, questions)}
                </Pontuação>
            ) : (
                <>
                    
                    <InfoPerguntas>
                        <ContagemPerguntas>
                            <span>
                                Pergunta {perguntaAtual + 1}/{questions.length}
                            </span>
                        </ContagemPerguntas>
                        <Pergunta>{questions[perguntaAtual].pergunta}</Pergunta>
                    </InfoPerguntas>
                    <Resposta>
                        {questions[perguntaAtual].opcoesResposta.map(
                            (opcoesResposta) => (
                                <GrupoResposta>
                                    <span>{opcoesResposta.alternativa}</span>
                                    <ButtonAnswer
                                        onClick={() => {
                                            proximaPergunta(
                                                opcoesResposta.correta,
                                            );
                                            addElement(opcoesResposta);
                                        }}
                                    >
                                        {opcoesResposta.resposta}
                                    </ButtonAnswer>
                                </GrupoResposta>
                            ),
                        )}
                    </Resposta>
                </>
            )}
        </Container>
    ) : (
        <h1>Carregando...</h1>
        //load the page
    );
}

export default QuizData;
