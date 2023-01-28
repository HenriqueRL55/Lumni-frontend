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
    const [playerID, setplayerID] = useState(0);
    const Value = useLocation().state;
 

    useEffect(() => {
        async function findperguntas() {
            try {

                const id = JSON.parse(localStorage.getItem("user")).id;
                const category_name = Categories.find((item) => item.value == Value.category);
                const player = await api.get(`/findUser/${id}`);
                console.log(player)

                console.log(category_name);
                var response;

                if(player.data.player.length == 0){
                    response = await api.get(`/randomProblem/${2}`);

                } else {
                    setplayerID(player.data.player[0].id);
                    response = await api.get(`/randomProblemByTheme/${player.data.player[0].id}/theme/${category_name.value}`);
                }

                const letras = ["A)", "B)", "C)", "D)", "E)"];
                const array_obj = [response.data];
                const newObject = array_obj.map((item, index) => {
                    return {
                        pergunta:{
                            question: item.problems[index].description,
                            id: item.problems[index].id,
                        },
                        opcoesResposta: item.options
                        .filter((item) => item.description != "" && item.description != null && item.description.trim() != "")
                        .map((item2, index2) => {
                            return {
                                id: item2.id,
                                resposta: item2.description,
                                correta: item2.correct,
                                alternativa: letras[index2],
                            };
                        }),
                    };
                });
                
                console.log(newObject)
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

    function addElement(opcoesResposta, pergunta) {
        setIndexRespondida(indexRespondida + 1);
        const resultado = {
            pergunta: pergunta,
            resposta: opcoesResposta,
        }

        ArmazenaRespondida.push(resultado);
        saveResult();
    }

    async function saveResult() {
        
        try {
            await api.post("answers" , {
                option_id: ArmazenaRespondida[0].resposta.id,
                used_time: 30,
                player_id: playerID,
                problem_id: ArmazenaRespondida[0].pergunta,
            })
            console.log("enviou resposta")
        } catch (err) {
            console.log(err);
        }
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
                </Pontuação>
            ) : (
                <>
                    
                    <InfoPerguntas>
                        <ContagemPerguntas>
                            <span>
                                Pergunta {perguntaAtual + 1}/{questions.length}
                            </span>
                        </ContagemPerguntas>
                        <Pergunta>
                            {questions[perguntaAtual].pergunta.question}
                        </Pergunta>
                    </InfoPerguntas>
                    <Resposta>
                        {questions[perguntaAtual].opcoesResposta.map(
                            (opcoesResposta, index) => (
                                <GrupoResposta key={index}>
                                    <span>{opcoesResposta.alternativa}</span>
                                    <ButtonAnswer 
                                        onClick={() => {
                                            proximaPergunta(
                                                opcoesResposta.correta,
                                            );
                                            addElement(opcoesResposta, questions[perguntaAtual].pergunta.id);
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
