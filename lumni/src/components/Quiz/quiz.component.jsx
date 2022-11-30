import React, { useState } from "react";
import { Perguntas } from "../../api/ApiQuiz";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
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

const useStyles = makeStyles((theme) => ({}));

export default function QuizData() {
    const questions = Perguntas ?? [];
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [showPontuacao, setShowPontuacao] = useState(false);
    const [pontos, setPontos] = useState(0);
    const classes = useStyles();
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

    return (
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
                        <Pergunta>{questions[perguntaAtual].pergunta}</Pergunta>
                    </InfoPerguntas>
                    <Resposta>
                        {questions[perguntaAtual].opcoesResposta.map(
                            (opcoesResposta) => (
                                <GrupoResposta>
                                    <span>{opcoesResposta.alternativa}</span>
                                    <ButtonAnswer
                                        onClick={() =>
                                            proximaPergunta(
                                                opcoesResposta.correta,
                                            )
                                        }
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
    );
}
