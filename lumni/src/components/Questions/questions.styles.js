import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(209, 213, 219, 0);
    box-shadow: 4px 2px 50px rgba(0, 0, 0, 0.2);
    max-width: 85%;
    height: 450px;

    @media screen and (max-width: 700px) {
        margin: 100px auto;
    }
`;

export const Title = styled.div`
    grid-area: title;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    font-size: 22px;
    text-align: left;
    padding: 10px 10px 10px 18px;
    font-weight: 500;
    color: #2b2b2b;
    font-family: "Roboto";
    @media screen and (max-width: 700px) {
        text-align: center;
    }
`;

export const Row1Modal = styled.div`
    display: grid;
    grid-area: Title;
`;

export const Row2Modal = styled.div`
    display: grid;
    grid-area: Filters;
`;
