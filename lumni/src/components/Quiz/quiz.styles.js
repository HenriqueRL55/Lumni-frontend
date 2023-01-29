import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 50px auto;
    background-color: #fff;
    width: 60%;
    min-height: 200px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
`;

export const Pontuação = styled.div`
    display: flex;
    min-height: 200px;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    color: #03a9f4;
`;

export const InfoPerguntas = styled.div`
    width: 100%;
    color: #03a9f4;
    position: relative;
`;

export const ContagemPerguntas = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 20px;
    font-size: 28px;
    color: #03a9f4;
`;

export const Pergunta = styled.div`
    margin-bottom: 12px;
    color: #03a9f4;
`;

export const GrupoResposta = styled.div`
    display: flex;
    flex: 1 1 200px;
    justify-content: center;
    align-items: baseline;
    color: #03a9f4;
`;

export const Resposta = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    color: #03a9f4; ;
`;

export const ButtonAnswer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 16px;
    color: #03a9f4;
    background-color: #fff;
    border-radius: 8px;
    padding: 8px;
    border: 3px solid #3e2f5b;
    cursor: pointer;
    margin: 0 12px 10px;
    transition: 0.6s;
    &:hover {
        background-color: #ddd;
    }
`;
