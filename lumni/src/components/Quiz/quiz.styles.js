import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 0 auto;
    background-color: #261132;
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
    color: #fafafa;
`;

export const InfoPerguntas = styled.div`
    width: 100%;
    color: #fafafa;
    position: relative;
`;

export const ContagemPerguntas = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 20px;
    font-size: 28px;
    color: #fafafa;
`;

export const Pergunta = styled.div`
    margin-bottom: 12px;
`;

export const GrupoResposta = styled.div`
    display: flex;
    flex: 1 1 200px;
    justify-content: center;
    align-items: baseline;
`;

export const Resposta = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    color: #fafafa;
`;

export const ButtonAnswer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    font-size: 16px;
    color: #fff;
    background-color: #ba5c12;
    border-radius: 8px;
    padding: 8px;
    border: 3px solid #3e2f5b;
    cursor: pointer;
    margin: 0 12px 10px;
    transition: 0.6s;
    &:hover {
        background-color: #261132;
    }
`;
