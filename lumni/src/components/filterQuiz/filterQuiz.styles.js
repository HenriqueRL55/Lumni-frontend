import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 20px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(209, 213, 219, 0);
    box-shadow: 4px 2px 50px rgba(0, 0, 0, 0.2);
    max-width: 30%;
    height: 450px;

    @media screen and (max-width: 1240px) {
        margin: 100px auto;
        max-width: 50%;
    }
    @media screen and (max-width: 750px) {
        max-width: 70%;
    }
    @media screen and (max-width: 480px) {
        max-width: 90%;
    }
`;

export const ContainerRow = styled.div`
    display: grid;
    grid-template-areas:
        "text"
        "filters"
        "button";
`;

export const Text = styled.div`
    display: grid;
    grid-area: text;
    font-family: "monospace";
    justify-content: "center";
    text-align: center;
    padding: 20px 40px;
`;

export const Filters = styled.div`
    display: grid;
    grid-area: filters;
    width: 50%;
    margin: 12px;
    margin: auto;
`;

export const ButtonCont = styled.div`
    display: grid;
    grid-area: button;
    width: 50%;

    margin: 20px auto;
`;
